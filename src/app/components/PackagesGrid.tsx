import { TripCard } from './TripCard';

const packages = [
  {
    title: 'Char Dham Circuit',
    image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZWRhcm5hdGglMjB0ZW1wbGV8ZW58MXx8fHwxNzY2NTk4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '10-12 Days',
    price: '₹45,000',
    tags: ['Spiritual', 'Family-friendly', 'Guided'],
    itinerary: [
      'Yamunotri - Source of Yamuna',
      'Gangotri - Origin of Ganga',
      'Kedarnath - Sacred Shiva Temple',
      'Badrinath - Vishnu Dhaam',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'May-Oct',
  },
  {
    title: 'Nainital – Corbett – Mussoorie Classic',
    image: 'https://images.unsplash.com/photo-1634804246495-0b77a9e9834f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNzb29yaWUlMjBoaWxsc3xlbnwxfHx8fDE3NjY1OTg0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '5-7 Days',
    price: '₹28,000',
    tags: ['Family', 'Wildlife', 'Scenic'],
    itinerary: [
      'Nainital Lake - Boating & Mall Road',
      'Jim Corbett - Safari & Wildlife',
      'Mussoorie - Queen of Hills',
    ],
    intensity: 'Low' as const,
    bestSeason: 'Mar-Jun',
  },
  {
    title: 'Auli Snow & Chopta',
    image: 'https://images.unsplash.com/photo-1605199024013-5954321963dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbm93JTIwbW91bnRhaW5zJTIwc2tpaW5nfGVufDF8fHx8MTc2NjU5ODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4-6 Days',
    price: '₹32,000',
    tags: ['Adventure', 'Snow', 'Trek'],
    itinerary: [
      'Auli - Skiing & Cable Car',
      'Chopta - Mini Switzerland',
      'Tungnath - Highest Shiva Temple',
    ],
    intensity: 'High' as const,
    bestSeason: 'Dec-Feb',
  },
  {
    title: 'Pithoragarh Explorer',
    image: 'https://images.unsplash.com/photo-1692272579704-786c80392913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleSUyMHRyZWt8ZW58MXx8fHwxNzY2NTk4NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '7-9 Days',
    price: '₹38,000',
    tags: ['Remote', 'Trek', 'Cultural'],
    itinerary: [
      'Pithoragarh Fort - Historic Gateway',
      'Munsiyari - Little Kashmir',
      'Johar Valley - Hidden Gem',
      'Milam Glacier - Trekkers Paradise',
    ],
    intensity: 'High' as const,
    bestSeason: 'Apr-Oct',
  },
  {
    title: 'Adi Kailash Spiritual Circuit',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    duration: '9-11 Days',
    price: '₹48,000',
    tags: ['Spiritual', 'Trek', 'Scenic'],
    itinerary: [
      'Munsiyari - Gateway to Johar Valley',
      'Pithoragarh - Local Culture & Markets',
      'Gunji - High-altitude Plains',
      'Adi Kailash Base - Sacred Circuit',
    ],
    intensity: 'High' as const,
    bestSeason: 'May-Sep',
  },
  {
    title: 'Gunji Mountain Experience',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    duration: '6-8 Days',
    price: '₹36,000',
    tags: ['Trek', 'Remote', 'Adventure'],
    itinerary: [
      'Pithoragarh - Local Markets',
      'Milam Glacier approach',
      'Gunji - Ancient Passes & Views',
    ],
    intensity: 'High' as const,
    bestSeason: 'May-Sep',
  },
  {
    title: 'Rishikesh Adventure Weekend',
    image: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXNoaWtlc2glMjByYWZ0aW5nJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2NjU5ODQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2-3 Days',
    price: '₹12,000',
    tags: ['Weekend', 'Adventure', 'Yoga'],
    itinerary: [
      'River Rafting - Ganga Rapids',
      'Bungee Jumping - India\'s Highest',
      'Riverside Camping',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Sep-Jun',
  },
  {
    title: 'Custom Corporate Offsite – NCR to Devbhoomi',
    image: 'https://images.unsplash.com/photo-1632980277341-3c502ccd1d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YSUyMG1vdW50YWlucyUyMGxha2V8ZW58MXx8fHwxNzY2NTk4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3-5 Days',
    price: '₹25,000',
    tags: ['Corporate', 'Team Building', 'Luxury'],
    itinerary: [
      'Team Activities - Leadership & Trust',
      'Luxury Mountain Resort',
      'Conference Facilities',
    ],
    intensity: 'Low' as const,
    bestSeason: 'Year-round',
  },
  {
    title: 'Golden Triangle Delhi-Agra-Jaipur',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbHxlbnwxfHx8fDE3NjY1OTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '6-8 Days',
    price: '₹35,000',
    tags: ['Heritage', 'Culture', 'Iconic'],
    itinerary: [
      'Delhi - Red Fort & India Gate',
      'Agra - Taj Mahal & Agra Fort',
      'Jaipur - Amber Fort & City Palace',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Oct-Mar',
  },
  {
    title: 'Kerala Backwaters & Hill Stations',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzfGVufDF8fHx8MTc2NjU5ODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 423,
    duration: '7-9 Days',
    price: '₹42,000',
    tags: ['Relaxation', 'Nature', 'Ayurveda'],
    itinerary: [
      'Alleppey - Houseboat Stay',
      'Munnar - Tea Plantations',
      'Thekkady - Wildlife Sanctuary',
    ],
    intensity: 'Low' as const,
    bestSeason: 'Sep-May',
  },
  {
    title: 'Goa Beach Paradise',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjJiZWFjaHxlbnwxfHx8fDE3NjY1OTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 678,
    duration: '4-6 Days',
    price: '₹28,000',
    tags: ['Beach', 'Party', 'Adventure'],
    itinerary: [
      'North Goa - Calangute & Baga',
      'South Goa - Colva & Palolem',
      'Water Sports & Island Hopping',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Nov-May',
  },
  {
    title: 'Kashmir Valley Tour',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 345,
    duration: '5-7 Days',
    price: '₹38,000',
    tags: ['Paradise', 'Lakes', 'Mountains'],
    itinerary: [
      'Srinagar - Dal Lake Shikara',
      'Gulmarg - Ski Resort',
      'Pahalgam - Valley of Shepherds',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Apr-Oct',
  },
  {
    title: 'Rajasthan Desert Safari',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBkZXNlcnR8ZW58MXx8fHwxNzY2NTk4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 289,
    duration: '8-10 Days',
    price: '₹45,000',
    tags: ['Desert', 'Culture', 'Camel Safari'],
    itinerary: [
      'Jodhpur - Blue City',
      'Jaisalmer - Golden City',
      'Pushkar - Holy Lake',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Oct-Mar',
  },
  {
    title: 'Andaman Islands Adventure',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRhbWFuJTIwaXNsYW5kc3xlbnwxfHx8fDE3NjY1OTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 198,
    duration: '6-8 Days',
    price: '₹55,000',
    tags: ['Island', 'Snorkeling', 'Beach'],
    itinerary: [
      'Port Blair - Cellular Jail',
      'Havelock - Radhanagar Beach',
      'Neil Island - Coral Reefs',
    ],
    intensity: 'High' as const,
    bestSeason: 'Oct-May',
  },
  {
    title: 'Darjeeling & Sikkim Hills',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJqZWVsaW5nJTIwdGVhJTIwZ2FyZGVuc3xlbnwxfHx8fDE3NjY1OTg0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 312,
    duration: '5-7 Days',
    price: '₹32,000',
    tags: ['Tea Gardens', 'Mountains', 'Culture'],
    itinerary: [
      'Darjeeling - Toy Train',
      'Gangtok - Capital City',
      'Pelling - Monastery Views',
    ],
    intensity: 'Medium' as const,
    bestSeason: 'Mar-May, Sep-Nov',
  },
  {
    title: 'Mumbai City Break',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBjaXR5fGVufDF8fHx8MTc2NjU5ODQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviews: 456,
    duration: '3-4 Days',
    price: '₹18,000',
    tags: ['City', 'Bollywood', 'Food'],
    itinerary: [
      'Gateway of India & Marine Drive',
      'Elephanta Caves',
      'Street Food & Local Culture',
    ],
    intensity: 'Low' as const,
    bestSeason: 'Nov-May',
  },
];

export function PackagesGrid() {
  return (
    <section className="py-16 bg-[#fafaf9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-sm mb-4">
            Smart Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Curated Journeys for Every Explorer
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From spiritual pilgrimages to adrenaline-pumping adventures. 
            Each package crafted by local experts who know Devbhoomi inside out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <TripCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
