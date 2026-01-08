import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CookieConsent } from './components/CookieConsent';

// Lazy load pages for better code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage').then(m => ({ default: m.PackagesPage })));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage').then(m => ({ default: m.DestinationsPage })));
const TransportPage = lazy(() => import('./pages/TransportPage').then(m => ({ default: m.TransportPage })));
const StaysPage = lazy(() => import('./pages/StaysPage').then(m => ({ default: m.StaysPage })));
const RegisterPage = lazy(() => import('./pages/RegisterPage').then(m => ({ default: m.RegisterPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then(m => ({ default: m.LoginPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(m => ({ default: m.TeamPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage').then(m => ({ default: m.CookiePolicyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const BookCabsPage = lazy(() => import('./pages/BookCabsPage').then(m => ({ default: m.default })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
  </div>
);

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/stays" element={<StaysPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/book-cabs" element={<BookCabsPage />} />
        </Routes>
      </Suspense>
      <CookieConsent />
    </>
  );
}
