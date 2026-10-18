import { NavLink } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, TrendingUp } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <nav
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-darker/95 backdrop-blur-lg border-t border-gold-500/20 px-2 py-1.5 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto text-center">
        {/* Call Showroom */}
        <a
          href="tel:+919925579633"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-warm-300 hover:text-gold-300 active:scale-95 transition-all"
          aria-label="Call Girishbhai Gandevikar Showroom"
        >
          <div className="p-1 rounded-full bg-gold-400/10 text-gold-400 mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp Concierge */}
        <a
          href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20have%20an%20enquiry%20regarding%20jewellery."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-warm-300 hover:text-[#25D366] active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <div className="p-1 rounded-full bg-[#25D366]/15 text-[#25D366] mb-1">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium tracking-wider uppercase">WhatsApp</span>
        </a>

        {/* Showroom Directions */}
        <a
          href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 text-warm-300 hover:text-gold-300 active:scale-95 transition-all"
          aria-label="Directions to Alkapuri Showroom"
        >
          <div className="p-1 rounded-full bg-gold-400/10 text-gold-400 mb-1">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium tracking-wider uppercase">Directions</span>
        </a>

        {/* Live Gold Rates */}
        <NavLink
          to="/gold-rates"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1.5 px-1 active:scale-95 transition-all ${
              isActive ? 'text-gold-400 font-semibold' : 'text-warm-300 hover:text-gold-300'
            }`
          }
          aria-label="View Today's Gold Rates in Vadodara"
        >
          <div className="p-1 rounded-full bg-gold-400/15 text-gold-300 mb-1 border border-gold-400/30">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-medium tracking-wider uppercase">Gold Rates</span>
        </NavLink>
      </div>
    </nav>
  );
}
