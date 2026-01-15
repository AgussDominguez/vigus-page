import React from 'react';
import { Instagram, Facebook, Video } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { COLORS } from '@/lib/constants';
import { hexToRgba } from '@/lib/utils/colors';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: readonly SocialLink[];
  className?: string;
  variant?: 'default' | 'prominent';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className, variant = 'default' }) => {
  const getIcon = (iconName: string) => {
    const icons = {
      instagram: Instagram,
      facebook: Facebook,
      video: Video,
    };
    return icons[iconName as keyof typeof icons] || Instagram;
  };

  if (variant === 'prominent') {
    return (
      <div className={cn('grid grid-cols-1 sm:grid-cols-3 gap-6', className)}>
        {links.map((link) => {
          const Icon = getIcon(link.icon);
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100 hover:scale-105 group border border-transparent hover:border-gray-200"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300"
                style={{ backgroundColor: COLORS.primary }}
              >
                <Icon className="h-8 w-8" style={{ color: COLORS.textOnPrimary }} />
              </div>
              <span className="text-lg font-semibold text-black">{link.name}</span>
              <span className="text-sm text-gray-500 group-hover:text-black transition-colors">
                Seguinos
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {links.map((link) => {
        const Icon = getIcon(link.icon);
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: hexToRgba(COLORS.primary, 0.1) }}
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" style={{ color: COLORS.primary }} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
