export default function Card({
  children,
  className = '',
  hover = true,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-surface-card/90 backdrop-blur-sm border border-gold-500/15 rounded-sm p-6 sm:p-8 transition-all duration-300 ${
        hover
          ? 'hover:border-gold-400/40 hover:shadow-xl hover:shadow-gold-950/40 hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {/* Subtle corner ornament */}
      <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400/10 rotate-45" />
      </div>
      {children}
    </div>
  );
}
