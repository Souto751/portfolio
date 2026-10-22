import type { Metadata, Viewport } from 'next';
import { Press_Start_2P, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import { SkipToContent } from '@/components/SkipToContent';
import { CRTOverlay } from '@/components/CRTOverlay';
import { PixelCursor } from '@/components/PixelCursor';
import { siteConfig, socialLinks } from '@/constants/socials';

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Agustin Souto — Full Stack Developer | Mar del Plata, Argentina',
    template: '%s — Agustin Souto',
  },
  description:
    'Agustin Souto, Full Stack Developer from Mar del Plata, Argentina. Vue, React, Node.js, Java and legacy system migrations in healthcare, plus personal projects in web, mobile and AI. Desarrollador Full Stack.',
  keywords: [
    'Agustin Souto',
    'Agustín Souto',
    'Souto751',
    'Full Stack Developer',
    'Desarrollador Full Stack',
    'Mar del Plata',
    'Argentina',
    'Vue.js',
    'React',
    'Node.js',
    'NestJS',
    'Java',
    'Informix',
    'Portfolio',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  // Single URL for both languages (the switch happens in the browser), so no hreflang alternates.
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Agustin Souto — Full Stack Developer',
    description:
      'Agustin Souto, Full Stack Developer from Mar del Plata, Argentina. Vue, React, Node.js, Java and legacy system migrations in healthcare, plus personal projects in web, mobile and AI. Desarrollador Full Stack.',
    siteName: `${siteConfig.name} Portfolio`,
    locale: 'en_US',
    alternateLocale: ['es_AR'],
    images: [{ url: '/og-image.png', width: 2400, height: 1260, alt: 'Agustin Souto — Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agustin Souto — Full Stack Developer',
    description:
      'Agustin Souto, Full Stack Developer from Mar del Plata, Argentina. Vue, React, Node.js, Java and legacy system migrations in healthcare, plus personal projects in web, mobile and AI. Desarrollador Full Stack.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#111827',
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  alternateName: ['Agustín Souto', 'Souto751'],
  url: siteConfig.url,
  image: `${siteConfig.url}/og-image.png`,
  jobTitle: 'Full Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Hospital Privado de Comunidad' },
  alumniOf: { '@type': 'EducationalOrganization', name: 'Instituto Superior de Formación Técnica N.º 151' },
  knowsLanguage: ['es', 'en'],
  email: `mailto:${siteConfig.email}`,
  sameAs: socialLinks.filter((link) => link.id !== 'email').map((link) => link.href),
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'Vue.js',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'Java',
    '4GL',
    'Informix',
    'PostgreSQL',
    'React Native',
    'Python',
    'Docker',
    'Git',
    'Jenkins',
    'LLM integration',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mar del Plata',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pressStart.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="custom-cursor-active min-h-screen bg-bg font-sans text-ink antialiased">
        <LanguageProvider>
          <SkipToContent />
          {children}
          <CRTOverlay />
          <PixelCursor />
        </LanguageProvider>
      </body>
    </html>
  );
}
