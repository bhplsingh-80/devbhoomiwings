import { useState } from 'react';
import { Check, ChevronRight, Users, Calendar, MapPin, CreditCard, Shield } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';

const steps = [
  { id: 1, label: 'Basics' },
  { id: 2, label: 'Places' },
  { id: 3, label: 'Travel & Stay' },
  { id: 4, label: 'Add-ons' },
  { id: 5, label: 'Review & Pay' },
];

const suggestedPlaces = [
  { name: 'Munsiyari', days: 2 },
  { name: 'Milam Glacier', days: 3 },
  { name: 'Johar Valley', days: 2 },
  { name: 'Chaukori', days: 1 },
];

const addOns = [
  { name: 'Local Guide', price: '₹2,000/day', icon: Users },
  { name: 'Travel Insurance', price: '₹500', icon: Shield },
  { name: 'Permits & Passes', price: '₹1,500', icon: CreditCard },
  { name: 'Photo/Video Package', price: '₹3,500', icon: MapPin },
];

interface ItineraryBuilderProps {
  /**
   * When true the final step won’t show the cost breakdown – useful
   * for embedding a simplified builder on the landing page.
   */
  hideTripSummary?: boolean;
}

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const getUpcomingMonths = (count = 6) => {
  const options: string[] = [];
  const now = new Date();
  for (let i = 0; i < count; i += 1) {
    const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
    options.push(`${monthNames[date.getMonth()]} ${date.getFullYear()}`);
  }
  return options;
};

export function ItineraryBuilder({ hideTripSummary = false }: ItineraryBuilderProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [budget, setBudget] = useState([30000]);
  const [travelMonth, setTravelMonth] = useState(getUpcomingMonths(4)[0]);

  const travelMonthOptions = getUpcomingMonths(8);

  const isStepComplete = (stepId: number) => stepId < currentStep;
  const isStepActive = (stepId: number) => stepId === currentStep;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 text-[#14b8a6] text-sm mb-4">
            Build Your Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            Itinerary Builder
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Create your perfect Devbhoomi experience in five simple steps. 
            Our smart system suggests the best routes and experiences.
          </p>
        </div>

        {/* Stepper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-[#14b8a6] -z-10 transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            />

            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    isStepComplete(step.id)
                      ? 'bg-[#14b8a6] text-white'
                      : isStepActive(step.id)
                      ? 'bg-[#14b8a6] text-white ring-4 ring-[#14b8a6]/20'
                      : 'bg-white text-slate-400 border-2 border-slate-200'
                  }`}
                >
                  {isStepComplete(step.id) ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <div
                  className={`mt-2 text-xs font-medium ${
                    isStepActive(step.id) ? 'text-[#0f172a]' : 'text-slate-500'
                  }`}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Trip Basics</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-[#14b8a6]" />
                    Number of Travelers
                  </label>
                  <select className="w-full p-3 border border-slate-200 rounded-lg outline-none">
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>4 Adults</option>
                    <option>Group (5+)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-[#14b8a6]" />
                    Travel Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(event) => setTravelMonth(event.currentTarget.value)}
                    className="w-full p-3 border border-slate-200 rounded-lg outline-none"
                  >
                    {travelMonthOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm">Budget Range</label>
                <Slider
                  value={budget}
                  onValueChange={setBudget}
                  min={10000}
                  max={100000}
                  step={5000}
                  className="mt-2"
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">₹10,000</span>
                  <div 
                    className={`px-4 py-2 rounded-lg ${
                      budget[0] < 30000 
                        ? 'bg-green-100 text-green-700'
                        : budget[0] < 60000
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    ₹{budget[0].toLocaleString()}
                  </div>
                  <span className="text-xs text-slate-500">₹1,00,000</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Choose Your Destinations</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-slate-600">Your Itinerary</h4>
                  <div className="space-y-2">
                    {[1, 2, 3].map((day) => (
                      <div key={day} className="p-3 border-2 border-dashed border-slate-200 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">Day {day}</div>
                        <input 
                          type="text" 
                          placeholder="Drag destination here or type"
                          className="w-full outline-none text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-slate-600">
                    Suggested for Pithoragarh
                  </h4>
                  <div className="space-y-2">
                    {suggestedPlaces.map((place) => (
                      <div 
                        key={place.name}
                        className="p-3 bg-gradient-to-r from-[#14b8a6]/5 to-transparent border border-[#14b8a6]/20 rounded-lg cursor-move hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#14b8a6]" />
                            <span className="font-medium text-sm">{place.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {place.days}d
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Travel & Accommodation</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4 border-2 border-[#14b8a6] bg-[#14b8a6]/5">
                  <h4 className="font-medium mb-3">Transport</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="transport" className="accent-[#14b8a6]" defaultChecked />
                      <span className="text-sm">AC Bus + Local Cab</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="transport" className="accent-[#14b8a6]" />
                      <span className="text-sm">Private SUV (Full Trip)</span>
                    </label>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-[#f59e0b] bg-[#f59e0b]/5">
                  <h4 className="font-medium mb-3">Accommodation</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#f59e0b]" defaultChecked />
                      <span className="text-sm">Homestays (Budget)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="accent-[#f59e0b]" />
                      <span className="text-sm">Hotels (Comfort)</span>
                    </label>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Enhance Your Experience</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {addOns.map((addon) => (
                  <Card key={addon.name} className="p-4 hover:shadow-md transition-shadow">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 accent-[#14b8a6]" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <addon.icon className="h-4 w-4 text-[#14b8a6]" />
                          <span className="font-medium text-sm">{addon.name}</span>
                        </div>
                        <div className="text-xs text-slate-500">{addon.price}</div>
                      </div>
                    </label>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#0f172a]">Review & Payment</h3>
              <p className="text-sm text-slate-600">Planned travel month: <strong>{travelMonth}</strong></p>
              
              {!hideTripSummary && (
                <Card className="p-6 bg-slate-50">
                  <h4 className="font-medium mb-4">Trip Summary</h4>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Destinations (7 days)</span>
                      <span className="font-medium">₹25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Transport</span>
                      <span className="font-medium">₹8,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Accommodation</span>
                      <span className="font-medium">₹12,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Add-ons</span>
                      <span className="font-medium">₹4,000</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-[#14b8a6]">₹49,000</span>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200">
            <Button
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            <Button
              className="bg-[#14b8a6] hover:bg-[#14b8a6]/90"
              onClick={() => {
                if (currentStep === 5) {
                  // Open WhatsApp with booking details
                  const message = encodeURIComponent(
                    `Hi Devbhoomi Wings! I'm interested in booking a custom itinerary.\n\nTrip Details:\n- Budget: ₹${budget[0].toLocaleString()}\n- Duration: 7 days\n- Destinations: Pithoragarh area\n- Transport: AC Bus + Local Cab\n- Accommodation: Homestays\n\nPlease help me finalize this booking.`
                  );
                  window.open(`https://wa.me/919311344463?text=${message}`, '_blank');
                } else {
                  setCurrentStep(Math.min(5, currentStep + 1));
                }
              }}
            >
              {currentStep === 5 ? 'Complete Booking' : 'Continue'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
