import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Phone, MapPin, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../ui/SocialIcons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Jewellery & Services', path: '/services' },
  { name: 'AMYA', path: '/amya', badge: 'Silver' },
  { name: 'Timeline', path: '/timeline' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'FAQs', path: '/faq' },
  { name: 'Contact', path: '/contact' },
  { name: 'Gold Rates', path: '/gold-rates', highlight: true },
];

export default function Navbar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface-darker/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-surface-darker/90 via-surface-darker/60 to-transparent py-5'
      }`}
    >
      {/* Top Banner Bar for Trust & Heritage */}
      <div className={`overflow-hidden transition-all duration-300 ${scrolled ? 'h-0 opacity-0' : 'h-6 opacity-100 mb-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] text-warm-300 font-medium tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-300">
              <Sparkles className="w-3 h-3 text-gold-400" />
              Gaekwad Royal Court Goldsmith · Vadodara Since 1927
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+919925579633"
              className="hover:text-gold-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-gold-400" /> +91 99255 79633
            </a>
            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-gold-400" /> Alkapuri, Vadodara
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-gold-400"
            aria-label="Girishbhai Gandevikar Jewellers Home"
          >
            <img
              src="/images/logo.webp"
              alt="Girishbhai Gandevikar Jewellers"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base tracking-[0.15em] uppercase text-warm-100 group-hover:text-gold-300 transition-colors">
                Girishbhai Gandevikar
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-gold-400 font-medium">
                Jewellers · Since 1927
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-warm-300 hover:text-gold-300'
                  } ${link.highlight ? 'border border-gold-400/40 rounded-xs bg-gold-400/10 text-gold-300 hover:bg-gold-400/20' : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1.5 text-[9px] px-1 py-0.2 bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded-xs">
                        {link.badge}
                      </span>
                    )}
                    {isActive && !link.highlight && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold-500 to-gold-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Girishbhai Gandevikar on Instagram"
              className="p-2 text-warm-300 hover:text-gold-400 hover:bg-gold-500/10 rounded-full transition-colors hidden sm:flex"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-gold-400/60 text-gold-300 hover:bg-gold-400 hover:text-surface-dark transition-all duration-300 text-xs font-semibold uppercase tracking-wider rounded-xs"
            >
              Enquire
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={onMenuClick}
              className="p-2 text-warm-200 hover:text-gold-400 hover:bg-gold-500/10 rounded-sm lg:hidden focus-visible:outline-2 focus-visible:outline-gold-400"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
