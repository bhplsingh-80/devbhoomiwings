import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Cookie } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="w-8 h-8 text-[#14b8a6]" />
            <h1 className="text-4xl font-bold text-[#0f172a]">Cookie Policy</h1>
          </div>
          
          <div className="prose max-w-none space-y-6 text-[#64748b]">
            <p><strong>Last Updated:</strong> December 26, 2024</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-[#0f172a] mt-4 mb-2">1. Essential Cookies</h3>
              <p>These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.</p>
              
              <h3 className="text-xl font-semibold text-[#0f172a] mt-4 mb-2">2. Analytics Cookies</h3>
              <p>We use analytics cookies to understand how visitors interact with our website, helping us improve user experience.</p>
              
              <h3 className="text-xl font-semibold text-[#0f172a] mt-4 mb-2">3. Marketing Cookies</h3>
              <p>These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.</p>
              
              <h3 className="text-xl font-semibold text-[#0f172a] mt-4 mb-2">4. Preference Cookies</h3>
              <p>These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced features.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">Managing Cookies</h2>
              <p>You can control and/or delete cookies as you wish:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>You can delete all cookies that are already on your computer</li>
                <li>Most browsers allow you to refuse to accept cookies</li>
                <li>You can use our cookie consent banner to manage your preferences</li>
              </ul>
              <p className="mt-4">
                Note: If you choose to disable cookies, some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">Third-Party Cookies</h2>
              <p>We may use third-party services like Google Analytics that also set cookies. These help us:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Understand website traffic and usage patterns</li>
                <li>Improve our marketing campaigns</li>
                <li>Enhance user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:<br />
                <strong>Email:</strong> Admin: info@devbhoomiwings.com, Support: bhupalsingh@devbhoomiwings.com<br />
                <strong>Phone:</strong> +91 6395734224
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
