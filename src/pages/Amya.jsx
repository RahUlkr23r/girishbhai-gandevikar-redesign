import { useEffect } from 'react';
import { Send, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/ui/SocialIcons';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import VisitCTA from '../components/ui/VisitCTA';

const amyaItems = [
  {
    id: 1,
    image: '/images/amya/1.webp',
    caption: 'AMYA Contemporary Jewellery by Girishbhai Gandevikar.',
    tag: 'Signature 925 Silver',
  },
  {
    id: 2,
    image: '/images/amya/2.webp',
    caption: 'Minimalist 18K Gold Layering Chains • Everyday Elegance',
    tag: 'Layering Chains',
  },
  {
    id: 3,
    image: '/images/amya/3.webp',
    caption: 'Solitaire Stacking Bands for modern everyday wear.',
    tag: 'Stacking Bands',
  },
  {
    id: 4,
    image: '/images/amya/4.webp',
    caption: 'Contemporary Rose Gold & Diamond Accent Rings.',
    tag: 'Accent Rings',
  },
  {
    id: 5,
    image: '/images/amya/5.webp',
    caption: 'Modern Enamel & 22k Gold Everyday Pendant Drops.',
    tag: 'Pendant Drops',
  },
  {
    id: 6,
    image: '/images/amya/6.webp',
    caption: 'Statement Minimalist Chokers for everyday luxury.',
    tag: 'Chokers',
  },
];

export default function Amya() {
  useEffect(() => {
    document.title = 'AMYA — Contemporary Everyday Jewellery | Girishbhai Gandevikar Jewellers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Modern jewellery for everyday. Explore AMYA on Instagram, DM to order, and enjoy doorstep delivery from Vadodara's century-young jeweller."
      );
    }
  }, []);

  return (
    <div className="bg-surface-dark pt-28">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bg.webp"
            alt="AMYA Contemporary Jewellery Background"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/85 to-surface-dark/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Contemporary 925 Silver · By Girishbhai Gandevikar
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
              Jewellery for now.
            </h1>

            <p className="text-warm-200 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light mb-4">
              Amya is the contemporary expression from the house of Girishbhai Gandevikar
              Jewellers — 925 silver jewellery made for everyday, and for the people who wear it.
            </p>

            <p className="text-warm-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Explore Amya on Instagram. Order online. Enjoy it at your doorstep — from a
              century-young jeweller.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="https://www.instagram.com/amya.ggj/"
                variant="primary"
                size="lg"
              >
                <InstagramIcon className="w-4 h-4 mr-2" />
                Explore @amya.ggj
              </Button>
              <Button
                href="https://www.instagram.com/amya.ggj/"
                variant="outline"
                size="lg"
              >
                Order via Instagram DM
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. HOW IT WORKS (3 STEPS) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-darker border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Social Discovery to Doorstep"
            title="Everyday Luxury Delivered"
            subtitle="Simple, seamless steps from social discovery to doorstep delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="h-full relative text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-6">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
                  Step 01
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-warm-100 mb-4 uppercase">
                  Browse on Instagram
                </h3>
                <p className="text-warm-300 text-sm leading-relaxed">
                  Explore daily curations, reel drops, and modern stackables on our official handle{' '}
                  <strong className="text-gold-300">@amya.ggj</strong>. Mix and stack pieces your way.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full relative text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-6">
                  <Send className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
                  Step 02
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-warm-100 mb-4 uppercase">
                  DM to Order
                </h3>
                <p className="text-warm-300 text-sm leading-relaxed">
                  Found a piece you love? Send us a direct message on Instagram with your chosen
                  piece to place an instant order.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="h-full relative text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-6">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
                  Step 03
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-warm-100 mb-4 uppercase">
                  Get it Delivered
                </h3>
                <p className="text-warm-300 text-sm leading-relaxed">
                  Enjoy fully insured, safe doorstep delivery across India, packaged in AMYA
                  signature luxury boxes.
                </p>
              </Card>
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <Button
              href="https://www.instagram.com/amya.ggj/"
              variant="primary"
              size="lg"
            >
              Order on Instagram
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3. INSTAGRAM FEED & CURATION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Latest Drops"
            title="To Shop."
            subtitle="@amya.ggj — Modern 925 silver everyday stackables and contemporary statements."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amyaItems.map((item, idx) => (
              <AnimatedSection key={item.id} delay={idx * 0.08}>
                <a
                  href="https://www.instagram.com/amya.ggj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xs overflow-hidden border border-gold-500/20 bg-surface-card hover:border-gold-400/60 transition-all duration-500 shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden bg-surface-darker">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 bg-surface-darker/90 backdrop-blur-md rounded-xs border border-gold-400/40 text-gold-300 text-xs font-semibold tracking-wider uppercase flex items-center gap-2">
                        <InstagramIcon className="w-4 h-4 text-gold-400" />
                        <span>View on Instagram</span>
                      </div>
                    </div>

                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface-darker/90 backdrop-blur-md border border-gold-400/20 text-[10px] tracking-widest uppercase font-semibold text-gold-300 rounded-xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-warm-200 text-sm font-medium leading-relaxed group-hover:text-gold-300 transition-colors">
                      {item.caption}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-warm-400 pt-3 border-t border-gold-500/10">
                      <span>@amya.ggj</span>
                      <span className="text-gold-400 group-hover:translate-x-1 transition-transform">
                        DM to Order →
                      </span>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              href="https://www.instagram.com/amya.ggj/"
              variant="outline"
              size="lg"
            >
              <InstagramIcon className="w-4 h-4 mr-2" />
              Follow @amya.ggj on Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* 4. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
