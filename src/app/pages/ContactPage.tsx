import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '../components/ui/card';

export function ContactPage() {
  const viewDetailsWhatsApp = '9311344462'; // +91 93113 44462
  const cabBookingWhatsApp = '9311344461'; // +91 93113 44461
  const techSupportPhone = '6395734224';
  const randomWhatsApp = '';

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-[#64748b]">N/A</p>
                    <p className="text-[#64748b]">View Details: +91 {viewDetailsWhatsApp}</p>
                    <p className="text-[#64748b]">Cab Booking: +91 {cabBookingWhatsApp}</p>
                    <p className="text-[#64748b]">Tech Support: +91 {techSupportPhone}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-[#64748b]">Admin: info@devbhoomiwings.com</p>
                    <p className="text-[#64748b]">Support: bhupalsingh@devbhoomiwings.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#14b8a6] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-[#64748b]">16b/S-208, Ganga Complex, UGF, Sec-16, Vasundhara, Ghaziabad<br />CIN: U79110UT2025PTC020432</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-linear-to-r from-[#14b8a6] to-[#0d9488]">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                    <p className="text-white/90 mb-3">Get instant support on WhatsApp</p>
                    <a
                      href={randomWhatsApp ? `https://wa.me/91${randomWhatsApp}` : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#14b8a6] rounded-lg hover:shadow-lg transition"
                      aria-disabled={!randomWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
