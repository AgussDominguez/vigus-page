import React from 'react';
import { Mail, Phone, MessageCircle, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { CONTACT, COLORS } from '@/lib/constants';
import { hexToRgba } from '@/lib/utils/colors';

interface ContactInfoProps {
  type: 'phone' | 'email' | 'whatsapp';
  value: string;
  className?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  phone: Phone,
  email: Mail,
  whatsapp: MessageCircle,
};

const ContactInfo: React.FC<ContactInfoProps> = ({ type, value, className }) => {
  const IconComponent = ICON_MAP[type] || Phone;

  const getHref = () => {
    switch (type) {
      case 'phone':
        return `tel:${value}`;
      case 'email':
        return `mailto:${value}`;
      case 'whatsapp': {
        const encodedMessage = encodeURIComponent(CONTACT.whatsapp.defaultMessage);
        return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodedMessage}`;
      }
      default:
        return '#';
    }
  };

  return (
    <div className={cn('flex items-center gap-4 text-left', className)}>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: hexToRgba(COLORS.primary, 0.2) }}
      >
        <IconComponent className="h-5 w-5" style={{ color: COLORS.primary }} />
      </div>
      <div>
        <p className="text-sm text-gray-600">
          {type === 'phone' ? 'Teléfono' : type === 'email' ? 'Email' : 'WhatsApp'}
        </p>
        <a
          href={getHref()}
          target={type === 'whatsapp' ? '_blank' : undefined}
          rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
          className="text-lg font-medium text-black hover:underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
