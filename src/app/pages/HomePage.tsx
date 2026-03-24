import { Header } from '../components/Header';
import { FilterSidebar } from '../components/FilterSidebar';
import { HeroSection } from '../components/HeroSection';
import { PackagesGrid } from '../components/PackagesGrid';
import { DestinationsMap } from '../components/DestinationsMap';
import { TransportOS } from '../components/TransportOS';
import { StaysExperiences } from '../components/StaysExperiences';
import { ItineraryBuilder } from '../components/ItineraryBuilder';
import { Footer } from '../components/Footer';
import { NewsTicker } from '../components/NewsTicker';
import { SEO, SchemaMarkup } from '../components/SEO';
import { Button } from '../components/ui/button';
import { LegitimacySection } from '../components/LegitimacySection';

export function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Devbhoomi Wings",
    "url": "https://devbhoomiwings.com",
    "logo": "/devbhoomi.png",
    "description": "Affordable travel packages for Pithoragarh, Kashmir, and North India",
    "telephone": "+91 93113 44461",
    "email": "info@devbhoomiwings.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Uttarakhand",
      "addressLocality": "Pithoragarh"
    },
    "priceRange": "₹5000-₹50000",
    "areaServed": ["Pithoragarh", "Kashmir", "Uttarakhand", "Himachal Pradesh"]
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <SEO
        title="Affordable Travel Packages for Pithoragarh, Kashmir & India | Devbhoomi Wings"
        description="Book cheap tour packages for Pithoragarh, Kashmir, and North India with trusted local guides. Best prices guaranteed. Spiritual, adventure, and family trips available."
        keywords="Pithoragarh tour, Kashmir tour packages, cheap travel, budget tours, Uttarakhand travel, local travel India, best tour prices, affordable holidays"
      />
      <SchemaMarkup data={schemaData} />
      
      <Header />
      <NewsTicker />
      
      {/* Main Layout with Sidebar */}
      <div className="relative">
        <FilterSidebar />
        
        {/* Main Content - offset for sidebar on desktop */}
        <div className="lg:ml-72 transition-all duration-300">
          <main>
            {/* Hero Section */}
            <HeroSection />
            
            {/* Packages Grid */}
            <PackagesGrid />
            
            {/* Destinations Map */}
            <DestinationsMap />
            
            {/* Transport OS */}
            <TransportOS />
            
            {/* Stays & Experiences */}
            <StaysExperiences />
            
            {/* Itinerary Builder Button */}
            <section id="itinerary-builder" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
              <div className="container mx-auto px-4 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-sm mb-4">
                  Build Your Journey
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                  Plan Your Perfect Trip
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                  Create your perfect Devbhoomi experience in five simple steps. 
                  Our smart system suggests the best routes and experiences.
                </p>
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" 
                    alt="Travel planning" 
                    className="rounded-lg shadow-lg mx-auto max-w-md"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="bg-[#14b8a6] hover:bg-[#14b8a6]/90"
                  onClick={() => {
                    const element = document.getElementById('itinerary-builder');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Building Your Itinerary
                </Button>
              </div>
            </section>
            
            {/* Real Itinerary Builder */}
            <div id="itinerary-builder">
              <ItineraryBuilder hideTripSummary={true} />
            </div>
            
            {/* Reviews Section removed (fake) */}
            
            {/* Legitimacy / Certificates section added */}
            <LegitimacySection />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
