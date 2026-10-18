import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Sparkles,
  Wrench,
  PenTool,
  ArrowLeftRight,
  GraduationCap,
  Banknote,
  Calculator,
  MessageCircle,
  CheckCircle,
  Gem,
  Coins,
  ShieldAlert,
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import VisitCTA from '../components/ui/VisitCTA';
import { collections, craftsmanshipServices } from '../data/services';

const serviceIcons = {
  Piercing: Sparkles,
  'Repairing & Polishing': Wrench,
  Customisation: PenTool,
  'Old Gold Exchange': ArrowLeftRight,
  'Gold & Diamond Guidance': GraduationCap,
  'Cash for Old Gold': Banknote,
};

export default function Services() {
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Jewellery & Services | Girishbhai Gandevikar Jewellers Vadodara';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore gold, silver, diamond, and polki collections. Calculate benefits of our 11+1 Gold Scheme and access atelier piercing, repair, and bespoke design services.'
      );
    }

    if (location.hash === '#gold-scheme') {
      const el = document.getElementById('gold-scheme');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  // 11+1 Calculations
  const customerPaid = monthlyAmount * 11;
  const ggjBonus = monthlyAmount;
  const totalMaturity = monthlyAmount * 12;

  const whatsappMessage = encodeURIComponent(
    `Hello Girishbhai Gandevikar Jewellers, I am interested in starting the 11+1 Gold Scheme with a monthly installment of ₹${monthlyAmount.toLocaleString('en-IN')}. Please guide me with the details.`
  );

  return (
    <div className="bg-surface-dark pt-28">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/15 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-3">
              Atelier Collections & Services
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
              Jewellery & Services
            </h1>
            <p className="text-warm-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From everyday gold jewellery to diamonds, polki and traditional pieces, we bring
              together a wide range of jewellery under one roof in Vadodara. Visit us in store to
              explore the collection, understand your options and find what feels right for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. CORE PRECIOUS COLLECTIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Master Craftsmanship"
            title="Four Pillars of Fine Jewellery"
            subtitle="Explore our hallmark traditional and contemporary creations in 22K Gold, GIA Diamonds, Handcrafted Polki, and Pure Silver."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((col, idx) => (
              <AnimatedSection key={col.name} delay={idx * 0.1}>
                <div className="group relative aspect-[4/5] rounded-xs overflow-hidden border border-gold-500/20 bg-surface-card shadow-xl hover:border-gold-400/60 transition-all duration-500">
                  <img
                    src={col.image}
                    alt={`${col.name} jewellery collection at Girishbhai Gandevikar`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                    <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-gold-400 block mb-1">
                      Pure & Certified
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-warm-100 group-hover:text-gold-300 transition-colors uppercase tracking-wider">
                      {col.name}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 11+1 GOLD SCHEME & INTERACTIVE CALCULATOR */}
      <section
        id="gold-scheme"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface-darker border-y border-gold-500/20 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Scheme Details */}
            <div className="lg:col-span-6 space-y-6">
              <AnimatedSection>
                <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-2">
                  Savings & Jewel Bank Scheme
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-100 tracking-tight leading-tight">
                  11 + 1 GOLD SCHEME
                </h2>
                <h3 className="font-heading text-xl sm:text-2xl text-gold-300 font-medium">
                  Pay for 11 months. We add the 12th.
                </h3>

                <p className="text-warm-300 text-base sm:text-lg leading-relaxed pt-2">
                  Pay one instalment every month for 11 months. In the 12th month, GGJ contributes
                  one full instalment, which you can use towards your jewellery purchase.{' '}
                  <strong className="text-warm-100 font-semibold">
                    11 months + 1 from us = your jewellery.
                  </strong>
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-warm-200">
                    <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <span>100% bonus month contributed by Girishbhai Gandevikar Jewellers</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-warm-200">
                    <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <span>Redeemable across all 22K Gold, Polki, Diamond & Silver collections</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-warm-200">
                    <CheckCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <span>Transparent billing with zero hidden deductions</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    href={`https://wa.me/919723822916?text=${whatsappMessage}`}
                    variant="primary"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Your Scheme via WhatsApp
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Live Interactive Benefits Calculator */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={0.2}>
                <Card className="bg-surface-card/90 border-gold-400/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-3 pb-6 border-b border-gold-500/20 mb-6">
                    <div className="p-3 bg-gold-400/10 border border-gold-400/30 rounded-xs text-gold-300">
                      <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl sm:text-2xl font-bold text-warm-100">
                        THE BENEFITS CALCULATOR
                      </h4>
                      <p className="text-xs text-warm-300">
                        Tell us your monthly installment amount and calculate your total benefits.
                      </p>
                    </div>
                  </div>

                  {/* Input Slider & Quick Selector */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label
                          htmlFor="monthly-slider"
                          className="text-xs uppercase font-semibold tracking-wider text-warm-300"
                        >
                          Monthly Installment:
                        </label>
                        <span className="font-heading text-2xl font-bold text-gold-300">
                          ₹{monthlyAmount.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <input
                        id="monthly-slider"
                        type="range"
                        min="2000"
                        max="100000"
                        step="1000"
                        value={monthlyAmount}
                        onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                        className="w-full h-2 bg-warm-800 rounded-lg appearance-none cursor-pointer accent-gold-400 focus-visible:outline-gold-400"
                      />

                      {/* Quick Amount Buttons */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[5000, 10000, 25000, 50000].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setMonthlyAmount(amt)}
                            className={`px-2.5 py-1 text-xs rounded-xs font-medium border transition-colors ${
                              monthlyAmount === amt
                                ? 'bg-gold-500 text-surface-dark border-gold-500 font-semibold'
                                : 'bg-surface-dark border-gold-500/20 text-warm-300 hover:border-gold-400'
                            }`}
                          >
                            ₹{amt.toLocaleString('en-IN')}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calculation Breakdown */}
                    <div className="p-5 bg-surface-darker/90 rounded-xs border border-gold-500/20 space-y-3">
                      <div className="flex justify-between text-xs sm:text-sm text-warm-300">
                        <span>You Pay (11 Months):</span>
                        <span className="font-medium text-warm-100">
                          ₹{customerPaid.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm text-gold-300">
                        <span>GGJ Contributes (12th Month):</span>
                        <span className="font-semibold text-gold-400">
                          + ₹{ggjBonus.toLocaleString('en-IN')} (FREE)
                        </span>
                      </div>
                      <div className="pt-3 border-t border-gold-500/20 flex justify-between items-baseline">
                        <span className="font-heading text-sm uppercase tracking-wider text-warm-200">
                          Total Jewellery Value:
                        </span>
                        <span className="font-heading text-2xl sm:text-3xl font-bold text-gold-300">
                          ₹{totalMaturity.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <Button
                      href={`https://wa.me/919723822916?text=${whatsappMessage}`}
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      Enroll in ₹{monthlyAmount.toLocaleString('en-IN')}/Month Scheme
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CRAFTSMANSHIP & CARE SERVICES */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Specialist Services"
            title="Craftsmanship & Care"
            subtitle="From precision piercing to bespoke design, we offer comprehensive jewellery care and custom craftsmanship in Vadodara."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftsmanshipServices.map((service, idx) => {
              const Icon = serviceIcons[service.title] || Sparkles;
              return (
                <AnimatedSection key={service.title} delay={idx * 0.08}>
                  <Card className="h-full flex flex-col justify-between">
                    <div>
                      <div className="p-3 w-fit rounded-xs bg-gold-400/10 border border-gold-400/20 text-gold-300 mb-5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-warm-100 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-warm-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-gold-500/10">
                      <a
                        href={`https://wa.me/919925579633?text=${encodeURIComponent(
                          `Hello Girishbhai Gandevikar Jewellers, I have an inquiry regarding: ${service.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold tracking-wider uppercase text-gold-400 hover:text-gold-300 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Enquire Service</span>
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
