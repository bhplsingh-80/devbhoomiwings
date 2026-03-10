import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

// Configure your email service (Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
  },
});

interface FileAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let to = '';
    let subject = '';
    let message = '';
    let replyTo = '';
    let name = '';
    const attachments: FileAttachment[] = [];

    // Check if request contains multipart form data (with files)
    const contentType = req.headers['content-type'] || '';
    
    if (contentType.includes('multipart/form-data')) {
      // Handle multipart form data
      const busboy = require('busboy');
      const bb = busboy({ headers: req.headers });

      await new Promise((resolve, reject) => {
        bb.on('field', (fieldname: string, val: string) => {
          switch (fieldname) {
            case 'to':
              to = val;
              break;
            case 'subject':
              subject = val;
              break;
            case 'message':
              message = val;
              break;
            case 'replyTo':
              replyTo = val;
              break;
            case 'name':
              name = val;
              break;
          }
        });

        bb.on('file', (fieldname: string, file: Readable, info: any) => {
          const chunks: Buffer[] = [];
          file.on('data', (data) => chunks.push(data));
          file.on('end', () => {
            attachments.push({
              filename: info.filename,
              content: Buffer.concat(chunks),
              contentType: info.mimeType,
            });
          });
        });

        bb.on('close', resolve);
        bb.on('error', reject);
      });

      req.pipe(bb);
    } else {
      // Handle JSON request
      const body = req.body;
      to = body.to;
      subject = body.subject;
      message = body.message;
      replyTo = body.replyTo;
      name = body.name;
    }

    // Validate input
    if (!to || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format the message with name if provided
    const htmlMessage = name
      ? `<p><strong>From:</strong> ${name}</p>\n${message}`
      : message;

    // Send email to admin
    const mailOptions: any = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmlMessage,
      replyTo: replyTo || process.env.EMAIL_USER,
    };

    // Add attachments if any
    if (attachments.length > 0) {
      mailOptions.attachments = attachments.map(att => ({
        filename: att.filename,
        content: att.content,
        contentType: att.contentType,
      }));
    }

    const info = await transporter.sendMail(mailOptions);

    // Also send confirmation email to user
    if (replyTo) {
      const attachmentList = attachments.length > 0
        ? `<p><strong>Attached Files:</strong> ${attachments.map(a => a.filename).join(', ')}</p>`
        : '';

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: replyTo,
        subject: 'We received your message - Devbhoomi Wings',
        html: `
          <h2>Thank You for Contacting Devbhoomi Wings</h2>
          <p>We have received your query and will review it shortly.</p>
          <p><strong>Your Message Details:</strong></p>
          <p><strong>Subject:</strong> ${subject}</p>
          ${attachmentList}
          <p>Our team typically responds within 24 hours.</p>
          <p>Best regards,<br/><strong>Devbhoomi Wings Team</strong></p>
        `,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
      attachmentsCount: attachments.length,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
