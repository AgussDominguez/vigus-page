'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { handleNavClick } from '@/lib/utils/smooth-scroll';
import { COLORS } from '@/lib/constants';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'light' | 'dark';
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  className,
  variant = 'light',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e, href);
    onClick?.();
  };

  const isDark = variant === 'dark';

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'text-base font-medium transition-colors duration-200 relative group',
        className,
      )}
      style={{ color: isDark ? COLORS.primary : 'white' }}
    >
      {children}
      <span
        className={cn(
          'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full',
          isDark ? '' : 'bg-white group-hover:bg-gray-300',
        )}
        style={isDark ? { backgroundColor: COLORS.primary } : {}}
      />
    </a>
  );
};

export default NavLink;
