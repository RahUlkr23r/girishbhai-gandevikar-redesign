import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import MobileBottomBar from './MobileBottomBar';
import Footer from './Footer';
import { MessageCircle } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top automatically on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-surface-dark text-warm-200 flex flex-col font-body selection:bg-gold-500 selection:text-surface-dark">
      <Navbar onMenuClick={() => setMobileMenuOpen(true)} />
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main className="flex-grow pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* Floating WhatsApp Concierge Pill (Desktop) */}
      <aside aria-label="Customer Support">
        <a
          href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20have%20an%20enquiry%20regarding%20jewellery."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 font-medium text-xs tracking-wider uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="font-semibold">Concierge</span>
        </a>
      </aside>

      {/* Persistent Mobile Bottom Quick Action Dock */}
      <MobileBottomBar />

      <Footer />
    </div>
  );
}
