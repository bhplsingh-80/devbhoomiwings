import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DestinationsMap } from '../components/DestinationsMap';
import { SEO, SchemaMarkup } from '../components/SEO';

export function DestinationsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Travel Destinations - India Tours",
    "description": "Explore top travel destinations across India. Best cheap packages with local guides.",
    "url": "https://devbhoomiwings.com/destinations",
    "mainEntity": {
      "@type": "Thing",
      "name": "Destination Tours in India"
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <SEO
        title="Top Travel Destinations in India | Cheap Tours & Packages"
        description="Explore the best travel destinations across India. Affordable tour packages with local expertise and best prices for Delhi, Mumbai, Goa, Rajasthan, Kerala and more."
        keywords="India destinations, travel packages, cheap tours, local destinations, budget travel India, Delhi tours, Mumbai packages, Goa holidays"
        url="https://devbhoomiwings.com/destinations"
      />
      <SchemaMarkup data={schemaData} />
      
      <Header />
      <main className="py-16">
        <DestinationsMap />
      </main>
      <Footer />
    </div>
  );
}
