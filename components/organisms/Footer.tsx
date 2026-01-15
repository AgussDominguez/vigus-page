import Logo from '@/components/atoms/Logo';
import { BRAND } from '@/lib/constants';
import { Text } from '../atoms/Typography';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BRAND.heroImage}
          alt="Footer background"
          fill
          className="object-cover blur-sm brightness-[0.40]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          {/* Brand Logo */}
          <Logo size="lg" />

          {/* Legal Info */}
          <div className="text-center space-y-3">
            <Text variant="small" className="text-gray-400">
              © {currentYear} {BRAND.name}. Todos los derechos reservados.
            </Text>
            <Text variant="small" className="text-gray-400">
              Mendoza, Argentina
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
