/**
 * Constants and configuration for the VIGUS Studio landing page
 */

// Brand Information
export const BRAND = {
  name: 'VIGUS Studio',
  tagline: 'Diseñamos y desarrollamos productos digitales que funcionan',
  subtitle: 'Software y diseño para marcas que quieren crecer',
  description:
    'VIGUS Studio es un estudio de software y diseño digital con base en Mendoza, Argentina. Creamos sitios web, aplicaciones y experiencias digitales pensadas para escalar negocios en cualquier parte del mundo.',
  fullDescription:
    'En VIGUS Studio combinamos diseño, tecnología y estrategia para crear productos digitales sólidos y escalables. Desarrollamos páginas web modernas, aplicaciones a medida y soluciones digitales enfocadas en performance, usabilidad y resultados reales. Trabajamos con clientes de todo el mundo, acompañando cada proyecto desde la idea hasta su lanzamiento y evolución.',
  heroImage:
    'https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  logo: '/images/logo-vigus.png',
  placeholderImage: '/placeholder-brand.png',
} as const;

// Theme Colors (Cyan / Tech Style)
export const COLORS = {
  primary: '#39AAAA', // cyan moderno
  secondary: '#0097a7', // cyan más profundo
  textOnPrimary: '#e0f7fa', // texto claro sobre cyan
  background: '#071e26', // fondo oscuro tech
  surface: '#0f2e3a', // cards / secciones
  accent: '#4dd0e1', // detalles, hover, highlights
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' },
] as const;

// Services / Products Data
export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'web' | 'apps' | 'software' | 'design';
  images: {
    primary: string;
    hover?: string;
  };
  price?: number;
}

// Contact Information
export const CONTACT = {
  phones: ['+54 9 261 4 717078'],
  email: 'hola@vigusstudio.com',
  whatsapp: {
    number: '5492614717078',
    defaultMessage: 'Hola VIGUS Studio! Quisiera consultar por un proyecto.',
    productTemplate: 'Hola VIGUS Studio! Quisiera más información sobre el servicio {product}.',
  },
  address: 'Mendoza, Argentina',
  availability: 'Trabajamos con clientes de todo el mundo',
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/vigusstudio',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/vigusstudio',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/vigusstudio',
    icon: 'github',
  },
] as const;

// SEO Metadata
export const SITE_URL = 'https://vigus-studio.vercel.app'; // cambiar cuando tengas dominio propio

export const SEO = {
  title: 'VIGUS Studio | Software, Web y Diseño Digital',
  description:
    'VIGUS Studio desarrolla páginas web, aplicaciones y productos digitales a medida. Estudio de software y diseño con base en Mendoza, trabajando para todo el mundo.',
  keywords: [
    'VIGUS Studio',
    'desarrollo web',
    'desarrollo de software',
    'diseño UX UI',
    'aplicaciones web',
    'estudio digital',
    'software a medida',
    'web developers argentina',
    'digital studio',
  ],
  openGraph: {
    type: 'website' as const,
    locale: 'es_AR',
    siteName: 'VIGUS Studio',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'VIGUS Studio – Software y Diseño Digital',
      },
    ],
  },
};
