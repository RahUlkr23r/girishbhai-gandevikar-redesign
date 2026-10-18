import { Star, ExternalLink, Quote } from 'lucide-react';
import Card from './Card';

export default function ReviewCard({ review }) {
  return (
    <Card className="flex flex-col justify-between h-full bg-surface-card/70 border-gold-500/20">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(review.rating || 5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-gold-400 text-gold-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium tracking-wider uppercase text-gold-400/80 bg-gold-400/10 px-2 py-0.5 rounded-xs border border-gold-400/20">
            Verified Google Review
          </span>
        </div>

        {review.title && (
          <h4 className="font-heading text-lg sm:text-xl text-warm-100 font-semibold mb-2">
            "{review.title}"
          </h4>
        )}

        <div className="relative text-warm-300 text-sm sm:text-base leading-relaxed italic mb-6">
          <Quote className="w-6 h-6 text-gold-500/20 absolute -top-2 -left-2 -z-10" />
          "{review.text}"
        </div>
      </div>

      <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs">
        <div>
          <span className="block font-semibold text-warm-100 text-sm tracking-wide">
            {review.name}
          </span>
          <span className="text-warm-400 text-xs">Customer</span>
        </div>

        {review.link && (
          <a
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors text-xs font-medium"
            title="Read review on Google Maps"
          >
            <span>Google Review</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </Card>
  );
}
