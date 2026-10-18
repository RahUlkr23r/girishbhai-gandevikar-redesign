import { useEffect } from 'react';
import { MapPin, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '../components/ui/SocialIcons';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import VisitCTA from '../components/ui/VisitCTA';
import { timelineEvents, brandValues } from '../data/timeline';

export default function Timeline() {
  useEffect(() => {
    document.title = 'Our 100-Year Heritage Timeline | Girishbhai Gandevikar Jewellers Since 1927';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "From the Baroda Gaekwad royal court in 1927 to Vadodara's most trusted jewellery house — discover Girishbhai Gandevikar's 100-year legacy."
      );
    }
  }, []);

  return (
    <div className="bg-surface-dark pt-28">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/15 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              1927 — Present
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
              Our 100-Year Heritage Timeline
            </h1>
            <p className="text-warm-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From crafting bespoke gold ornaments in the royal courts of the Baroda Gaekwad dynasty
              to pioneering purity in modern Gujarat — three generations of uncompromised trust.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. CHRONOLOGICAL TIMELINE */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative">
          {/* Central Vertical Heritage Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gold-400/40 to-transparent" />

          {/* Left Line for Mobile */}
          <div className="lg:hidden absolute left-4 top-8 bottom-8 w-px bg-gold-400/30" />

          <div className="space-y-16 lg:space-y-28">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } pl-10 lg:pl-0`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-surface-dark border-2 border-gold-400 flex items-center justify-center z-10 shadow-lg shadow-gold-500/20">
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>

                  {/* Content Column */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <AnimatedSection delay={0.1}>
                      <span className="font-heading text-4xl sm:text-5xl font-bold text-gold-400 block mb-2 tracking-tight">
                        {event.year}
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-warm-100 mb-2">
                        {event.title}
                      </h2>
                      <h3 className="font-heading text-base sm:text-lg text-gold-300 italic mb-4 font-normal">
                        {event.subtitle}
                      </h3>
                      <p className="text-warm-300 text-sm sm:text-base leading-relaxed">
                        {event.description}
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Image Column */}
                  <div className="w-full lg:w-1/2">
                    <AnimatedSection delay={0.2}>
                      <div className="rounded-xs overflow-hidden border border-gold-500/25 shadow-2xl bg-surface-card group">
                        <img
                          src={event.image}
                          alt={`${event.title} — ${event.year}`}
                          className="w-full h-64 sm:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CORE PRINCIPLES & VALUES */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-darker border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Foundation Of Trust"
            title="Our Principles Across Generations"
            subtitle="Our legacy is built on unyielding principles of trust, transparency, and personal care across three generations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandValues.map((val, idx) => (
              <AnimatedSection key={val.title} delay={idx * 0.08}>
                <Card className="h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 block mb-2">
                      Value 0{idx + 1}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-warm-100 mb-1">
                      {val.title}
                    </h3>
                    <h4 className="font-heading text-sm text-gold-300 italic mb-4 font-medium">
                      {val.subtitle}
                    </h4>
                    <p className="text-warm-300 text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gold-500/10 flex items-center gap-2 text-xs text-gold-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Preserved by 3rd Generation</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSTANT ACTION CHANNELS (from original timeline page) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-card border border-gold-500/20 hover:border-gold-400 rounded-xs text-center group transition-all"
            >
              <MapPin className="w-6 h-6 text-gold-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-lg font-bold text-warm-100 mb-1">Google Maps</div>
              <div className="text-xs uppercase tracking-widest text-gold-300">Visit Us →</div>
            </a>

            <a
              href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-card border border-gold-500/20 hover:border-gold-400 rounded-xs text-center group transition-all"
            >
              <MessageCircle className="w-6 h-6 text-gold-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-lg font-bold text-warm-100 mb-1">WhatsApp Message</div>
              <div className="text-xs uppercase tracking-widest text-gold-300">Instant Chat →</div>
            </a>

            <a
              href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-card border border-gold-500/20 hover:border-gold-400 rounded-xs text-center group transition-all"
            >
              <InstagramIcon className="w-6 h-6 text-gold-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-lg font-bold text-warm-100 mb-1">Instagram</div>
              <div className="text-xs uppercase tracking-widest text-gold-300">Follow Us →</div>
            </a>
          </div>
        </div>
      </section>

      {/* 5. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
