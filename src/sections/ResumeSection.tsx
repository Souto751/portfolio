'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ScrollText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { fadeUp, viewportOnce, zoomIn } from '@/animations/variants';

const LAST_UPDATED = '2026-10-21';

export function ResumeSection() {
  const { t, locale } = useLanguage();

  const formattedDate = new Intl.DateTimeFormat(locale === 'es' ? 'es-AR' : 'en-US', {
    year: 'numeric',
    month: 'long',
  }).format(new Date(LAST_UPDATED));

  return (
    <section id="resume" aria-labelledby="resume-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading eyebrow={t('resume.eyebrow')} title={t('resume.title')} subtitle={t('resume.subtitle')} align="center" color="yellow" />
        <h3 id="resume-heading" className="sr-only">
          {t('nav.resume')}
        </h3>

        <motion.div variants={zoomIn} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <PixelPanel className="mx-auto max-w-md p-8 pixel-corners" glow="yellow">
            <ScrollText className="mx-auto mb-4 text-pixel-yellow" size={48} aria-hidden="true" />
            <p className="font-pixel text-[10px] text-ink/60">{t('resume.lastUpdated')}: {formattedDate}</p>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-6">
              <Link
                href="/cv"
                className="relative inline-flex w-full items-center justify-center gap-2 border-2 border-pixel-green bg-pixel-green px-8 py-5 font-pixel text-sm uppercase tracking-wide text-bg shadow-pixel transition-all duration-100 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pixel-yellow"
              >
                <FileText size={16} aria-hidden="true" /> {t('resume.open')}
              </Link>
            </motion.div>
          </PixelPanel>
        </motion.div>
      </div>
    </section>
  );
}
