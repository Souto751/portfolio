'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Bot, SearchCheck, Rocket, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import { cn } from '@/utils/cn';

const steps: { id: string; icon: LucideIcon; color: string }[] = [
  { id: 'define', icon: ClipboardList, color: 'text-pixel-yellow border-pixel-yellow' },
  { id: 'delegate', icon: Bot, color: 'text-pixel-blue border-pixel-blue' },
  { id: 'review', icon: SearchCheck, color: 'text-pixel-green border-pixel-green' },
  { id: 'ship', icon: Rocket, color: 'text-pixel-red border-pixel-red' },
];

/** Transparent explanation of how the projects were built with AI as a copilot. */
export function AiWorkflowSection() {
  const { t, tList } = useLanguage();

  return (
    <section id="ai" aria-labelledby="ai-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('ai.eyebrow')} title={t('ai.title')} subtitle={t('ai.subtitle')} color="blue" />
        <h3 id="ai-heading" className="sr-only">
          {t('nav.ai')}
        </h3>

        <motion.ol
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(({ id, icon: Icon, color }) => (
            <motion.li key={id} variants={fadeUp}>
              <PixelPanel className="h-full p-5">
                <span className={cn('flex h-10 w-10 items-center justify-center border-2 bg-bg', color)}>
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-pixel text-[10px] leading-relaxed text-ink">{t(`ai.steps.${id}.title`)}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{t(`ai.steps.${id}.text`)}</p>
              </PixelPanel>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-8">
          <PixelPanel className="p-5 sm:p-6" glow="blue">
            <h4 className="mb-4 font-pixel text-[11px] text-pixel-blue">{t('ai.principlesTitle')}</h4>
            <ul className="flex flex-col gap-3 text-sm text-ink/80">
              {tList('ai.principles').map((item) => (
                <li key={item} className="border-l-2 border-pixel-blue pl-3">
                  {item}
                </li>
              ))}
            </ul>
          </PixelPanel>
        </motion.div>
      </div>
    </section>
  );
}
