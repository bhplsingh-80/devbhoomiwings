import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '../../context/AuthContext';

// import logo from '../../assets/devbhoomi.png'; // Uncomment when logo file is added

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Special Offers', path: '/special-offers' },
  { label: 'Packages', path: '/packages' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Transport', path: '/transport' },
  { label: 'Book Cabs', path: '/book-cabs' },
  { label: 'Stays', path: '/stays' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/devbhoomi.png" alt="Devbhoomi Wings" className="h-8 w-auto" />
            {/* <div className="h-8 w-8 bg-emerald-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">DW</span>
            </div> */}
            <div>
              <div className="font-bold text-[#0f172a]">Devbhoomi Wings</div>
              <div className="text-xs text-[#64748b]">Travel with trust</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-[#0f172a] hover:text-[#14b8a6] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-[#0f172a] hover:text-[#14b8a6] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-sm text-[#0f172a] hover:text-[#14b8a6] transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm text-[#0f172a] hover:text-[#14b8a6] transition-colors py-2 text-left"
                  >
                    Sign Out
                  </button>
                </>
              ) : null}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}