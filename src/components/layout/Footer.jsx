import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from '../ui/SocialIcons';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-surface-darker text-warm-300 pt-16 sm:pt-20 pb-12 border-t border-gold-500/20 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-500/5 blur-3xl pointer-events-none" />

      {/* Brand Trust Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 border-b border-gold-500/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-warm-100 text-sm font-semibold tracking-wide">
                Since 1927
              </h4>
              <p className="text-xs text-warm-400 mt-0.5">A Century of Heritage & Royal Gaekwad Trust</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-warm-100 text-sm font-semibold tracking-wide">
                100% BIS Hallmarked
              </h4>
              <p className="text-xs text-warm-400 mt-0.5">HUID Assured 22K Gold & GIA Diamonds</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-warm-100 text-sm font-semibold tracking-wide">
                Pioneering Karatmeter
              </h4>
              <p className="text-xs text-warm-400 mt-0.5">First in Vadodara for Live XRF Purity Testing</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="p-2.5 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-warm-100 text-sm font-semibold tracking-wide">
                4.9★ Google Rating
              </h4>
              <p className="text-xs text-warm-400 mt-0.5">Over 4,065+ Verified Happy Families</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.webp"
                alt="Girishbhai Gandevikar Jewellers"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-heading text-lg font-bold tracking-widest uppercase text-warm-100 block">
                  Girishbhai Gandevikar
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-gold-400 font-medium">
                  Jewellers · Vadodara Since 1927
                </span>
              </div>
            </Link>

            <p className="text-warm-300 text-sm leading-relaxed max-w-md pt-2">
              For a century now, families in Vadodara have trusted us with their gold, their
              celebrations and their stories. Today, the third generation carries that trust forward,
              bringing together India's jewellery traditions with a more contemporary way of
              experiencing them.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-surface-card border border-gold-500/20 rounded-xs text-warm-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Vb8ncXM7dmeSr0LOrm3Q"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                className="p-2.5 bg-surface-card border border-gold-500/20 rounded-xs text-warm-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                title="Join WhatsApp Daily Rates Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@girishbhaigandevikarjewell1457"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 bg-surface-card border border-gold-500/20 rounded-xs text-warm-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                title="Watch on YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-warm-100 text-sm uppercase tracking-[0.2em] font-semibold border-b border-gold-500/20 pb-2">
              Explore Atelier
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-warm-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-warm-300 hover:text-gold-400 transition-colors">
                  Jewellery & Collections
                </Link>
              </li>
              <li>
                <Link to="/services#gold-scheme" className="text-warm-300 hover:text-gold-400 transition-colors">
                  11+1 Suvarna Vruddhi Yojana
                </Link>
              </li>
              <li>
                <Link to="/amya" className="text-warm-300 hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span>AMYA Silver Line</span>
                  <span className="text-[10px] px-1 bg-gold-400/20 text-gold-300 rounded-xs">925</span>
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="text-warm-300 hover:text-gold-400 transition-colors">
                  100-Year Royal Timeline
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-warm-300 hover:text-gold-400 transition-colors">
                  Customer Reviews (4.9★)
                </Link>
              </li>
              <li>
                <Link to="/gold-rates" className="text-gold-400 hover:text-gold-300 font-medium transition-colors">
                  Today's Live Gold Rates
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections & Care */}
          <div className="space-y-4">
            <h4 className="font-heading text-warm-100 text-sm uppercase tracking-[0.2em] font-semibold border-b border-gold-500/20 pb-2">
              Jewellery & Craft
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-warm-300">
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  Bridal Suites & Meenakari
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  Polki & Jadau Jewellery
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  GIA Certified Diamond Solitaires
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  Old Gold XRF Exchange
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">
                  Ear Piercing (Kids & Adults)
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold-400 transition-colors">
                  HUID Hallmarking Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Showroom Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-warm-100 text-sm uppercase tracking-[0.2em] font-semibold border-b border-gold-500/20 pb-2">
              Flagship Showroom
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <address className="not-italic text-warm-300 leading-relaxed">
                  Gandevikar Jewellers - Girishbhai<br />
                  Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat 390007
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="tel:+919925579633" className="text-warm-300 hover:text-gold-400 transition-colors">
                  +91 99255 79633
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:mandargandevikar@gmail.com" className="text-warm-300 hover:text-gold-400 transition-colors">
                  mandargandevikar@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <Button
                  href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gold-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-400">
        <div>
          © {currentYear} Girishbhai Gandevikar Jewellers. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link to="/faq" className="hover:text-gold-400 transition-colors">
            Hallmarking & FAQs
          </Link>
          <Link to="/contact" className="hover:text-gold-400 transition-colors">
            Store Locator
          </Link>
          <a
            href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors flex items-center gap-1"
          >
            WhatsApp Support <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
