import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-[#14b8a6]" />
            <h1 className="text-4xl font-bold text-[#0f172a]">Privacy Policy</h1>
          </div>
          
          <div className="prose max-w-none space-y-6 text-[#64748b]">
            <p><strong>Last Updated:</strong> December 26, 2024</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">1. Information We Collect</h2>
              <p>DEVBHOOMI TRAVELMOUR WINGS INDIA PRIVATE LIMITED collects the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Booking and travel preferences</li>
                <li>Payment information (processed securely through third-party gateways)</li>
                <li>Communication history with our customer service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your bookings and provide travel services</li>
                <li>Send booking confirmations and travel updates</li>
                <li>Improve our services based on feedback</li>
                <li>Send promotional offers (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. 
                Your payment information is encrypted and processed through secure payment gateways. 
                We never store complete credit card information on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">4. Sharing of Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers (hotels, transport operators, tour guides)</li>
                <li>Payment processors</li>
                <li>Government authorities (when legally required)</li>
              </ul>
              <p className="mt-2">We DO NOT sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">6. Contact Us</h2>
              <p>
                For privacy-related questions or requests, contact us at:<br />
                <strong>Email:</strong> Admin: info@devbhoomiwings.com, Support: bhupalsingh@devbhoomiwings.com<br />
                <strong>Phone:</strong> 9690707002, Tech Support: +91 6395734224
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
