'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { experienceItems } from '@/constants/experience';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { formatMonthYear } from '@/utils/formatDate';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { cn } from '@/utils/cn';

export function ExperienceSection() {
  const { t, tList, locale } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(experienceItems[0]?.id ?? null);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} subtitle={t('experience.subtitle')} color="yellow" />
        <h3 id="experience-heading" className="sr-only">
          {t('nav.experience')}
        </h3>

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative border-l-2 border-bg-border pl-6 sm:pl-8"
        >
          {experienceItems.map((item) => {
            const isOpen = expandedId === item.id;
            return (
              <motion.li key={item.id} variants={fadeUp} className="relative mb-10 last:mb-0">
                <span
                  className="absolute -left-[calc(1.5rem+7px)] top-1 flex h-4 w-4 items-center justify-center border-2 border-pixel-yellow bg-bg sm:-left-[calc(2rem+7px)]"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 bg-pixel-yellow" />
                </span>

                <PixelPanel as="article" className="p-5 sm:p-6" glow="yellow">
                  <div className="flex flex-wrap items-center gap-2 text-[9px] font-pixel uppercase text-pixel-green">
                    <CheckCircle2 size={12} aria-hidden="true" />
                    {item.endDate === 'present' ? t('experience.questActive') : t('experience.questComplete')}
                  </div>

                  <h4 className="mt-3 font-pixel text-sm text-ink">{t(item.roleKey)}</h4>
                  <p className="mt-1 text-sm text-pixel-blue">{t(item.companyKey)} · {t(item.locationKey)}</p>
                  <p className="mt-1 text-xs text-ink/50">
                    {formatMonthYear(item.startDate, locale, t('experience.present'))} —{' '}
                    {formatMonthYear(item.endDate, locale, t('experience.present'))}
                  </p>

                  <button
                    onClick={() => setExpandedId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="mt-4 flex items-center gap-2 border-2 border-bg-border px-3 py-2 font-pixel text-[9px] uppercase text-ink/70 hover:border-pixel-green hover:text-pixel-green"
                  >
                    {isOpen ? t('experience.hideDetails') : t('experience.viewDetails')}
                    <ChevronDown size={12} className={cn('transition-transform', isOpen && 'rotate-180')} aria-hidden="true" />
                  </button>

                  {/*
                    CSS-only collapse (grid-template-rows 0fr -> 1fr) instead of an animation-library
                    mount/unmount: the content stays in the DOM at all times, so there's nothing to
                    "replay" when re-opening a different item — it's just a size/opacity transition.
                  */}
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-4 border-t-2 border-bg-border pt-4">
                        <p className="mb-2 font-pixel text-[9px] text-pixel-yellow">{t('experience.achievements')}</p>
                        <ul className="mb-4 flex flex-col gap-2 text-sm text-ink/80">
                          {tList(item.achievementsKey).map((achievement) => (
                            <li key={achievement} className="border-l-2 border-pixel-green pl-3">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        <p className="mb-2 font-pixel text-[9px] text-pixel-blue">{t('experience.technologies')}</p>
                        <ul className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <li key={tech} className="border-2 border-bg-border px-2 py-1 text-xs text-ink/70">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </PixelPanel>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
