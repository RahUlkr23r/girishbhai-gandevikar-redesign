import { useState, useEffect } from 'react';
import { Star, MessageSquare, ExternalLink, Sparkles, Search, Filter } from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import ReviewCard from '../components/ui/ReviewCard';
import VisitCTA from '../components/ui/VisitCTA';
import { reviews } from '../data/reviews';

const loveStoryImages = [
  { src: '/images/ext_ls_1.webp', alt: 'Bridal moment at Girishbhai Gandevikar' },
  { src: '/images/ext_ls_2.webp', alt: 'Wedding jewellery suite by GGJ' },
  { src: '/images/ext_ls_3.webp', alt: 'Heritage jewellery celebration' },
  { src: '/images/ext_ls_4.webp', alt: 'Traditional gold haar client' },
  { src: '/images/ext_ls_5.webp', alt: 'Bridal client story Vadodara' },
  { src: '/images/ext_ls_6.webp', alt: 'Diamond engagement moment' },
  { src: '/images/ext_ls_7.webp', alt: 'Family celebration with GGJ gold' },
  { src: '/images/ext_ls_8.webp', alt: 'Happy bride with Meenakari set' },
];

const categoryTabs = [
  { id: 'all', label: 'All Reviews' },
  { id: 'bridal', label: 'Bridal & Wedding' },
  { id: 'gold', label: 'Gold & Diamond' },
  { id: 'nri', label: 'Global / NRI Clients' },
  { id: 'staff', label: 'Hospitality & Staff' },
];

export default function Reviews() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Customer Reviews & Testimonials | Girishbhai Gandevikar Jewellers Vadodara';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        '4,065+ Google reviews, rated 4.9/5. Authentic bridal testimonials and love stories from customers of Girishbhai Gandevikar Jewellers, Vadodara since 1927.'
      );
    }
  }, []);

  const filteredReviews = reviews.filter((review) => {
    const matchesCategory =
      activeCategory === 'all' || review.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      review.name.toLowerCase().includes(q) ||
      (review.title && review.title.toLowerCase().includes(q)) ||
      review.text.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-surface-dark pt-28">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-gold-500/15 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/reviews_hero_bg.webp"
            alt="Customer Reviews Background"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/90 to-surface-dark/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Real Stories · Real Trust
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
              Customer Reviews & Testimonials
            </h1>

            <p className="text-warm-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Discover authentic reviews and bridal stories from clients across the globe who have
              entrusted our atelier since 1927 with their cherished moments.
            </p>

            {/* Google Rating Showcase Box */}
            <div className="max-w-xl mx-auto bg-surface-card/90 border border-gold-400/30 rounded-xs p-6 sm:p-8 backdrop-blur-md shadow-2xl mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <div className="font-heading text-4xl font-bold text-warm-100">4.9 / 5.0</div>
                  <span className="text-xs text-warm-400 tracking-wider uppercase">
                    Overall Satisfaction Score
                  </span>
                </div>

                <div className="hidden sm:block w-px h-16 bg-gold-500/20" />

                <div className="text-center sm:text-left">
                  <div className="font-heading text-4xl font-bold text-gold-400">4,065+</div>
                  <div className="text-xs text-warm-300 font-medium">Verified Google Reviews</div>
                  <span className="text-[11px] text-warm-400">Vadodara's Highest Rated</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gold-500/15 flex flex-wrap justify-center gap-4">
                <Button
                  href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,17z/data=!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
                  variant="primary"
                  size="md"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Write a Review on Google
                </Button>
                <Button
                  href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,17z/data=!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
                  variant="outline"
                  size="md"
                >
                  Rate Us on Google
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. LOVE STORIES & BRIDAL MOMENTS GALLERY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface-darker/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Cherished Memories"
            title="Moments Celebrated with GGJ"
            subtitle="From wedding rituals to anniversaries, every jewel tells a lasting family story."
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {loveStoryImages.map((img, idx) => (
              <AnimatedSection key={img.src} delay={idx * 0.05}>
                <div className="group relative aspect-[3/4] rounded-xs overflow-hidden border border-gold-500/20 bg-surface-card">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-xs text-warm-100 font-medium">{img.alt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REVIEWS MASONRY GRID WITH INTERACTIVE FILTERS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Unedited Experiences"
            title="What Our Clients Say"
            subtitle="Read genuine stories from Vadodara families and international clients who chose Girishbhai Gandevikar Jewellers."
          />

          {/* Interactive Filters & Search Bar */}
          <div className="mb-12 space-y-6">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-4 h-4 text-gold-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search reviews by name, staff (Sandeep, Parul), or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-card border border-gold-500/30 rounded-xs py-2.5 pl-11 pr-4 text-warm-100 placeholder-warm-400 text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors"
                aria-label="Search reviews"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gold-400 hover:text-gold-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categoryTabs.map((tab) => {
                const count =
                  tab.id === 'all'
                    ? reviews.length
                    : reviews.filter((r) => r.category === tab.id).length;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-xs text-xs font-medium tracking-wider uppercase transition-all duration-200 flex items-center gap-2 border ${
                      isActive
                        ? 'bg-gold-500 text-surface-dark border-gold-500 font-semibold shadow-md shadow-gold-950/30'
                        : 'bg-surface-card border-gold-500/20 text-warm-300 hover:border-gold-400/50 hover:text-gold-300'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-xs ${
                        isActive
                          ? 'bg-surface-dark text-gold-300'
                          : 'bg-gold-500/10 text-gold-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reviews Grid */}
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((review, idx) => (
                <AnimatedSection key={`${review.name}-${idx}`} delay={(idx % 6) * 0.06}>
                  <ReviewCard review={review} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-warm-400">
              <Filter className="w-8 h-8 text-gold-500/40 mx-auto mb-3" />
              <p className="text-base text-warm-300">
                No reviews found matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}

          <div className="mt-16 text-center space-y-4">
            <Button
              href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,17z/data=!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
              variant="primary"
              size="lg"
            >
              Read More Reviews on Google Maps
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
