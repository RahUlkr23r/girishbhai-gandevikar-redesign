import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-xs focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-widest',
    md: 'px-6 py-3 text-xs sm:text-sm tracking-widest',
    lg: 'px-8 py-4 text-sm sm:text-base tracking-[0.2em]',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-surface-dark font-semibold shadow-md shadow-gold-950/30 hover:brightness-110 hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'bg-warm-800 text-warm-100 hover:bg-warm-700 hover:text-white active:scale-[0.98]',
    outline:
      'border border-gold-400/60 text-gold-300 hover:text-white hover:border-gold-300 hover:bg-gold-500/10 active:scale-[0.98]',
    ghost:
      'text-gold-400 hover:text-gold-300 hover:bg-gold-500/10 active:scale-[0.98]',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={combinedStyles}
        target={isExternal && !href.startsWith('tel:') && !href.startsWith('mailto:') ? '_blank' : undefined}
        rel={isExternal && !href.startsWith('tel:') && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
