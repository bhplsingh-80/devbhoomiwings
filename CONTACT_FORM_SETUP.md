# Contact Form Auto-Send Integration Guide

## Overview
The contact form now has auto-send functionality that:
1. **Stores messages in Supabase database** - All contact messages are saved for reference
2. **Sends automatic email notifications** - Admin receives email when form is submitted
3. **Sends confirmation emails** - Users receive confirmation their message was received
4. **Auto-clears form** - Form resets after successful submission

## Setup Steps

### 1. Supabase Database Setup
1. Go to your Supabase dashboard
2. Create a new table called `contact_messages` OR run the migration file:
   - File: `supabase/migrations/001_create_contact_messages.sql`
   - Copy the SQL and run it in your Supabase SQL editor

3. The table structure:
   - `id`: Auto-increment primary key
   - `name`: Contact person's name
   - `email`: Contact person's email
   - `phone`: Contact person's phone
   - `message`: The message content
   - `created_at`: Timestamp of submission
   - `status`: Message status (new, read, replied)

### 2. Environment Variables Setup
1. Copy `.env.example` to `.env` in the project root
2. Add your configuration values:

```env
# From Supabase Dashboard
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# For Gmail (recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

### 3. Gmail App Password Setup (if using Gmail)
1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Factor Authentication (if not already enabled)
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character password and use it as `EMAIL_PASSWORD` in `.env`

### 4. Install Dependencies
```bash
npm install
```

This will install:
- `@vercel/node` - For Vercel serverless functions
- `nodemailer` - For sending emails

### 5. Deploy to Vercel
1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`

4. Deploy will automatically build and deploy the serverless function at `/api/send-email`

## How It Works

### Frontend Flow (ContactPage.tsx)
1. User fills out the form with Name, Email, Phone, and Message
2. User clicks "Send Message" button
3. Form validates all fields are filled
4. Form data is sent to Supabase to be stored
5. Email notification is triggered to admin

### Backend Flow (api/send-email.ts)
1. Receives POST request with form data
2. Sends admin notification email to `bhupalsingh@devbhoomiwings.com`
3. Sends confirmation email to user
4. Returns success response

### Automatic Actions
- ✅ Message stored in database
- ✅ Admin notification sent immediately
- ✅ User confirmation email sent
- ✅ Form clears after 5 seconds
- ✅ Success message displays for 5 seconds

## Testing Locally

If you want to test the email functionality locally:

1. Install dependencies:
```bash
npm install
```

2. Create `.env` with your email credentials

3. For local development, the API won't work through `localhost`. You can:
   - Deploy to Vercel and test from there
   - Use Ngrok to expose localhost: `npx ngrok http 3000`
   - Mock the API call for testing

## Troubleshooting

### Emails not sending
- ✗ Check `EMAIL_USER` and `EMAIL_PASSWORD` are correct
- ✗ For Gmail, make sure you used an App Password (not your regular password)
- ✗ Verify 2-FA is enabled on your Gmail account

### Messages not storing in database
- ✗ Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct
- ✗ Check that `contact_messages` table exists in Supabase
- ✗ Check Supabase RLS policies allow inserts

### Form not submitting
- ✗ Check browser console for errors
- ✗ Verify all form fields are filled
- ✗ Check Network tab to see API response

## Email Recipients

- **Admin Email**: `bhupalsingh@devbhoomiwings.com` (receives all contact submissions)
- **User Email**: User's email from form (receives confirmation)

To change the admin email, edit the `sendEmailNotification` function in `ContactPage.tsx` and change:
```typescript
to: 'bhupalsingh@devbhoomiwings.com',
```

## Alternative Email Services

If you want to use SendGrid instead of Gmail:

1. Install SendGrid: `npm install @sendgrid/mail`
2. Update `api/send-email.ts` to use SendGrid SDK
3. Add `SENDGRID_API_KEY` to environment variables

## Files Modified/Created

- ✅ [src/app/pages/ContactPage.tsx](src/app/pages/ContactPage.tsx) - Added Supabase integration
- ✅ [api/send-email.ts](api/send-email.ts) - Serverless email function
- ✅ [supabase/migrations/001_create_contact_messages.sql](supabase/migrations/001_create_contact_messages.sql) - Database schema
- ✅ [.env.example](.env.example) - Environment variables template
- ✅ [package.json](package.json) - Added dependencies

## Next Steps

1. Add the environment variables to your `.env` file
2. Run `npm install` to install dependencies
3. Deploy to Vercel
4. Test the contact form
5. Check Supabase dashboard to see stored messages
6. Check your email for admin notifications

For questions or issues, check the troubleshooting section above.

---

# File Attachments Feature (NEW)

## Overview

The "Send Query" form in the sidebar now supports **file attachments**. Users can attach proof documents, certifications, and other supporting files directly through the contact form.

## Features Added

### 1. **Frontend Enhancement** ([src/app/components/FilterSidebar.tsx](src/app/components/FilterSidebar.tsx))
- ✨ File upload input with drag-and-drop interface
- ✨ Multiple file selection support
- ✨ File type validation (PDF, Images, Word, Excel)
- ✨ File size validation (max 10MB per file)
- ✨ Visual list of attached files with remove button
- ✨ Automatic FormData submission when files are attached

### 2. **Backend Enhancement**
Both email handlers now support file attachments:

**Gmail Handler** ([api/send-email.ts](api/send-email.ts))
- Parses multipart/form-data with `busboy`
- Uses nodemailer to send emails with attachments
- Handles both JSON (no files) and FormData (with files) requests

**SendGrid Handler** ([api/send-email-sendgrid.ts](api/send-email-sendgrid.ts))
- Parses multipart/form-data with `busboy`
- Converts file buffers to base64 for SendGrid API
- Sends attachments with email

### 3. **Supported File Types**
```
✓ PDF documents (.pdf)
✓ Images (JPEG, PNG) (.jpg, .jpeg, .png)
✓ Microsoft Word (.doc, .docx)
✓ Microsoft Excel (.xls, .xlsx)
✗ Max file size: 10MB per file
✗ No executable files or scripts
```

## How Users Attach Documents

### Step-by-Step:
1. **Open Send Query Form** - Located in the left sidebar on the homepage
2. **Fill Form Fields**:
   - Your Name (required)
   - Email Address (required)
   - Subject (optional)
   - Message (required)
3. **Attach Documents** (optional):
   - Click the "Attach Documents" section
   - Drag & drop files OR click to browse
   - Multiple files can be selected at once
4. **Review Attachments**:
   - Files display with their names
   - Click the X button to remove any file
5. **Send Query**:
   - Click "Send Query" button
   - Files are automatically sent with the email to admin

### Example Use Cases:
- 📄 Customer attaching ID/Passport for booking
- 📋 Submitting insurance policy document
- 💳 Proof of payment/booking confirmation
- 📸 Photos of damaged luggage/packages
- 💬 Customer testimonial documents
- 📑 Business documents or agreements

## What Happens with Attachments

### Email to Admin (bhupalsingh@devbhoomiwings.com)
- Receives all attached files as email attachments
- Email shows sender's name and message
- Lists all attached file names

### Email to Customer (User's Email)
- Receives confirmation their message was received
- Confirmation email lists the attached file names
- Reassures 24-hour response time

## Installation & Setup

### 1. Install busboy Dependency
The backend needs `busboy` to parse file uploads:

```bash
cd DEVBHUMI-WINGS
npm install busboy
```

Or add to package.json:
```json
{
  "dependencies": {
    "busboy": "^2.0.0"
  }
}
```

### 2. Update Environment Variables
Ensure your `.env` has email configuration:

```env
# Gmail Option (Recommended)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# OR SendGrid Option
SENDGRID_API_KEY=your-sendgrid-api-key
SENDGRID_FROM_EMAIL=noreply@devbhoomiwings.com
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Deploy to Vercel
Push changes to GitHub and Vercel will redeploy automatically.

## File Storage

### Where Files Are Stored
- **Currently**: Files are sent directly via email, not stored on your server
- **Benefits**: No server storage needed, files go directly to admin
- **Limitation**: No archival of received files on your server

### For Archiving Received Files
If you want to store uploaded files on your server, consider:

1. **Cloud Storage Options**:
   - AWS S3 (recommended)
   - Google Cloud Storage
   - Azure Blob Storage
   - GitHub (for small files)

2. **Local Storage** (not recommended for production):
   - Requires additional setup
   - Hard to maintain and backup
   - Limited scalability

### Future Enhancement
You can modify the backend to:
1. Save files to cloud storage
2. Generate download links
3. Create admin dashboard to view submissions

## Testing the Feature

### Test Steps:
1. Navigate to your homepage
2. Locate the "Send Query" sidebar on the left
3. Fill in the form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Subject: "Testing file upload"
   - Message: "Testing attachments feature"
4. Click "Attach Documents"
5. Select a PDF or image file
6. Check that file appears in the list
7. Click "Send Query"
8. Go to your admin email inbox
9. Check that file attachment is present

### Troubleshooting Tests:
- ✓ File size shows correctly
- ✓ Unaccepted file types show alert
- ✓ Remove button works (X icon)
- ✓ Submission works with files
- ✓ Submission works without files (backwards compatible)
- ✓ Admin receives email with attachments
- ✓ Customer receives confirmation email

## Public Documents Directory

A new folder has been created for storing proof documents:

### Location: `public/documents/`

**Subdirectories**:
```
public/documents/
├── certifications/     # Business certifications, CIN, etc.
├── licenses/          # Operating licenses
├── insurance/         # Insurance certificates
├── testimonials/      # Customer reviews and testimonials
├── terms/            # Terms & conditions, policies
└── README.md         # Documentation for folder
```

### How to Use:
1. Place proof documents in appropriate subdirectories
2. Reference in your website pages:
   ```html
   <a href="/documents/certifications/CIN.pdf">View CIN</a>
   ```
3. Display certifications on About/Contact pages
4. Link to licenses and insurance documents

### Example Files:
```
public/documents/
├── certifications/
│   ├── CIN-U79110UT2025PTC020432.pdf
│   └── GST-certificate.pdf
├── licenses/
│   ├── travel-license-2025.pdf
│   └── tour-operator-license.pdf
├── insurance/
│   ├── liability-coverage-2025.pdf
│   └── theft-coverage.pdf
└── testimonials/
    └── customer-reviews.pdf
```

### Frontend Display Example:
```tsx
// Show proof of certifications on About page
<div className="certifications">
  <h3>Our Certifications</h3>
  <ul>
    <li>
      <a href="/documents/certifications/CIN.pdf" target="_blank">
        CIN: U79110UT2025PTC020432
      </a>
    </li>
    <li>
      <a href="/documents/licenses/travel-license.pdf" target="_blank">
        Travel License 2025
      </a>
    </li>
  </ul>
</div>
```

## Security Considerations

### File Validation
✓ **Frontend**: Checks file type and size before upload
✓ **Backend**: Re-validates file type and size
✓ **Email**: Files sent via email (encrypted by mail provider)

### Best Practices
⚠️ Don't accept executable files (.exe, .sh, .bat)
⚠️ Don't store files in web-accessible folders without permission checks
⚠️ Set reasonable file size limits (10MB enforced)
⚠️ Monitor for abuse (spam uploads)

### To Improve Security:
1. Implement rate limiting
2. Add virus scanning for uploaded files
3. Store files in cloud storage with access controls
4. Log all file uploads

## API Details

### Request Format (with files)
```
POST /api/send-email
Content-Type: multipart/form-data

{
  "to": "bhupalsingh@devbhoomiwings.com",
  "subject": "Query from Devbhoomi",
  "message": "Customer message",
  "replyTo": "customer@example.com",
  "name": "Customer Name",
  "attachments": [File, File, ...] // Multiple files
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "email-id",
  "attachmentsCount": 2
}
```

### Response (Error)
```json
{
  "error": "Failed to send email",
  "details": "reason"
}
```

## Troubleshooting

### Issue: Files not uploading
**Solutions**:
- Check file is under 10MB
- Check file type is supported
- Open browser console for JS errors
- Ensure `busboy` is installed: `npm install busboy`

### Issue: Attachments not in email
**Solutions**:
- Verify FormData is being used (check Network tab)
- Ensure multipart/form-data content-type
- Check backend logs for upload errors
- Test with simple text file first

### Issue: Email not sending
**Solutions**:
- Check EMAIL_USER and EMAIL_PASSWORD are correct
- Verify Gmail 2FA and app password setup
- Check email service rate limits
- Look for error in function logs

### Issue: File type rejected
**Solutions**:
- Currently supported: PDF, JPG, PNG, DOC, DOCX, XLS, XLSX
- Unsupported types will show alert and not be added
- To add support for more types, update validation in FilterSidebar.tsx and backend

## Future Enhancements

💡 **Planned Features**:
- File upload progress bar
- File preview (thumbnails)
- Admin dashboard to view submissions
- Cloud storage integration (AWS S3)
- Spam/malware scanning
- File archival system
- Automatic file cleanup (old submissions)
- Compression for large files

---

**Last Updated**: 2026-03-10  
**Version**: 2.0 (with file attachments)
