'use client';

import { useLanguage } from '@/lib/i18n';

/** Visually hidden until focused — lets keyboard/screen-reader users skip the landing screen and menu. */
export function SkipToContent() {
  const { t } = useLanguage();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-pixel-green focus:bg-bg-panel focus:px-4 focus:py-3 focus:font-pixel focus:text-[11px] focus:text-pixel-green"
    >
      {t('a11y.skipToContent')}
    </a>
  );
}
