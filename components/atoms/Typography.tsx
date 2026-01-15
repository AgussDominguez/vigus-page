import React from 'react';
import { cn } from '@/lib/utils/cn';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: HeadingLevel;
  variant?: 'display' | 'title' | 'subtitle';
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  variant = 'title',
  className,
  children,
}) => {
  const variants = {
    display: 'text-5xl md:text-3xl lg:text-4xl font-bold tracking-tight',
    title: 'text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight',
    subtitle: 'text-2xl md:text-3xl font-semibold tracking-tight',
  };

  return <Component className={cn(variants[variant], className)}>{children}</Component>;
};

interface TextProps {
  variant?: 'body' | 'lead' | 'small' | 'muted';
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ variant = 'body', className, children }) => {
  const variants = {
    lead: 'text-3xl md:text-5xl font-semibold leading-none leading-relaxed',
    body: 'text-base md:text-lg leading-relaxed',
    small: 'text-sm md:text-base',
    muted: 'text-sm md:text-base text-gray-600',
  };

  return <p className={cn(variants[variant], className)}>{children}</p>;
};
