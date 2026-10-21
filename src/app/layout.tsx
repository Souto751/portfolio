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
    default: 'Agustin Souto — Full Stack Developer',
    template: '%s — Agustin Souto',
  },
  description:
    'Full Stack Developer building complete products across web, mobile, desktop and AI integrations — with AI as a copilot.',
  keywords: [
    'Agustin Souto',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js',
    'Web Developer Portfolio',
    'Desarrollador Full Stack',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: '/', languages: { en: '/', es: '/' } },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: 'Agustin Souto — Full Stack Developer',
    description:
      'Full Stack Developer building complete products across web, mobile, desktop and AI integrations — with AI as a copilot.',
    siteName: `${siteConfig.name} Portfolio`,
    locale: 'en_US',
    alternateLocale: ['es_AR'],
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Agustin Souto — Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agustin Souto — Full Stack Developer',
    description:
      'Full Stack Developer building complete products across web, mobile, desktop and AI integrations — with AI as a copilot.',
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
  url: siteConfig.url,
  jobTitle: 'Full Stack Developer',
  email: `mailto:${siteConfig.email}`,
  sameAs: socialLinks.filter((link) => link.id !== 'email').map((link) => link.href),
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'React Native',
    'Python',
    'Docker',
    'LLM integration',
    'TailwindCSS',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Buenos Aires',
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
