'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { PixelWorldBackground } from '@/components/PixelWorldBackground';
import { PixelAvatar } from '@/components/PixelAvatar';
import { PixelButton } from '@/components/PixelButton';
import { LanguageToggle } from '@/components/LanguageToggle';
import { MusicToggle } from '@/components/MusicToggle';

interface LandingScreenProps {
  onStart: () => void;
  musicEnabled: boolean;
  onMusicToggle: () => void;
  musicVolume: number;
  onMusicVolumeChange: (volume: number) => void;
}

/**
 * Fullscreen "start of the game" splash. Sits as a dismissible overlay above the real,
 * always-in-the-DOM site content (see GameExperience) so SEO/ATS crawlers see everything
 * regardless of whether this screen was ever interacted with.
 */
export function LandingScreen({
  onStart,
  musicEnabled,
  onMusicToggle,
  musicVolume,
  onMusicVolumeChange,
}: LandingScreenProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-hidden bg-bg px-4 text-center"
      exit={{ opacity: 0, scale: 1.4, filter: 'blur(6px)' }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <PixelWorldBackground variant="full" />

      <div className="absolute right-4 top-4 z-10">
        <LanguageToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="animate-float">
          <PixelAvatar size={104} />
        </div>

        <p className="mt-6 font-pixel text-[10px] tracking-[0.25em] text-pixel-yellow">{t('landing.level')}</p>

        <h1 className="mt-4 font-pixel text-2xl leading-relaxed text-ink sm:text-4xl">{t('landing.name')}</h1>

        <p className="mt-3 font-pixel text-[11px] tracking-[0.15em] text-pixel-green sm:text-sm">
          {t('landing.title')}
        </p>

        <p className="mt-5 max-w-md text-sm text-ink/60">{t('landing.tagline')}</p>

        <PixelButton size="lg" onClick={onStart} className="mt-10 animate-pixel-pop">
          <span aria-hidden="true">▶</span> {t('landing.start')}
        </PixelButton>

        <MusicToggle
          enabled={musicEnabled}
          onToggle={onMusicToggle}
          volume={musicVolume}
          onVolumeChange={onMusicVolumeChange}
          className="mt-5"
        />

        <p className="mt-4 font-pixel text-[9px] text-ink/40 animate-blink">{t('landing.pressStart')}</p>

        <button
          type="button"
          onClick={onStart}
          className="mt-8 text-xs text-ink/40 underline underline-offset-4 hover:text-pixel-green"
        >
          {t('landing.skip')}
        </button>

        <Link
          href="/cv"
          className="mt-3 text-xs text-pixel-yellow/80 underline underline-offset-4 hover:text-pixel-yellow"
        >
          {t('landing.quickCv')}
        </Link>
      </motion.div>
    </motion.div>
  );
}
