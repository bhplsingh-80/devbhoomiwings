import { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Send, Upload, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function FilterSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const maxFileSize = 10 * 1024 * 1024; // 10MB
  const allowedFileTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).filter(file => {
      // Validate file type
      if (!allowedFileTypes.includes(file.type)) {
        alert(`File "${file.name}" type not allowed. Allowed: PDF, Images (JPG/PNG), Word, Excel`);
        return false;
      }
      // Validate file size
      if (file.size > maxFileSize) {
        alert(`File "${file.name}" exceeds 10MB limit`);
        return false;
      }
      return true;
    });

    setAttachedFiles([...attachedFiles, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(attachedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // If we have files or API is preferred, use FormData
      if (attachedFiles.length > 0) {
        const formData = new FormData();
        formData.append('to', 'info@devbhoomiwings.com');
        formData.append('replyTo', email);
        formData.append('subject', subject || 'Query from Devbhoomi Wings');
        formData.append('name', name);
        formData.append('message', message);
        
        // Append all files
        attachedFiles.forEach(file => {
          formData.append('attachments', file);
        });

        const response = await fetch('/api/send-email', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setSubmitStatus('success');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setAttachedFiles([]);
          setTimeout(() => setSubmitStatus('idle'), 3000);
        } else {
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus('idle'), 3000);
        }
      } else {
        // Fallback to original behavior when no files
        const mailtoLink = `mailto:info@devbhoomiwings.com?subject=${encodeURIComponent(subject || 'Query from Devbhoomi Wings')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Also try to send via API
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to: 'info@devbhoomiwings.com',
              replyTo: email,
              subject: subject || 'Query from Devbhoomi Wings',
              name,
              message,
            }),
          });
          
          if (response.ok) {
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setTimeout(() => setSubmitStatus('idle'), 3000);
          }
        } catch (err) {
          console.log('API not available, email client opened instead');
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCollapsed) {
    return (
      <div className="fixed left-0 top-20 z-40 bg-white border-r border-slate-200 rounded-r-lg shadow-lg hidden lg:block">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
          className="h-12 w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <aside className="fixed left-0 top-20 z-40 w-72 h-[calc(100vh-5rem)] bg-white border-r border-slate-200 overflow-y-auto hidden lg:block">
      <div className="p-6 space-y-6">
        {/* Collapse Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#14b8a6]" />
            <h3 className="font-semibold text-[#0f172a]">Send Query</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(true)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* Query Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Your Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-slate-300"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Email Address</label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-slate-300"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Subject</label>
            <Input
              type="text"
              placeholder="Query about..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-slate-300"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Message</label>
            <Textarea
              placeholder="Tell us about your query or requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="border-slate-300 min-h-32 resize-none"
            />
          </div>

          {/* File Upload Field */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#0f172a]">Attach Documents (Optional)</label>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#14b8a6] transition">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer text-center">
                <Upload className="h-5 w-5 text-[#64748b] mx-auto mb-2" />
                <p className="text-xs text-[#64748b]">Click to upload or drag & drop</p>
                <p className="text-xs text-[#94a3b8]">PDF, Images, Word, Excel (Max 10MB)</p>
              </label>
            </div>

            {/* Display Attached Files */}
            {attachedFiles.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 space-y-2">
                <p className="text-xs font-medium text-blue-900">Attached Files ({attachedFiles.length}):</p>
                {attachedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-2 rounded border border-blue-100">
                    <span className="text-xs text-[#0f172a] truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
              ✓ Query sent successfully! We'll respond soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              ✗ Error sending query. Please try again.
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white"
          >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Query'}
          </Button>

          {/* Contact Info */}
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-[#64748b] text-center">
              Direct Email:<br />
              <span className="font-semibold text-[#0f172a]">info@devbhoomiwings.com</span>
            </p>
          </div>
        </form>
      </div>
    </aside>
  );
}
