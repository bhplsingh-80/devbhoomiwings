import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NewsTicker } from '../components/NewsTicker';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Calendar, Users, TrendingUp, MapPin, Phone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function SpecialOffersPage() {
  const updatedDate = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  const udaipurTour = {
    title: 'Udaipur Tour - City of Lakes',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1ZGFpcHVyJTIwcGFsYWNlfGVufDF8fHx8MTc2NjU5ODQ4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3-4 Days',
    originalPrice: '₹25,000',
    offerPrice: '₹18,000',
    tags: ['Heritage', 'Romantic', 'Cultural'],
    itinerary: [
      'City Palace - Royal Heritage',
      'Lake Pichola - Boat Ride',
      'Jag Mandir - Lake Palace',
      'Monsoon Palace - Hilltop View',
      'Local Markets & Culture'
    ],
    intensity: 'Low' as const,
    bestSeason: 'Oct-Mar',
    highlights: ['Boat ride on Lake Pichola', 'Heritage walk in old city', 'Cultural performances', 'Local cuisine experience']
  };

  const adiKailashTour = {
    title: 'Adi Kailash Special - Spiritual Journey',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    duration: '4 Days 5 Nights',
    originalPrice: '₹55,000',
    offerPrice: '₹25,000',
    tags: ['Spiritual', 'Trek', 'Adventure'],
    itinerary: [
      'Day 1: Arrival at Kathgodam and transfer to base camp',
      'Day 2: Trek towards Adi Kailash base, acclimatisation',
      'Day 3: Adi Kailash darshan and Parikrama',
      'Day 4: Return trek towards trek head and transfer back',
      'Night stay and departure'
    ],
    intensity: 'High' as const,
    bestSeason: 'Sep-Nov',
    highlights: ['Adi Kailash Parikrama', 'Sacred lake visit', 'Tibetan culture', 'Spiritual experience', 'Rare trek route', 'Book before July: 5% early-bird discount']
  };

  const delhiToPithoragarhCab = {
    title: 'Delhi to Pithoragarh Cab Booking - Special Offer',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    duration: '12-14 Hours',
    originalPrice: '₹15,000',
    offerPrice: '₹12,000',
    tags: ['Cab Booking', 'One Way', 'Comfortable', 'Safe'],
    itinerary: [
      'Delhi Pickup - Early Morning',
      'Haldwani Stopover - Breakfast',
      'Kathgodam to Pithoragarh Route',
      'Scenic Mountain Views',
      'Pithoragarh Drop-off'
    ],
    intensity: 'Low' as const,
    bestSeason: 'Year Round',
    highlights: ['AC Sedan/SUV', 'Experienced Driver', '24/7 Support', 'Flexible Timing', 'Mountain Route', 'Safe Journey']
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = '+919690707002';
    const message = 'Hi! I\'m interested in your special offers. Can you provide more details?';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <SEO
        title="Special Offers - Udaipur Tour, Adi Kailash & Delhi to Pithoragarh Cab | Devbhoomi Wings"
        description="Exclusive special offers on Udaipur tour packages, Adi Kailash spiritual journey, and Delhi to Pithoragarh cab booking. Limited time discounts on premium travel experiences."
        keywords="Udaipur tour special offer, Adi Kailash special, Delhi to Pithoragarh cab, discounted tours, travel deals, budget travel packages, cab booking offers"
      />

      <Header />
      <NewsTicker />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#14b8a6] to-[#0f766e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Special Offers
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Limited time exclusive deals on our premium tour packages. Don't miss these amazing opportunities!
          </p>
          <p className="text-sm text-white/80 mt-2">Offer updated: {updatedDate} — 5% discount and special Adi Kailash offer ₹25,000. Bookings open: Sep–Nov.</p>
        </div>
      </section>

      {/* Special Offers Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {/* Udaipur Tour Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div className="relative">
              <ImageWithFallback
                src={udaipurTour.image}
                alt={udaipurTour.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                  SAVE ₹7,000
                </Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#14b8a6] text-white">
                  <Calendar className="h-3 w-3 mr-1" />
                  {udaipurTour.bestSeason}
                </Badge>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{udaipurTour.title}</h3>
                <Badge className="bg-green-100 text-green-700">{udaipurTour.intensity}</Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {udaipurTour.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#0f172a]">Highlights:</h4>
                <ul className="space-y-1">
                  {udaipurTour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="h-3 w-3 mt-0.5 text-[#14b8a6] flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="text-sm text-slate-500 line-through">{udaipurTour.originalPrice}</div>
                  <div className="text-2xl font-bold text-[#14b8a6]">{udaipurTour.offerPrice}</div>
                  <div className="text-xs text-slate-500">{udaipurTour.duration}</div>
                </div>
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-[#14b8a6] hover:bg-[#14b8a6]/90"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Now
                </Button>
              </div>
            </div>
          </Card>

          {/* Adi Kailash Tour Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div className="relative">
              <ImageWithFallback
                src={adiKailashTour.image}
                alt={adiKailashTour.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                  SAVE ₹30,000
                </Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#14b8a6] text-white">
                  <Calendar className="h-3 w-3 mr-1" />
                  {adiKailashTour.bestSeason}
                </Badge>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{adiKailashTour.title}</h3>
                <Badge className="bg-red-100 text-red-700">{adiKailashTour.intensity}</Badge>
                <div className="text-sm text-slate-600 mt-2">Bookings open: Sep–Nov · Book before July: 5% discount</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {adiKailashTour.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#0f172a]">Highlights:</h4>
                <ul className="space-y-1">
                  {adiKailashTour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="h-3 w-3 mt-0.5 text-[#14b8a6] flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="text-sm text-slate-500 line-through">{adiKailashTour.originalPrice}</div>
                  <div className="text-2xl font-bold text-[#14b8a6]">{adiKailashTour.offerPrice}</div>
                  <div className="text-xs text-slate-500">{adiKailashTour.duration}</div>
                </div>
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-[#14b8a6] hover:bg-[#14b8a6]/90"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Now
                </Button>
              </div>
            </div>
          </Card>

          {/* Delhi to Pithoragarh Cab Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <div className="relative">
              <ImageWithFallback
                src={delhiToPithoragarhCab.image}
                alt={delhiToPithoragarhCab.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                  SAVE ₹3,000
                </Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-[#14b8a6] text-white">
                  <Calendar className="h-3 w-3 mr-1" />
                  {delhiToPithoragarhCab.bestSeason}
                </Badge>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">{delhiToPithoragarhCab.title}</h3>
                <Badge className="bg-green-100 text-green-700">{delhiToPithoragarhCab.intensity}</Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {delhiToPithoragarhCab.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-[#0f172a]">Highlights:</h4>
                <ul className="space-y-1">
                  {delhiToPithoragarhCab.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="h-3 w-3 mt-0.5 text-[#14b8a6] flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="text-sm text-slate-500 line-through">{delhiToPithoragarhCab.originalPrice}</div>
                  <div className="text-2xl font-bold text-[#14b8a6]">{delhiToPithoragarhCab.offerPrice}</div>
                  <div className="text-xs text-slate-500">{delhiToPithoragarhCab.duration}</div>
                </div>
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-[#14b8a6] hover:bg-[#14b8a6]/90"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Ready to Book Your Special Offer?</h2>
            <p className="text-slate-600 mb-6">
              Contact us now to secure your spot on these exclusive deals. Limited availability!
            </p>
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-lg px-8 py-3"
              >
                <Phone className="h-5 w-5 mr-2" />
                WhatsApp Us: +91 96907 07002
              </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}