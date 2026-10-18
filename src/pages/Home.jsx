import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, ShieldCheck, Award, Users, Coins } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import VisitCTA from '../components/ui/VisitCTA';
import { occasions } from '../data/services';

/* ---------- Local primitives ---------- */

const heroWordVariants = {
  hidden: { opacity: 0, y: '0.4em', filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, delay: 0.15 + i * 0.055, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustItems = [
  { icon: Award, value: '1927', label: 'Gaekwad Royal Court Karigar' },
  { icon: ShieldCheck, value: '100%', label: 'HUID BIS Hallmarked Gold' },
  { icon: Users, value: '4.9 / 5.0', label: '4,065+ Google Reviews' },
  { icon: Coins, value: '11 + 1', label: 'Suvarna Vruddhi Gold Scheme' },
];

const heroHeadline = 'Jewellery for every Generation and every Occasion';

function OrnamentalCorner({ position = 'tl' }) {
  const map = {
    tl: 'top-0 left-0 border-t border-l',
    tr: 'top-0 right-0 border-t border-r',
    bl: 'bottom-0 left-0 border-b border-l',
    br: 'bottom-0 right-0 border-b border-r',
  };
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute ${map[position]} w-10 h-10 border-gold-400/60`}
    />
  );
}

/* ---------- Page ---------- */

export default function Home() {
  const reduce = useReducedMotion();

  useEffect(() => {
    document.title =
      'Girishbhai Gandevikar Jewellers | Heritage Jewellery Since 1927 | Vadodara';
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
      {/* ============ 1. HERO ============ */}
      <section
        className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="hero-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero_bridal_masterpiece.webp"
            alt="Royal heritage bridal suite from Girishbhai Gandevikar Jewellers"
            className="w-full h-full object-cover object-center scale-105 brightness-[0.7] contrast-[1.08] saturate-[0.95]"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/80 to-surface-dark/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/85 via-transparent to-surface-dark/85" />
          {/* Vignette */}
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-12 sm:mt-8">
          {/* Eyebrow pill */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-400/[0.08] border border-gold-400/30 text-gold-300 text-[11px] sm:text-xs font-medium tracking-[0.28em] uppercase mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
            Heritage Jewellery Since 1927 · Vadodara
          </motion.div>

          {/* Staggered word headline */}
          <h1
            id="hero-heading"
            className="font-heading text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-warm-100 tracking-tight max-w-4xl mx-auto text-balance"
          >
            {heroHeadline.split(' ').map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                custom={i}
                initial={reduce ? false : 'hidden'}
                animate={reduce ? false : 'visible'}
                variants={heroWordVariants}
                className="inline-block mr-[0.28em] last:mr-0"
              >
                {word === 'Jewellery' || word === 'Generation' || word === 'Occasion' ? (
                  <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: 'easeOut' }}
            className="mt-7 text-base sm:text-lg md:text-xl text-warm-200/90 max-w-2xl mx-auto leading-relaxed"
          >
            For a century now, families in Vadodara have trusted us with their gold, their
            celebrations and their stories.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <Button to="/services" variant="primary" size="lg" className="min-w-[190px]">
              Explore Collections
            </Button>
            <Button to="/timeline" variant="outline" size="lg" className="min-w-[190px]">
              Our 100-Year Story
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-gold-500/20 max-w-4xl mx-auto"
          >
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:divide-x md:divide-gold-500/15">
              {trustItems.map(({ icon: Icon, value, label }) => (
                <div key={label} className="px-2 md:px-4 text-center">
                  <Icon
                    className="w-4 h-4 mx-auto text-gold-400/80 mb-2"
                    aria-hidden="true"
                  />
                  <dt className="font-heading text-base sm:text-lg font-semibold text-gold-300 tracking-wide">
                    {value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-warm-300/90 uppercase tracking-[0.14em]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-warm-400 text-[10px] tracking-[0.25em] uppercase"
          aria-hidden="true"
        >
          <span className="mb-1.5">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-gold-400" />
        </div>
      </section>

      {/* ============ 2. HERITAGE INTRO ============ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-darker/60 relative">
        {/* Section accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <AnimatedSection>
                <div className="relative">
                  {/* Ornamental frame */}
                  <div className="relative rounded-sm overflow-hidden border border-gold-500/25 shadow-2xl group">
                    <img
                      src="/images/brand_heritage_meenakari.webp"
                      alt="Royal Gaekwad Meenakari craftsmanship by Girishbhai Gandevikar"
                      className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/85 via-surface-darker/10 to-transparent" />

                    {/* Floating corner ornaments */}
                    <OrnamentalCorner position="tl" />
                    <OrnamentalCorner position="br" />
                  </div>

                  {/* Legacy card */}
                  <div className="absolute -bottom-6 -right-3 sm:-right-6 max-w-[230px] p-4 bg-surface-darker/95 backdrop-blur-md border border-gold-400/25 rounded-sm shadow-xl">
                    <span className="text-[10px] font-semibold text-gold-400 tracking-[0.22em] uppercase block mb-1.5">
                      Royal Gaekwad Lineage
                    </span>
                    <p className="text-[11.5px] leading-relaxed text-warm-300">
                      Late Shri Laxmanrao Gandevikar served as personal goldsmith to the Baroda
                      Royal Court.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Text */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.15}>
                <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4">
                  <span className="w-8 h-px bg-gold-400/60" aria-hidden="true" />
                  Our Legacy &amp; Trust
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-100 tracking-tight leading-[1.12] mb-6 text-balance">
                  Jewellery for every Generation &amp; every Occasion
                </h2>

                <div className="space-y-5 text-warm-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  <p>
                    For a century now, families in Vadodara have trusted us with their gold, their
                    celebrations and their stories.
                  </p>
                  <p>
                    Today, the third generation carries that trust forward, bringing together
                    India's jewellery traditions with a more contemporary way of experiencing
                    them.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
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

      {/* ============ 3. OCCASIONS GRID ============ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Curated For Every Milestone"
            title="Jewellery for Life's Many Moments"
            subtitle="Sometimes it's tradition. Sometimes it's celebration. Sometimes, you just saw something and couldn't stop thinking about it. Gold, diamonds, polki and silver, find what speaks to you."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {occasions.map((occasion, idx) => (
              <AnimatedSection key={occasion.slug} delay={idx * 0.08}>
                <Link
                  to="/services"
                  aria-label={`View ${occasion.name} jewellery collection`}
                  className="group relative block aspect-[3/4] rounded-sm overflow-hidden border border-gold-500/20 bg-surface-card hover:border-gold-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-gold-950/50"
                >
                  <img
                    src={occasion.image}
                    alt={`${occasion.name} jewellery collection at Girishbhai Gandevikar`}
                    className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/45 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Index number */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 font-heading text-xs tracking-[0.25em] text-gold-300/60 group-hover:text-gold-300 transition-colors"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="block text-[10px] font-semibold tracking-[0.24em] uppercase text-gold-400 mb-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore Suite
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-warm-100 group-hover:text-gold-200 transition-colors">
                      {occasion.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] tracking-wider uppercase text-warm-300 group-hover:text-warm-100 transition-colors">
                      <span>View Collection</span>
                      <ArrowRight
                        className="w-3.5 h-3.5 text-gold-400 transform group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Bottom gold hairline that grows on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold-300 to-gold-600 group-hover:w-full transition-all duration-500"
                  />
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

      {/* ============ 4. SUVARNA VRUDDHI YOJANA ============ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-darker via-surface-card/60 to-surface-darker border-y border-gold-500/20 relative overflow-hidden">
        {/* Soft gold radial glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-[520px] h-[520px] rounded-full bg-gold-500/[0.06] blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-0 w-[520px] h-[520px] rounded-full bg-gold-500/[0.05] blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-gold-400 mb-2">
                  <span className="w-8 h-px bg-gold-400/60" aria-hidden="true" />
                  Savings &amp; Jewel Bank Scheme
                </span>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-100 tracking-tight leading-[1.12]">
                  Suvarna Vruddhi Yojana
                </h2>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-[11px] font-semibold tracking-wider uppercase">
                  11 + 1 Monthly Gold Scheme
                </div>

                <p className="text-warm-300 text-base sm:text-lg leading-relaxed pt-2 max-w-2xl">
                  Plan your gold purchases effortlessly with our 11+1 Suvarna Vruddhi Yojana. Pay
                  11 monthly installments, and Girishbhai Gandevikar Jewellers contributes the
                  12th month on your behalf.
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
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
              <AnimatedSection delay={0.15}>
                <div className="relative">
                  <div className="relative rounded-sm overflow-hidden border border-gold-500/30 shadow-2xl group">
                    <img
                      src="/images/Suvarna_Vruddhi_Yojana.webp"
                      alt="Suvarna Vruddhi Yojana 11+1 gold scheme by Girishbhai Gandevikar"
                      className="w-full h-auto object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/70 via-transparent to-transparent pointer-events-none" />

                    <OrnamentalCorner position="tl" />
                    <OrnamentalCorner position="br" />
                  </div>

                  {/* Floating "12th on us" badge */}
                  <div className="absolute -top-4 -left-3 sm:-left-4 px-3 py-2 bg-gold-500 text-surface-darker rounded-sm shadow-xl">
                    <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase leading-none">
                      12th Installment
                    </span>
                    <span className="block font-heading text-lg font-bold leading-tight">
                      On Us
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. VISIT CTA ============ */}
      <VisitCTA />
    </div>
  );
}