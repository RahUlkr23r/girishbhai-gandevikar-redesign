import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from '../ui/SocialIcons';

const mobileLinks = [
  { name: 'Home', path: '/' },
  { name: 'Jewellery & Services', path: '/services' },
  { name: 'AMYA (Everyday Silver)', path: '/amya' },
  { name: 'Our 100-Year Timeline', path: '/timeline' },
  { name: 'Customer Reviews (4.9★)', path: '/reviews' },
  { name: 'FAQs & Guidance', path: '/faq' },
  { name: 'Contact & Atelier', path: '/contact' },
  { name: 'Today\'s Gold & Silver Rates', path: '/gold-rates', highlight: true },
];

export default function MobileNav({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm sm:max-w-md bg-surface-darker border-l border-gold-500/20 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gold-500/15">
              <Link to="/" onClick={onClose} className="flex items-center gap-3">
                <img
                  src="/images/logo.webp"
                  alt="Girishbhai Gandevikar Jewellers"
                  className="h-10 w-auto object-contain"
                />
                <div>
                  <div className="font-heading font-bold text-sm tracking-widest uppercase text-warm-100">
                    Girishbhai Gandevikar
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-gold-400">
                    Jewellers Since 1927
                  </div>
                </div>
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-warm-300 hover:text-gold-400 hover:bg-gold-500/10 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-gold-400"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="py-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
              {mobileLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `py-3 px-4 rounded-xs text-base font-heading tracking-wide transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'text-gold-400 bg-gold-500/10 border-l-2 border-gold-400 font-semibold'
                        : 'text-warm-200 hover:text-gold-300 hover:bg-white/5'
                    } ${link.highlight ? 'border border-gold-400/40 text-gold-300 my-2' : ''}`
                  }
                >
                  <span>{link.name}</span>
                  {link.highlight && (
                    <span className="text-[10px] font-sans font-semibold uppercase px-2 py-0.5 bg-gold-400/20 rounded-xs text-gold-300">
                      Live
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Footer / Quick Actions */}
            <div className="pt-6 border-t border-gold-500/15 space-y-4">
              <div className="text-xs text-warm-300 space-y-2">
                <a
                  href="tel:+919925579633"
                  className="flex items-center gap-2 hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>+91 99255 79633 (Showroom)</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold-300 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Jetalpur Road, Alkapuri, Vadodara</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 bg-surface-card border border-gold-500/20 rounded-xs text-warm-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2.5 bg-surface-card border border-gold-500/20 rounded-xs text-warm-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@girishbhaigandevikarjewell1457"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2.5 bg-surface-card border border-gold-500/20 rounded-xs text-warm-200 hover:text-gold-400 hover:border-gold-400 transition-colors"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="text-[11px] text-warm-400 tracking-wider pt-2">
                Third-Generation Vadodara Jeweller · Gaekwad Royal Legacy
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
