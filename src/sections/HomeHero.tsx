'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { PixelWorldBackground } from '@/components/PixelWorldBackground';
import { PixelAvatar } from '@/components/PixelAvatar';
import { fadeUp, staggerContainer } from '@/animations/variants';

/**
 * The real, always-rendered "home" section behind the Landing overlay.
 * Anchors the nav's Home link and guarantees name/title/summary exist as crawlable HTML
 * even for visitors (and bots) who never see or dismiss the Landing splash.
 */
export function HomeHero() {
  const { t } = useLanguage();

  return (
    <section id="home" aria-label={t('landing.name')} className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 text-center">
      <PixelWorldBackground variant="subtle" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center py-24"
      >
        <motion.div variants={fadeUp}>
          <PixelAvatar size={80} />
        </motion.div>
        <motion.p variants={fadeUp} className="mt-5 font-pixel text-[9px] tracking-[0.25em] text-pixel-yellow">
          {t('landing.level')}
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-3 font-pixel text-xl leading-relaxed text-ink sm:text-3xl">
          {t('landing.name')}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-2 font-pixel text-[10px] tracking-wide text-pixel-green sm:text-xs">
          {t('landing.title')}
        </motion.p>
        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-sm text-ink/60">
          {t('about.summary')}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 animate-float text-ink/40">
          <ChevronDown aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
