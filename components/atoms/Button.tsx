import React from 'react';
import { cn } from '@/lib/utils/cn';
import { COLORS } from '@/lib/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, href, style, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-xl',
      secondary:
        'bg-white text-black border-2 border-black hover:bg-black hover:text-white hover:scale-105',
      outline: 'border-2 border-black/20 text-black hover:border-black hover:bg-black/5',
      ghost: 'text-black hover:bg-black/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const primaryStyles =
      variant === 'primary'
        ? {
            backgroundColor: COLORS.primary,
            color: COLORS.textOnPrimary,
          }
        : {};

    const combinedStyle = { ...primaryStyles, ...style };

    if (href) {
      const { ...anchorProps } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          style={combinedStyle}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        style={combinedStyle}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
