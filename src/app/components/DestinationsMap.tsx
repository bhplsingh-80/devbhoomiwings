import { useState } from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Card } from './ui/card';

interface Destination {
  id: string;
  name: string;
  position: { x: number; y: number };
  image: string;
  timeFromHub: string;
  idealMonth: string;
  tagline: string;
}

const destinations: Destination[] = [
  { 
    id: 'delhi', 
    name: 'Delhi', 
    position: { x: 40, y: 60 },
    image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400',
    timeFromHub: 'Capital City',
    idealMonth: 'Year-round',
    tagline: 'Heart of India',
  },
  { 
    id: 'mumbai', 
    name: 'Mumbai', 
    position: { x: 20, y: 80 },
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400',
    timeFromHub: 'Financial Capital',
    idealMonth: 'Nov-May',
    tagline: 'City of Dreams',
  },
  { 
    id: 'kolkata', 
    name: 'Kolkata', 
    position: { x: 70, y: 75 },
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=400',
    timeFromHub: 'Cultural Capital',
    idealMonth: 'Oct-Mar',
    tagline: 'City of Joy',
  },
  { 
    id: 'chennai', 
    name: 'Chennai', 
    position: { x: 50, y: 95 },
    image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400',
    timeFromHub: 'Gateway to South',
    idealMonth: 'Dec-Apr',
    tagline: 'Detroit of India',
  },
  { 
    id: 'bangalore', 
    name: 'Bangalore', 
    position: { x: 45, y: 85 },
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400',
    timeFromHub: 'Silicon Valley of India',
    idealMonth: 'Oct-Feb',
    tagline: 'Garden City',
  },
  { 
    id: 'goa', 
    name: 'Goa', 
    position: { x: 15, y: 90 },
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400',
    timeFromHub: 'Beach Paradise',
    idealMonth: 'Nov-May',
    tagline: 'Pearl of the Orient',
  },
  { 
    id: 'jaipur', 
    name: 'Jaipur', 
    position: { x: 35, y: 55 },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    timeFromHub: 'Pink City',
    idealMonth: 'Oct-Mar',
    tagline: 'Royal Heritage',
  },
  { 
    id: 'agra', 
    name: 'Agra', 
    position: { x: 38, y: 58 },
    image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400',
    timeFromHub: 'Taj Mahal City',
    idealMonth: 'Oct-Mar',
    tagline: 'Monument City',
  },
  { 
    id: 'varanasi', 
    name: 'Varanasi', 
    position: { x: 55, y: 65 },
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
    timeFromHub: 'Spiritual Capital',
    idealMonth: 'Oct-Mar',
    tagline: 'City of Light',
  },
  { 
    id: 'amritsar', 
    name: 'Amritsar', 
    position: { x: 45, y: 35 },
    image: 'https://images.unsplash.com/photo-1609766853042-8bd6c2756d0f?w=400',
    timeFromHub: 'Golden Temple City',
    idealMonth: 'Oct-Mar',
    tagline: 'Spiritual Gateway',
  },
  { 
    id: 'udaipur', 
    name: 'Udaipur', 
    position: { x: 30, y: 70 },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    timeFromHub: 'Lake City',
    idealMonth: 'Oct-Mar',
    tagline: 'City of Lakes',
  },
  { 
    id: 'kochi', 
    name: 'Kochi', 
    position: { x: 40, y: 92 },
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400',
    timeFromHub: 'Queen of Arabian Sea',
    idealMonth: 'Sep-May',
    tagline: 'Commercial Capital',
  },
  { 
    id: 'rishikesh', 
    name: 'Rishikesh', 
    position: { x: 42, y: 48 },
    image: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?w=400',
    timeFromHub: 'Yoga Capital',
    idealMonth: 'Sep-Jun',
    tagline: 'Gateway to Himalayas',
  },
  { 
    id: 'darjeeling', 
    name: 'Darjeeling', 
    position: { x: 75, y: 45 },
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
    timeFromHub: 'Tea Garden City',
    idealMonth: 'Mar-May, Sep-Nov',
    tagline: 'Queen of Hills',
  },
  { 
    id: 'shimla', 
    name: 'Shimla', 
    position: { x: 40, y: 40 },
    image: 'https://images.unsplash.com/photo-1605199024013-5954321963dd?w=400',
    timeFromHub: 'Summer Capital',
    idealMonth: 'Mar-Jun',
    tagline: 'Hill Station Paradise',
  },
];

export function DestinationsMap() {
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-sm mb-4">
            Interactive Map
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Explore India
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover destinations across India. From the Himalayas to the beaches, 
            explore what makes each destination special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 relative overflow-hidden">
              {/* Stylized Map Background */}
              <div className="relative h-[500px]">
                {/* Mountain silhouette background */}
                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 350L100 320L200 280L300 250L400 200L500 220L600 280L700 320L800 350V500H0V350Z" fill="#0f172a"/>
                    <path d="M0 380L100 350L200 320L300 300L400 280L500 300L600 340L700 370L800 390V500H0V380Z" fill="#14b8a6" opacity="0.3"/>
                  </svg>
                </div>

                {/* Destination Pins */}
                {destinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ 
                      left: `${dest.position.x}%`, 
                      top: `${dest.position.y}%`,
                    }}
                    onMouseEnter={() => setHoveredDest(dest)}
                    onMouseLeave={() => setHoveredDest(null)}
                  >
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full bg-[#14b8a6] border-2 border-white shadow-lg transition-all duration-300 ${
                        hoveredDest?.id === dest.id ? 'scale-150' : 'group-hover:scale-125'
                      }`} />
                      <div className={`w-6 h-6 rounded-full bg-[#14b8a6]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping ${
                        hoveredDest?.id === dest.id ? 'opacity-100' : 'opacity-0'
                      }`} />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs font-semibold text-[#0f172a] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {dest.name}
                    </div>
                  </div>
                ))}

                {/* Connecting Routes (illustrative) */}
                <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  {/* Sample route lines */}
                  <line x1="30%" y1="45%" x2="35%" y2="52%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="35%" y1="52%" x2="40%" y2="15%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="40%" y1="15%" x2="48%" y2="10%" stroke="url(#routeGradient)" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-md">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                  <span>Major Destinations</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Destination Info Panel */}
          <div className="lg:col-span-1">
            {hoveredDest ? (
              <Card className="overflow-hidden shadow-lg">
                <img 
                  src={hoveredDest.image} 
                  alt={hoveredDest.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-[#0f172a] mb-1">
                      {hoveredDest.name}
                    </h3>
                    <p className="text-sm text-slate-600 italic">
                      {hoveredDest.tagline}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-[#14b8a6]" />
                      <span className="text-slate-600">{hoveredDest.timeFromHub}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-[#f59e0b]" />
                      <span className="text-slate-600">Best: {hoveredDest.idealMonth}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-8 h-full flex items-center justify-center bg-slate-50">
                <div className="text-center space-y-3">
                  <MapPin className="h-12 w-12 text-slate-300 mx-auto" />
                  <p className="text-slate-500">
                    Hover over any destination pin to see details
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
