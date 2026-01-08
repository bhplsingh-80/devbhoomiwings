import { Calendar, Users, TrendingUp, Cloud } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';

const heroImage = "https://images.unsplash.com/photo-1632980277341-3c502ccd1d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YSUyMG1vdW50YWlucyUyMGxha2V8ZW58MXx8fHwxNzY2NTk4NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const progressSteps = [
  { label: 'Plan', active: true },
  { label: 'Travel', active: false },
  { label: 'Stay', active: false },
  { label: 'Explore', active: false },
  { label: 'Return', active: false },
];


export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-start mb-6">
              <img src="/devbhoomi.png" alt="Devbhoomi Wings Logo" className="h-32 md:h-40" style={{filter: 'drop-shadow(0 2px 8px #14b8a6)'}} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Devbhoomi
            </h1>
            <div className="text-2xl md:text-3xl text-[#14b8a6]">
              Traveling with comfort all over India
            </div>
            <p className="text-lg text-slate-300 max-w-2xl">
              End-to-end journeys through the Himalayas. Planning, transport, stays, 
              guides, and payments — all in one platform. From NCR to the sacred peaks 
              of Devbhoomi.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white" onClick={() => document.getElementById('itinerary-builder')?.scrollIntoView({ behavior: 'smooth' })}>
                Build my itinerary
              </Button>
              <Link to="/packages">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Explore ready-made trips
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-slate-400">Happy Travelers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
            </div>
          </div>

          {/* Trip Summary Card */}
          <div className="lg:col-span-5">
            <Card className="p-6 space-y-6 bg-white/95 backdrop-blur border-0 shadow-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#0f172a]">Trip Summary</h3>
                <Cloud className="h-5 w-5 text-[#14b8a6]" />
              </div>

              {/* Date Range */}
              <div className="space-y-2">
                <label className="text-sm text-slate-600">Travel Dates</label>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <Calendar className="h-4 w-4 text-[#14b8a6]" />
                  <span className="text-sm">Select dates</span>
                </div>
              </div>

              {/* Travelers */}
              <div className="space-y-2">
                <label className="text-sm text-slate-600">Travelers</label>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <Users className="h-4 w-4 text-[#14b8a6]" />
                  <span className="text-sm">2 Adults, 1 Child</span>
                </div>
              </div>

              {/* Budget Meter */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm text-slate-600">Budget</label>
                  <span className="text-sm font-semibold text-[#f59e0b]">₹25,000</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-[#14b8a6] to-[#f59e0b]" />
                </div>
              </div>

              {/* Weather Snippet */}
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-600">Current in Nainital</div>
                    <div className="font-semibold">18°C, Clear</div>
                  </div>
                  <Cloud className="h-8 w-8 text-blue-500" />
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>Journey Progress</span>
                </div>
                {progressSteps.map((step, index) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      step.active 
                        ? 'bg-[#14b8a6] text-white' 
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`flex-1 ${
                      step.active ? 'text-[#0f172a] font-semibold' : 'text-slate-400'
                    }`}>
                      {step.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafaf9"/>
        </svg>
      </div>
    </section>
  );
}