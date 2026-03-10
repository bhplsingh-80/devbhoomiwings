import { useEffect, useState, memo } from 'react';
import { Bell, X } from 'lucide-react';

const announcements = [
  "Special offer: 20% off on all Adi Kailash Yatra packages until June 30th!",
  "Goa special trip: 27k per person for 3 nights/4 days, book now!",
  "🚗 Cab bookings now available 24/7",
  "⭐ Government-approved tour packages for safe travel",
  "📞 24/7 customer support available",
  "🌟 Featured: Special deals for limited time"
];

export const NewsTicker = memo(function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  // Always visible ticker — rolling marquee from right to left

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 relative overflow-hidden">
      <div className="flex items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mr-4">
          <Bell className="h-4 w-4 animate-pulse" />
          <span className="font-medium text-sm">ANNOUNCEMENT</span>
        </div>

        <div className="flex-1 overflow-hidden">
          <div
            className="inline-block whitespace-nowrap"
            style={{
              display: 'inline-block',
              paddingLeft: '100%',
              animation: 'marquee 22s linear infinite',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            {announcements.join(' \u00A0 • \u00A0 ')}
          </div>
        </div>
      </div>

      <style>{`\n        @keyframes marquee {\n          0% { transform: translateX(0%); }\n          100% { transform: translateX(-100%); }\n        }\n      `}</style>
    </div>
  );
});