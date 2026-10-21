'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import { PixelPanel } from '@/components/PixelPanel';
import { PixelAvatar } from '@/components/PixelAvatar';
import { SectionHeading } from '@/components/SectionHeading';
import { useTypewriter } from '@/hooks/useTypewriter';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

/** About section styled as a classic RPG dialogue box, followed by an animated status sheet. */
export function AboutSection() {
  const { t, tList } = useLanguage();
  const [inView, setInView] = useState(false);
  const { displayed, isDone } = useTypewriter(t('about.summary'), { speedMs: 12, enabled: inView });

  return (
    <section id="about" aria-labelledby="about-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('about.eyebrow')} title={t('nav.about')} color="green" />
        <h3 id="about-heading" className="sr-only">
          {t('about.name')} — {t('about.profession')}
        </h3>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onViewportEnter={() => setInView(true)}
        >
          <PixelPanel as="article" className="p-5 sm:p-8" glow="green">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <PixelAvatar size={88} className="mx-auto sm:mx-0" />
              <div className="flex-1">
                <p className="font-pixel text-[10px] text-pixel-yellow">{t('about.dialogueLabel')}</p>
                <p className="font-pixel text-sm text-ink sm:text-base">{t('about.name')}</p>
                <p className="mt-1 text-sm text-pixel-blue">{t('about.profession')}</p>
                <p className="text-xs text-ink/60">{t('about.location')}</p>

                <div className="mt-5 min-h-[7rem] border-2 border-bg-border bg-bg p-4 text-sm leading-relaxed text-ink/90">
                  {displayed}
                  {!isDone && <span aria-hidden="true" className="animate-blink">▌</span>}
                </div>
                <p className="mt-2 text-right font-pixel text-[9px] text-ink/40">{t('about.continue')}</p>
              </div>
            </div>
          </PixelPanel>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <PixelPanel className="h-full p-5 sm:p-6">
              <h4 className="mb-4 font-pixel text-[11px] text-pixel-yellow">{t('about.classesTitle')}</h4>
              <ul className="flex flex-col gap-3 text-sm text-ink/80">
                {tList('about.classes').map((item) => (
                  <motion.li key={item} variants={fadeUp} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-pixel-green" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </PixelPanel>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <PixelPanel className="h-full p-5 sm:p-6">
              <h4 className="mb-4 font-pixel text-[11px] text-pixel-blue">{t('about.quickFacts.title')}</h4>
              <ul className="flex flex-col gap-3 text-sm text-ink/80">
                <li className="border-l-2 border-pixel-green pl-3">{t('about.quickFacts.experience')}</li>
                <li className="border-l-2 border-pixel-blue pl-3">{t('about.quickFacts.focus')}</li>
                <li className="border-l-2 border-pixel-yellow pl-3">{t('about.quickFacts.languages')}</li>
                <li className="border-l-2 border-pixel-red pl-3">{t('about.quickFacts.availability')}</li>
              </ul>
            </PixelPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
