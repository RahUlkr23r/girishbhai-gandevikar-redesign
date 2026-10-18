import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, ChevronDown, Award, MapPin, Phone } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import VisitCTA from '../components/ui/VisitCTA';
import { occasions } from '../data/services';

export default function Home() {
  useEffect(() => {
    document.title = 'Girishbhai Gandevikar Jewellers | Heritage Jewellery Since 1927 | Vadodara';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Vadodara's most trusted heritage jewellery house since 1927. BIS Hallmarked 22k gold, GIA diamonds, royal Meenakari enamel, bespoke bridal suites."
      );
    }
  }, []);

  return (
    <div className="bg-surface-dark overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Background Image with Atmospheric Lighting */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero_bridal_masterpiece.webp"
            alt="Royal Heritage Bridal Suite by Girishbhai Gandevikar Jewellers"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/75 to-surface-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/80 via-transparent to-surface-dark/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-12 sm:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Heritage Jewellery Since 1927 · Vadodara
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-100 tracking-tight leading-[1.15] max-w-4xl mx-auto text-balance"
          >
            Jewellery for every Generation and every Occasion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="mt-6 text-base sm:text-lg md:text-xl text-warm-200/90 max-w-2xl mx-auto leading-relaxed"
          >
            For a century now, families in Vadodara have trusted us with their gold, their
            celebrations and their stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <Button to="/services" variant="primary" size="lg" className="min-w-[190px]">
              Explore Collections
            </Button>
            <Button to="/timeline" variant="outline" size="lg" className="min-w-[190px]">
              Our 100-Year Story
            </Button>
          </motion.div>

          {/* Quick Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-gold-500/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-3xl mx-auto"
          >
            <div className="text-xs text-warm-300">
              <span className="block font-heading text-base font-semibold text-gold-400">1927</span>
              Gaekwad Royal Court Karigar
            </div>
            <div className="text-xs text-warm-300">
              <span className="block font-heading text-base font-semibold text-gold-400">100%</span>
              HUID BIS Hallmarked Gold
            </div>
            <div className="text-xs text-warm-300">
              <span className="block font-heading text-base font-semibold text-gold-400">4.9 / 5.0</span>
              4,065+ Google Reviews
            </div>
            <div className="text-xs text-warm-300">
              <span className="block font-heading text-base font-semibold text-gold-400">11 + 1</span>
              Suvarna Vruddhi Gold Scheme
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-warm-400 text-[10px] tracking-widest uppercase">
          <span className="mb-1">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
        </div>
      </section>

      {/* 2. HERITAGE INTRO SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-darker/60 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Heritage Image */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection>
                <div className="relative rounded-xs overflow-hidden border border-gold-500/20 shadow-2xl group">
                  <img
                    src="/images/brand_heritage_meenakari.webp"
                    alt="Royal Gaekwad Meenakari Craftsmanship by Girishbhai Gandevikar"
                    className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface-darker/90 backdrop-blur-md border border-gold-400/20 rounded-xs">
                    <span className="text-xs font-semibold text-gold-400 tracking-widest uppercase block mb-1">
                      Royal Gaekwad Lineage
                    </span>
                    <p className="text-xs text-warm-300">
                      Late Shri Laxmanrao Gandevikar served as personal goldsmith to the Baroda Royal Court.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Heritage Text */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-3">
                  Our Legacy & Trust
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
                  Jewellery for every Generation & every Occasion
                </h2>
                <div className="space-y-4 text-warm-300 text-base sm:text-lg leading-relaxed">
                  <p>
                    For a century now, families in Vadodara have trusted us with their gold, their
                    celebrations and their stories.
                  </p>
                  <p>
                    Today, the third generation carries that trust forward, bringing together
                    India’s jewellery traditions with a more contemporary way of experiencing them.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button to="/timeline" variant="outline" size="md">
                    Our Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button to="/services" variant="ghost" size="md">
                    View More Services
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OCCASIONS GRID SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Curated For Every Milestone"
            title="Jewellery for Life's Many Moments"
            subtitle="Sometimes it’s tradition. Sometimes it’s celebration. Sometimes, you just saw something and couldn’t stop thinking about it. Gold, diamonds, polki and silver, find what speaks to you."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, idx) => (
              <AnimatedSection key={occasion.slug} delay={idx * 0.08}>
                <Link
                  to="/services"
                  className="group relative block aspect-[3/4] rounded-xs overflow-hidden border border-gold-500/15 bg-surface-card hover:border-gold-400/50 transition-all duration-500 shadow-lg hover:shadow-gold-950/40"
                >
                  <img
                    src={occasion.image}
                    alt={`${occasion.name} Jewellery Collection at Girishbhai Gandevikar`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                    <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-gold-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                      Explore Suite
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-warm-100 group-hover:text-gold-300 transition-colors">
                      {occasion.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-warm-300 group-hover:text-warm-100 transition-colors">
                      <span>View Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/services" variant="primary" size="lg">
              Explore The Collections
            </Button>
          </div>
        </div>
      </section>

      {/* 4. SUVARNA VRUDDHI YOJANA (Gold Scheme Teaser) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-darker via-surface-card/60 to-surface-darker border-y border-gold-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
                  Savings & Jewel Bank Scheme
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-100 tracking-tight leading-tight">
                  Suvarna Vruddhi Yojana
                </h2>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-wider uppercase">
                  11 + 1 Monthly Gold Scheme
                </div>

                <p className="text-warm-300 text-base sm:text-lg leading-relaxed pt-2">
                  Plan your gold purchases effortlessly with our 11+1 Suvarna Vruddhi Yojana. Pay
                  11 monthly installments, and Girishbhai Gandevikar Jewellers contributes the 12th
                  month on your behalf.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button to="/services#gold-scheme" variant="primary" size="md">
                    Calculate Benefits
                  </Button>
                  <Button
                    href="https://wa.me/919723822916?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20am%20interested%20in%20starting%20the%2011%2B1%20Gold%20Scheme.%20Please%20guide%20me%20with%20the%20details."
                    variant="outline"
                    size="md"
                  >
                    Start on WhatsApp
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-xs overflow-hidden border border-gold-500/30 shadow-2xl group">
                  <img
                    src="/images/Suvarna_Vruddhi_Yojana.webp"
                    alt="Suvarna Vruddhi Yojana 11+1 Gold Scheme by Girishbhai Gandevikar"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISIT CTA SECTION */}
      <VisitCTA />
    </div>
  );
}
