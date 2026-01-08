import { MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Packages', path: '/packages' },
    { label: 'Destinations', path: '/destinations' },
  ],
  services: [
    { label: 'Transport', path: '/transport' },
    { label: 'Stays', path: '/stays' },
    { label: 'B2B Solutions', path: '/register' },
  ],
  legal: [
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ],
};

const partners = [
  'Ministry of Tourism',
  'Uttarakhand Tourism',
  'IRCTC',
  'Razorpay',
  'Make My Trip',
];

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Trust Section */}
      <div className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <h3 className="text-sm font-semibold text-slate-400 mb-4">
              TRUSTED PARTNERS & CERTIFICATIONS
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <div 
                key={partner} 
                className="px-4 py-2 bg-white/5 rounded-lg text-xs text-slate-400 hover:bg-white/10 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-xs text-[#14b8a6]">
              <div className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
              <span>Local Uttarakhand experts since 2015</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Mountain className="h-10 w-10 text-white" />
              <div>
                <div className="font-bold text-white">Devbhoomi Wings</div>
                <div className="text-xs text-slate-400">Travel OS for India</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your mission control for exploring Devbhoomi. End-to-end travel experiences 
              crafted by locals, for everyone who dreams of the Himalayas.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#14b8a6] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/devbhoomiwings" className="p-2 bg-white/5 rounded-full hover:bg-[#14b8a6] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/devbhoomi-travelmour-wings-private-limited/posts/?feedView=all" className="p-2 bg-white/5 rounded-full hover:bg-[#14b8a6] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@devbhoomiwings" className="p-2 bg-white/5 rounded-full hover:bg-[#14b8a6] transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-[#14b8a6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-[#14b8a6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-[#14b8a6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-3 gap-6 p-6 bg-white/5 rounded-xl mb-8">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#14b8a6]/20 rounded-lg">
              <Phone className="h-5 w-5 text-[#14b8a6]" />
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">Call Us</div>
              <div className="space-y-1">
                <a href="tel:+919311344461" className="text-sm hover:text-[#14b8a6] block">
                  +91 93113 44461
                </a>
                <a href="tel:+919311344462" className="text-sm hover:text-[#14b8a6] block">
                  +91 93113 44462
                </a>
                <a href="tel:+919311344463" className="text-sm hover:text-[#14b8a6] block">
                  +91 93113 44463 (Director)
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#14b8a6]/20 rounded-lg">
              <Mail className="h-5 w-5 text-[#14b8a6]" />
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">Email Us</div>
              <a href="mailto:info@devbhoomiwings.com" className="text-sm hover:text-[#14b8a6] text-left">
                info@devbhoomiwings.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-[#14b8a6]/20 rounded-lg">
              <MessageCircle className="h-5 w-5 text-[#14b8a6]" />
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">WhatsApp</div>
              <div className="space-y-1">
                <Button 
                  size="sm" 
                  className="bg-[#25D366] hover:bg-[#25D366]/90 h-auto py-1 px-3"
                  onClick={() => window.open('https://wa.me/919311344463', '_blank')}
                >
                  Chat Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-[#14b8a6]" />
              <span>
                Shop no 8, Ganga complex, Vasundhra, Ghaziabad
              </span>
            </div>
            <div className="text-sm text-slate-400 text-center">
              © 2025 Devbhoomi – Powered by{' '}
              <span className="text-[#14b8a6] font-semibold">Metasyndikate</span>
              {' '}| Travelmour Pvt. Ltd. ecosystem. All rights reserved.
            </div>
          </div>
          <div className="text-xs text-slate-500 text-center mt-4">
            Sample itineraries shown are for illustration. Prices subject to availability and season. 
            Not meant for collecting PII or sensitive data.
          </div>
        </div>
      </div>
    </footer>
  );
}