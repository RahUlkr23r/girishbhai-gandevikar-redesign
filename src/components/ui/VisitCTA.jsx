import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon, YouTubeIcon } from './SocialIcons';
import AnimatedSection from './AnimatedSection';
import Button from './Button';

export default function VisitCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-surface-darker border-t border-gold-500/20">
      {/* Background with store image & rich dark gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/store.webp"
          alt="Girishbhai Gandevikar Jewellers Flagship Showroom Vadodara"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/90 to-surface-darker/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-4">
            FLAGSHIP ATELIER
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-warm-100 font-semibold mb-6">
            Come see it for yourself.
          </h2>

          <p className="text-warm-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            There is only so much a screen can tell you about jewellery. Visit{' '}
            <strong className="text-warm-100 font-medium">Gandevikar Jewellers - Girishbhai</strong>{' '}
            at Jetalpur Road Char Rasta, opp. Kashi Vishweshwar Temple, Anand Nagar, Alkapuri, Vadodara, Gujarat.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.30574,73.1686487,3223m/data=!3m1!1e3!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
              variant="primary"
              size="lg"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Get Directions
            </Button>

            <Button
              href="tel:+919925579633"
              variant="outline"
              size="lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 99255 79633
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gold-500/15 text-xs text-warm-300">
            <a
              href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-gold-400" /> Instagram
            </a>
            <span className="text-gold-500/40">·</span>
            <a
              href="https://whatsapp.com/channel/0029Vb8ncXM7dmeSr0LOrm3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" /> WhatsApp Channel
            </a>
            <span className="text-gold-500/40">·</span>
            <a
              href="https://www.youtube.com/@girishbhaigandevikarjewell1457"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <YouTubeIcon className="w-4 h-4 text-gold-400" /> YouTube
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
