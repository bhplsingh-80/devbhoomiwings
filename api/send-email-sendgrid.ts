import { VercelRequest, VercelResponse } from '@vercel/node';
import { Readable } from 'stream';

// This is an alternative implementation using SendGrid
// To use this, install @sendgrid/mail: npm install @sendgrid/mail

interface FileAttachment {
  filename: string;
  content: string; // base64 for SendGrid
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
              content: Buffer.concat(chunks).toString('base64'),
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

    // Use SendGrid API (you need to install @sendgrid/mail)
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Format the message with name if provided
    const htmlMessage = name
      ? `<p><strong>From:</strong> ${name}</p>\n${message}`
      : message;

    // Send admin notification email
    const adminEmail: any = {
      to: 'devbhoomiwings@gmail.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@devbhoomiwings.com',
      subject,
      html: htmlMessage,
      replyTo: replyTo || 'support@devbhoomiwings.com',
    };

    // Add attachments if any
    if (attachments.length > 0) {
      adminEmail.attachments = attachments.map(att => ({
        filename: att.filename,
        content: att.content,
        type: att.contentType,
        disposition: 'attachment',
      }));
    }

    await sgMail.send(adminEmail);

    // Send confirmation email to user
    if (replyTo) {
      const attachmentList = attachments.length > 0
        ? `<p><strong>Attached Files:</strong> ${attachments.map(a => a.filename).join(', ')}</p>`
        : '';

      const userEmail = {
        to: replyTo,
        from: process.env.SENDGRID_FROM_EMAIL || 'noreply@devbhoomiwings.com',
        subject: 'We received your message - Devbhoomi Wings',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2 style="color: #14b8a6;">Thank You for Contacting Devbhoomi Wings</h2>
            <p>We have received your query and will review it shortly.</p>
            <p><strong>Your Message Details:</strong></p>
            <p><strong>Subject:</strong> ${subject}</p>
            ${attachmentList}
            <p>Our team typically responds within 24 hours.</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              Best regards,<br/>
              <strong>Devbhoomi Wings Team</strong><br/>
              Travel with trust
            </p>
          </div>
        `,
      };

      await sgMail.send(userEmail);
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
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
