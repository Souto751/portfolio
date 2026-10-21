'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { PixelPanel } from './PixelPanel';
import { PixelButton } from './PixelButton';
import { cn } from '@/utils/cn';

interface KonamiEasterEggProps {
  open: boolean;
  onClose: () => void;
}

const TRANSITION_MS = 200;

/**
 * Secret screen revealed by entering the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A).
 * Uses plain CSS transitions (see Modal.tsx) rather than an animation library, for reliability.
 */
export function KonamiEasterEgg({ open, onClose }: KonamiEasterEggProps) {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    setVisible(false);
    const timeout = setTimeout(() => setMounted(false), TRANSITION_MS);
    return () => clearTimeout(timeout);
  }, [open]);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
      )}
      role="dialog"
      aria-modal="true"
      aria-label={t('easterEgg.activated')}
    >
      <div
        className={cn(
          'transition-all duration-200 ease-out',
          visible ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
        )}
      >
        <PixelPanel className="relative max-w-md p-6 text-center" glow="yellow">
          <button
            onClick={onClose}
            aria-label={t('easterEgg.close')}
            className="absolute right-2 top-2 text-ink/60 hover:text-pixel-red"
          >
            <X size={18} />
          </button>
          <p className="font-pixel text-xs text-pixel-yellow animate-pixel-pop">{t('easterEgg.activated')}</p>
          <p className="mt-4 text-sm text-ink/80">{t('easterEgg.message')}</p>
          <p className="mt-3 border-2 border-pixel-yellow/40 bg-bg p-3 text-xs text-pixel-green">
            {t('easterEgg.secretFact')}
          </p>
          <PixelButton className="mt-5" size="sm" onClick={onClose}>
            {t('easterEgg.close')}
          </PixelButton>
        </PixelPanel>
      </div>
    </div>
  );
}
