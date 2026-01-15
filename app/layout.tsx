import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SEO, BRAND, SITE_URL, CONTACT, SOCIAL_LINKS } from '@/lib/constants';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    type: SEO.openGraph.type,
    locale: SEO.openGraph.locale,
    siteName: SEO.openGraph.siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: BRAND.logo,
    apple: BRAND.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobilePhoneStore',
    name: SEO.openGraph.siteName,
    description: SEO.description,
    url: SITE_URL,
    telephone: CONTACT.phones[0],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mendoza',
      addressCountry: 'AR',
    },
    openingHours: 'Mo-Sa 09:00-20:00',
    sameAs: SOCIAL_LINKS.map((link) => link.url),
  };

  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${raleway.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
