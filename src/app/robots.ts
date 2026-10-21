import type { MetadataRoute } from 'next';
import { siteConfig } from '@/constants/socials';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
