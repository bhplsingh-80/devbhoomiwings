import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Award, MapPin } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-6">About DEVBHOOMI TRAVELMOUR WINGS INDIA PRIVATE LIMITED</h1>
          <div className="space-y-6 text-[#64748b]">
            <p className="text-lg">
              DEVBHOOMI TRAVELMOUR WINGS INDIA PRIVATE LIMITED is a government-authorised travel company, established in 2018 
              with a mission to provide comfortable and trustworthy travel experiences across India.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-white rounded-lg border-2 border-[#e2e8f0]">
                <Shield className="w-8 h-8 text-[#14b8a6] mb-3" />
                <h3 className="font-semibold text-[#0f172a] mb-2">Authorised & Registered</h3>
                <p>Government of India certified travel operator</p>
              </div>
              <div className="p-6 bg-white rounded-lg border-2 border-[#e2e8f0]">
                <Award className="w-8 h-8 text-[#f97316] mb-3" />
                <h3 className="font-semibold text-[#0f172a] mb-2">Since 2018</h3>
                <p>Serving travelers with excellence</p>
              </div>
              <div className="p-6 bg-white rounded-lg border-2 border-[#e2e8f0]">
                <MapPin className="w-8 h-8 text-[#f97316] mb-3" />
                <h3 className="font-semibold text-[#0f172a] mb-2">All India Coverage</h3>
                <p>From mountains to beaches</p>
              </div>
            </div>
            <p>
              <strong>Office Address:</strong> 16b/S-208, Ganga Complex, UGF, Sec-16, Vasundhara, Ghaziabad<br />
              <strong>Contact:</strong> View Details: +91 9311344462, Cab Booking: +91 9311344461, Tech Support: +91 6395734224, Director: +91 9311344463<br />
              <strong>Email:</strong> Admin: info@devbhoomiwings.com, Support: bhupalsingh@devbhoomiwings.com<br />
              <strong>Director:</strong> Bhupal Singh - +91 9311344463<br />
              <strong>Instagram:</strong> @devbhoomiwings<br />
              <strong>CIN:</strong> U79110UT2025PTC020432
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
