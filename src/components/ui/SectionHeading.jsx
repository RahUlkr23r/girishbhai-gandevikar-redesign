import AnimatedSection from './AnimatedSection';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
  className = '',
}) {
  return (
    <AnimatedSection className={`${center ? 'text-center' : 'text-left'} max-w-3xl ${center ? 'mx-auto' : ''} mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gold-400 mb-3">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={`font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
            light ? 'text-warm-900' : 'text-warm-100'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-warm-700' : 'text-warm-300'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center ${center ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <div className="w-2 h-2 rotate-45 border border-gold-400 mx-2" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>
    </AnimatedSection>
  );
}
