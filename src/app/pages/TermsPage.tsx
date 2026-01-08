import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-[#14b8a6]" />
            <h1 className="text-4xl font-bold text-[#0f172a]">Terms of Service</h1>
          </div>
          
          <div className="prose max-w-none space-y-6 text-[#64748b]">
            <p><strong>Last Updated:</strong> December 26, 2024</p>
            <p><strong>Company:</strong> DEVBHOOMI TRAVELMOUR WINGS INDIA PRIVATE LIMITED</p>
            <p><strong>Registered Office:</strong> Shop no. 208, Ganga complex</p>
            <p><strong>Authorised by:</strong> Government of India</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services of DEVBHOOMI TRAVELMOUR WINGS INDIA PRIVATE LIMITED, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">2. Services Provided</h2>
              <p>Devbhoomi Wings provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Travel planning and booking services across India</li>
                <li>Transportation services (buses, cabs, helicopters)</li>
                <li>Accommodation booking</li>
                <li>Tour packages for individuals and groups</li>
                <li>B2B travel solutions for corporate clients</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">3. Booking and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All bookings are subject to availability</li>
                <li>Full or partial payment may be required at the time of booking</li>
                <li>Payment terms will be communicated for each booking</li>
                <li>We accept various payment methods including UPI, bank transfer, and cards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">4. Cancellation Policy</h2>
              <p>Cancellation charges apply based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Time of cancellation before travel date</li>
                <li>Type of service booked</li>
                <li>Third-party vendor policies</li>
              </ul>
              <p className="mt-2">Specific cancellation terms will be provided at the time of booking.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">5. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect our staff and service providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">6. Limitation of Liability</h2>
              <p>
                Devbhoomi Wings acts as an intermediary between travelers and service providers. 
                While we strive to ensure quality services, we are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acts of nature or force majeure events</li>
                <li>Third-party service provider failures</li>
                <li>Loss or damage to personal belongings</li>
                <li>Medical emergencies or health issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">7. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City], India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">8. Contact Information</h2>
              <p>
                For any questions regarding these terms:<br />
                <strong>Email:</strong> Admin: info@devbhoomiwings.com, Support: bhupalsingh@devbhoomiwings.com<br />
                <strong>Phone:</strong> 9690707002, Director: +91 93113 44463, Cab Booking: +91 93113 44463, Tech Support: +91 6395734224<br />
                <strong>Address:</strong> Shop no 8 ganga complex Vasundhra ghaziabad
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
