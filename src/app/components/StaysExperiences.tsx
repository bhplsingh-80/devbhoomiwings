import { Wifi, Heart, Tent, Home, Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Masonry from 'react-responsive-masonry';

const stays = [
  {
    type: 'Homestay',
    name: 'Valley View Heritage Home',
    location: 'Munsiyari',
    image: 'https://images.unsplash.com/photo-1631773870335-a1811956c99b?w=600',
    price: '₹2,500',
    amenities: ['Valley View', 'Local Cuisine', 'Wi-Fi'],
    hasWifi: true,
  },
  {
    type: 'Camp',
    name: 'Riverside Adventure Camp',
    location: 'Rishikesh',
    image: 'https://images.unsplash.com/photo-1653379714531-47f3f491c509?w=600',
    price: '₹1,800',
    amenities: ['Bonfire', 'Rafting Access', 'Meals Included'],
    hasWifi: false,
  },
  {
    type: 'Hotel',
    name: 'Mall Road Boutique',
    location: 'Mussoorie',
    image: 'https://images.unsplash.com/photo-1634804246495-0b77a9e9834f?w=600',
    price: '₹4,500',
    amenities: ['City Center', 'Restaurant', 'Wi-Fi'],
    hasWifi: true,
  },
  {
    type: 'Remote Work Stay',
    name: 'Himalayan Co-working Retreat',
    location: 'Nainital',
    image: 'https://images.unsplash.com/photo-1632980277341-3c502ccd1d12?w=600',
    price: '₹3,200',
    amenities: ['High-Speed Wi-Fi', 'Work Desk', 'Mountain View'],
    hasWifi: true,
  },
];

const experiences = [
  {
    title: 'Village Walk & Culture',
    image: 'https://images.unsplash.com/photo-1718894294953-92e3f9a17559?w=600',
    duration: '3 hours',
    price: '₹800',
  },
  {
    title: 'Ganga Yoga Session',
    image: 'https://images.unsplash.com/photo-1683318528827-9577068cebeb?w=600',
    duration: '2 hours',
    price: '₹1,200',
  },
  {
    title: 'Local Food Trail',
    image: 'https://images.unsplash.com/photo-1715230656262-9410dfbead2a?w=600',
    duration: '4 hours',
    price: '₹1,500',
  },
  {
    title: 'Star Gazing Night',
    image: 'https://images.unsplash.com/photo-1605199024013-5954321963dd?w=600',
    duration: '3 hours',
    price: '₹900',
  },
];

export function StaysExperiences() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Stays Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-sm mb-4">
              Stays
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Your Home in the Himalayas
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From cozy homestays to luxury resorts. Every stay curated by local partners 
              who understand mountain hospitality.
            </p>
          </div>

          <Masonry columnsCount={2} gutter="1.5rem" className="md:columns-2 lg:columns-4">
            {stays.map((stay, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 mb-6">
                <div className="relative">
                  <img 
                    src={stay.image} 
                    alt={stay.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-slate-600" />
                  </button>
                  {stay.hasWifi && (
                    <Badge className="absolute bottom-3 left-3 bg-[#14b8a6] text-white">
                      <Wifi className="h-3 w-3 mr-1" />
                      Wi-Fi
                    </Badge>
                  )}
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {stay.type === 'Homestay' && <Home className="h-4 w-4 text-[#f59e0b]" />}
                        {stay.type === 'Camp' && <Tent className="h-4 w-4 text-[#14b8a6]" />}
                        {stay.type === 'Hotel' && <Building2 className="h-4 w-4 text-[#0f172a]" />}
                        {stay.type === 'Remote Work Stay' && <Wifi className="h-4 w-4 text-[#14b8a6]" />}
                        <Badge variant="outline" className="text-xs">
                          {stay.type}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-[#0f172a] line-clamp-2 mb-1">
                        {stay.name}
                      </h3>
                      <div className="text-xs text-slate-500">{stay.location}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {stay.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <div className="text-xs text-slate-500">per night</div>
                      <div className="font-bold text-[#0f172a]">{stay.price}</div>
                    </div>
                    <Button size="sm" className="bg-[#f59e0b] hover:bg-[#f59e0b]/90">
                      <a
                        href={`https://wa.me/919311344463?text=Hi, I want to book ${stay.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center"
                      >
                        Book
                      </a>
                    </Button>
                  </div>

                  <div className="pt-2">
                    <Badge variant="outline" className="text-xs text-[#14b8a6] border-[#14b8a6]">
                      Curated by local partners
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </Masonry>
        </div>

        {/* Experiences Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-sm mb-4">
              Local Experiences
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Beyond the Tourist Trail
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Immerse yourself in authentic Uttarakhand culture. Each experience 
              designed to create lasting memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-56">
                  <img 
                    src={exp.image} 
                    alt={exp.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-2">{exp.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-90">{exp.duration}</span>
                      <span className="font-semibold">{exp.price}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
