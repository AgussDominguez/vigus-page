'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { COLORS } from '@/lib/constants';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  variant?: 'light' | 'dark';
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  isOpen,
  onClick,
  className,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors',
        isDark ? 'hover:bg-black/5' : 'hover:bg-white/10',
        className,
      )}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn('h-0.5 w-6', !isDark && 'bg-white')}
        style={isDark ? { backgroundColor: COLORS.primary } : {}}
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn('h-0.5 w-6', !isDark && 'bg-white')}
        style={isDark ? { backgroundColor: COLORS.primary } : {}}
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn('h-0.5 w-6', !isDark && 'bg-white')}
        style={isDark ? { backgroundColor: COLORS.primary } : {}}
      />
    </button>
  );
};

export default MobileMenuToggle;
