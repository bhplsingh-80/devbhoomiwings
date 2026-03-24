const busRoutes = [
  {
    from: 'Dehradun',
    to: 'Guptkashi',
    departure: '05:30 AM',
    arrival: '02:30 PM',
    duration: '9h',
    coachType: 'AC Sleeper',
    price: '₹850',
  },
  {
    from: 'Rishikesh',
    to: 'Sonprayag',
    departure: '06:00 AM',
    arrival: '03:00 PM',
    duration: '9h',
    coachType: 'Semi-Sleeper',
    price: '₹750',
  },
  {
    from: 'Haridwar',
    to: 'Joshimath',
    departure: '05:00 AM',
    arrival: '04:00 PM',
    duration: '11h',
    coachType: 'AC Seater',
    price: '₹950',
  },
];

import { Bus, Car, Plane, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const cabOptions = [
  {
    type: 'Sedan',
    capacity: '4 seats',
    pricePerDay: '₹3,500',
    driverIncluded: true,
    features: ['AC', 'Music System'],
  },
  {
    type: 'SUV',
    capacity: '6-7 seats',
    pricePerDay: '₹5,500',
    driverIncluded: true,
    features: ['AC', 'Music System', 'Hill Specialist Driver'],
  },
  {
    type: 'Tempo Traveller',
    capacity: '12 seats',
    pricePerDay: '₹7,500',
    driverIncluded: true,
    features: ['AC', 'Push-back seats', 'Group Travel'],
  },
];

export function TransportOS() {
  return (
    <section className="py-16 bg-[#fafaf9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-sm mb-4">
            Wings Network
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Transport Working
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Seamless connectivity across Uttarakhand. Book buses, cabs, or premium 
            helicopter services — all integrated into your journey.
          </p>
        </div>

        <Tabs defaultValue="buses" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="buses">
              <Bus className="h-4 w-4 mr-2" />
              Buses
            </TabsTrigger>
            <TabsTrigger value="cabs">
              <Car className="h-4 w-4 mr-2" />
              Cabs
            </TabsTrigger>
            <TabsTrigger value="heli">
              <Plane className="h-4 w-4 mr-2" />
              Heli
            </TabsTrigger>
          </TabsList>

          {/* Bus Routes */}
          <TabsContent value="buses" className="space-y-4">
            <div className="grid gap-4">
              {busRoutes.map((route, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 bg-[#14b8a6]/10 rounded-lg">
                        <Bus className="h-6 w-6 text-[#14b8a6]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0f172a]">{route.from}</span>
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                          <span className="font-semibold text-[#0f172a]">{route.to}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{route.departure}</span>
                          </div>
                          <span>•</span>
                          <span>Duration: {route.duration}</span>
                          <span>•</span>
                          <Badge variant="outline">{route.coachType}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs text-slate-500">from</div>
                        <div className="font-bold text-lg text-[#0f172a]">{route.price}</div>
                      </div>
                      <Button className="bg-[#14b8a6] hover:bg-[#14b8a6]/90" asChild>
                        <a
                          href={`https://wa.me/919311344461?text=Hi, I want to book a bus from ${route.from} to ${route.to}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cab Rentals */}
          <TabsContent value="cabs" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {cabOptions.map((cab, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-[#f59e0b]/10 rounded-lg">
                        <Car className="h-6 w-6 text-[#f59e0b]" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Driver Included
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-[#0f172a] mb-1">
                        {cab.type}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Users className="h-3 w-3" />
                        <span>{cab.capacity}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {cab.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1 h-1 rounded-full bg-[#14b8a6]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Per Day</div>
                      <div className="font-bold text-xl text-[#0f172a] mb-3">
                        {cab.pricePerDay}
                      </div>
                      <Button className="w-full bg-[#f59e0b] hover:bg-[#f59e0b]/90" asChild>
                        <a
                          href={`https://wa.me/919311344461?text=Hi, I want to book a ${cab.type} cab`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Helicopter Services */}
          <TabsContent value="heli">
            <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className="bg-[#f59e0b] text-white">
                    Premium Service
                  </Badge>
                  <h3 className="text-2xl font-bold">
                    Helicopter Charter Services
                  </h3>
                  <p className="text-slate-300">
                    Skip the long mountain roads. Fly directly to Kedarnath, Badrinath, 
                    and other remote destinations in style and comfort.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#14b8a6]" />
                      <span>Kedarnath Darshan (Round Trip)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#14b8a6]" />
                      <span>Custom Charter Routes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#14b8a6]" />
                      <span>Medical Emergency Evacuation</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">₹1,25,000</div>
                  <div className="text-sm text-slate-400 mb-6">Starting price per trip</div>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90" asChild>
                    <a
                      href="https://wa.me/919311344461?text=Hi, I want to enquire about helicopter charter services"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Route Builder Widget */}
        <Card className="mt-8 p-6 bg-white">
          <h3 className="font-semibold text-[#0f172a] mb-4">Route Builder</h3>
          <div className="grid md:grid-cols-5 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-slate-600">From</label>
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg">
                <MapPin className="h-4 w-4 text-[#14b8a6]" />
                <input 
                  type="text" 
                  placeholder="Delhi" 
                  className="flex-1 outline-none text-sm"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-600">To</label>
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg">
                <MapPin className="h-4 w-4 text-[#f59e0b]" />
                <input 
                  type="text" 
                  placeholder="Nainital" 
                  className="flex-1 outline-none text-sm"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-600">Via (Optional)</label>
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg">
                <MapPin className="h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Haridwar" 
                  className="flex-1 outline-none text-sm"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-slate-600">Date</label>
              <input 
                type="date" 
                className="w-full p-2 border border-slate-200 rounded-lg text-sm outline-none"
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-[#0f172a] hover:bg-[#0f172a]/90">
                Find Routes
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}