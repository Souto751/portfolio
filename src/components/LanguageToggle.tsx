'use client';

import { Languages } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

/** Instant EN/ES switcher, shown in the nav and mobile menu. */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t('language.toggle')}
      className={`flex items-center gap-2 border-2 border-bg-border bg-bg-panel px-3 py-2 font-pixel text-[10px] text-ink transition-colors hover:border-pixel-yellow hover:text-pixel-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-pixel-yellow ${className ?? ''}`}
    >
      <Languages size={14} aria-hidden="true" />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}
