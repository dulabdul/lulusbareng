import Link from 'next/link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className,
  target,
  rel,
  'aria-label': ariaLabel,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/20 focus:ring-orange-500',
    outline:
      'border-2 border-slate-900 text-slate-900 hover:bg-slate-50 focus:ring-slate-900',
    white:
      'bg-white text-slate-900 hover:bg-gray-50 shadow-md focus:ring-white',
  };

  const combinedClassName = twMerge(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClassName}
        target={target}
        rel={rel}
        aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}>
      {children}
    </button>
  );
}
