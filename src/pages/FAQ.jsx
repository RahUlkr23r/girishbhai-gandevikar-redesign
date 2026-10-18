import { useState, useEffect } from 'react';
import { Search, HelpCircle, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import VisitCTA from '../components/ui/VisitCTA';
import { faqCategories } from '../data/faq';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'FAQs — Gold Purity, Diamonds, Bridal & Shipping | Girishbhai Gandevikar Jewellers';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'All your questions answered: BIS hallmarking, GIA diamonds, bespoke bridal timelines, Meenakari enamel, insured shipping, and heirloom care. Vadodara since 1927.'
      );
    }
  }, []);

  // Filter categories based on search query
  const filteredCategories = faqCategories
    .map((cat) => ({
      ...cat,
      faqs: cat.faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.faqs.length > 0);

  return (
    <div className="bg-surface-dark pt-28">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/15 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
              Complete Knowledge & Transparency
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-warm-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Everything you need to know about BIS hallmarking, HUID verification, gold exchange,
              diamond certification, bridal selections, and our 100-year Vadodara heritage.
            </p>

            {/* Interactive Live Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-5 h-5 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions about hallmarking, karatmeter, bridal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-card border border-gold-500/30 rounded-xs py-3.5 pl-12 pr-4 text-warm-100 placeholder-warm-400 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors"
                aria-label="Search FAQs"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. CATEGORIZED FAQ ACCORDIONS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, idx) => (
              <AnimatedSection key={category.title} delay={idx * 0.08}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-gold-400 rounded-xs" />
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-warm-100">
                    {category.title}
                  </h2>
                </div>

                <Accordion items={category.faqs} />
              </AnimatedSection>
            ))
          ) : (
            <div className="text-center py-12 text-warm-400">
              <p className="text-lg">No matching questions found for "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}

          {/* Still Have Questions Card */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 p-8 sm:p-10 rounded-xs bg-surface-card border border-gold-400/30 text-center shadow-xl">
              <h3 className="font-heading text-2xl font-bold text-warm-100 mb-2">
                Have a specific question not covered here?
              </h3>
              <p className="text-warm-300 text-sm max-w-xl mx-auto mb-6">
                Our master jewellers and bridal consultants are available to guide you with complete
                clarity and warmth.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  href="https://wa.me/919925579633?text=Hello%20Girishbhai%20Gandevikar%20Jewellers%2C%20I%20have%20a%20question%20regarding%20jewellery."
                  variant="primary"
                  size="md"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask on WhatsApp
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Contact Atelier
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
