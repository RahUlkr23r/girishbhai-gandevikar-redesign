import { useEffect } from 'react';
import {
  TrendingUp,
  MessageCircle,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { InstagramIcon } from '../components/ui/SocialIcons';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import VisitCTA from '../components/ui/VisitCTA';
import { goldRateFaqs } from '../data/services';

const ratesList = [
  {
    type: '22K BIS Hallmarked',
    subtitle: 'Ideal for bridal, traditional haars & heritage jewellery',
    purity: '91.6% Pure Gold (916)',
    enquiryText: "Today's Rate for 22K BIS Hallmarked Gold",
    badge: 'Bridal Standard',
    popular: true,
  },
  {
    type: '18K Diamond Gold',
    subtitle: 'Perfect for solitaire setting & lifestyle diamond pieces',
    purity: '75.0% Fine Gold (750)',
    enquiryText: "Today's Rate for 18K Diamond Gold",
    badge: 'Solitaire & Diamond',
  },
  {
    type: 'Silver Ornament',
    subtitle: 'Pooja articles, silverware, payal & lifestyle silver',
    purity: 'Fine Sterling Silver',
    enquiryText: "Today's Rate for Silver Ornaments & Silverware",
    badge: 'Silver & Pooja',
  },
];

export default function GoldRates() {
  useEffect(() => {
    document.title = "Today's Gold Rates in Vadodara (24K, 22K, 18K) | આજે સોનાનો રેટ | Gandevikar Jewellers";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Check today's live 24K, 22K BIS Hallmarked gold and fine silver rates in Vadodara (આજે સોનાનો રેટ) at Gandevikar Jewellers - Girishbhai."
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
              <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
              Vadodara Market Daily Benchmark
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-100 tracking-tight leading-tight mb-4">
              Today's Gold & Silver Rates
            </h1>
            <div className="font-heading text-xl sm:text-2xl text-gold-300 font-medium mb-6">
              આજે સોનાનો અને ચાંદીનો રેટ · Gandevikar Jewellers
            </div>
            <p className="text-warm-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Official daily gold and silver rates in Vadodara. At Girishbhai Gandevikar Jewellers,
              every gram of gold is 100% BIS Hallmarked with transparent, uncompromised purity
              guarantees.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. LIVE MARKET RATES CARDS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Transparent Pricing"
            title="Vadodara Market Rates Today"
            subtitle="Verified against international bullion and Vadodara bullion associations. Connect with our bullion desk for live instantaneous booking."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ratesList.map((rate, idx) => (
              <AnimatedSection key={rate.type} delay={idx * 0.1}>
                <Card
                  className={`h-full flex flex-col justify-between relative overflow-hidden ${
                    rate.popular ? 'border-gold-400/50 shadow-2xl shadow-gold-950/40' : ''
                  }`}
                >
                  {rate.popular && (
                    <div className="absolute top-0 right-0 bg-gold-500 text-surface-dark text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-xs">
                      Most Requested
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-400 block mb-2">
                      {rate.badge}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-warm-100 mb-1">
                      {rate.type}
                    </h3>
                    <div className="text-xs text-gold-300 font-medium mb-4">{rate.purity}</div>
                    <p className="text-warm-300 text-sm leading-relaxed mb-6">
                      {rate.subtitle}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gold-500/15">
                    <Button
                      href={`https://wa.me/919723822916?text=${encodeURIComponent(
                        `Hello Girishbhai Gandevikar Jewellers, I would like to inquire about ${rate.enquiryText}. Please share current live details.`
                      )}`}
                      variant={rate.popular ? 'primary' : 'outline'}
                      size="md"
                      className="w-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enquire Live Rate
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* WhatsApp Channel Callout */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 p-6 sm:p-8 rounded-xs bg-gradient-to-r from-surface-card via-surface-darker to-surface-card border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#25D366]/20 border border-[#25D366]/40 rounded-full text-[#25D366] shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-warm-100">
                    Official GGJ Daily Rates Channel
                  </h4>
                  <p className="text-xs sm:text-sm text-warm-300">
                    Receive morning bullion alerts, market trend analysis, and festive booking offers.
                  </p>
                </div>
              </div>

              <Button
                href="https://whatsapp.com/channel/0029Vb8ncXM7dmeSr0LOrm3Q"
                variant="primary"
                size="md"
                className="shrink-0"
              >
                Follow WhatsApp Channel
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </Button>
            </div>
          </AnimatedSection>

          <p className="text-xs text-warm-400 text-center mt-6 italic">
            * Disclaimer: These rates are market benchmark estimations for reference only. Final rates
            and taxes are confirmed at the time of purchase.
          </p>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS ABOUT GOLD RATES */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-darker border-y border-gold-500/20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Bullion Knowledge"
            title="Frequently Asked Questions"
            subtitle="Transparent answers regarding gold purity standards, benchmark rates, advance rate locking, and exchange policies."
          />

          <Accordion items={goldRateFaqs} />
        </div>
      </section>

      {/* 4. INSTANT CHANNELS */}
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
              <div className="font-heading text-lg font-bold text-warm-100 mb-1">Visit Showroom</div>
              <div className="text-xs uppercase tracking-widest text-gold-300">Open in Maps →</div>
            </a>

            <a
              href="https://wa.me/919723822916?text=Hello%20Girishbhai%20Gandevikar%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20today's%20gold%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-card border border-gold-500/20 hover:border-gold-400 rounded-xs text-center group transition-all"
            >
              <MessageCircle className="w-6 h-6 text-gold-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-lg font-bold text-warm-100 mb-1">Instant Rate Chat</div>
              <div className="text-xs uppercase tracking-widest text-gold-300">WhatsApp Desk →</div>
            </a>

            <a
              href="https://www.instagram.com/gandevikar.jeweller.girishbhai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-surface-card border border-gold-500/20 hover:border-gold-400 rounded-xs text-center group transition-all"
            >
              <InstagramIcon className="w-6 h-6 text-gold-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-lg font-bold text-warm-100 mb-1">Instagram Updates</div>
              <div className="text-xs uppercase tracking-widest text-gold-300">Follow Channel →</div>
            </a>
          </div>
        </div>
      </section>

      {/* 5. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
