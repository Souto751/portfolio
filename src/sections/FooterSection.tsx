'use client';

import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { siteConfig } from '@/constants/socials';

export function FooterSection() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-bg-border bg-bg-panel py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:px-6">
        <p className="font-pixel text-[9px] text-ink/50">{t('footer.tagline')}</p>

        <p className="text-xs text-ink/40">
          © {year} {siteConfig.name}. {t('footer.rights')}
        </p>

        <a
          href="#home"
          className="flex items-center gap-2 text-xs text-ink/50 hover:text-pixel-green"
        >
          <ArrowUp size={14} aria-hidden="true" /> {t('footer.backToTop')}
        </a>
      </div>
    </footer>
  );
}
