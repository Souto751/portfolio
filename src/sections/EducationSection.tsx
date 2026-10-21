'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, GraduationCap, Maximize2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { educationItems } from '@/constants/education';
import { certifications } from '@/constants/certifications';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { Modal } from '@/components/Modal';
import { formatMonthYear } from '@/utils/formatDate';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';

interface Preview {
  title: string;
  subtitle: string;
  images: string[];
  verifyUrl?: string;
}

/** Studies + certificates. Cards with a scanned document open it in a modal. */
export function EducationSection() {
  const { t, locale } = useLanguage();
  const [preview, setPreview] = useState<Preview | null>(null);
  const date = (value: string) => formatMonthYear(value, locale, t('experience.present'));

  return (
    <section id="education" aria-labelledby="education-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('education.eyebrow')} title={t('education.title')} subtitle={t('education.subtitle')} color="yellow" />
        <h3 id="education-heading" className="sr-only">
          {t('nav.education')}
        </h3>

        <h4 className="mb-4 font-pixel text-[11px] text-pixel-blue">{t('education.studiesTitle')}</h4>
        <motion.ul variants={staggerContainer(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-4">
          {educationItems.map((item) => (
            <motion.li key={item.id} variants={fadeUp}>
              <PixelPanel as="article" className="flex flex-col gap-4 p-5 sm:flex-row sm:p-6" glow="blue">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-pixel-blue bg-bg text-pixel-blue">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <p className="mb-2 inline-block border-2 border-pixel-green/60 px-2 py-1 font-pixel text-[8px] uppercase text-pixel-green">
                    {t(item.statusKey)}
                  </p>
                  <h5 className="font-pixel text-[11px] leading-relaxed text-ink">{t(item.degreeKey)}</h5>
                  <p className="mt-1 text-sm text-pixel-blue">
                    {t(item.institutionKey)} · {t(item.locationKey)}
                  </p>
                  <p className="mt-1 text-xs text-ink/50">
                    {date(item.startDate)} — {date(item.endDate)}
                  </p>
                  {item.average && (
                    <p className="mt-3 text-sm text-ink/80">
                      {t('education.average')}: <span className="font-pixel text-[10px] text-pixel-yellow">{item.average}</span>
                      <span className="text-ink/50"> / 10</span>
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-ink/60">{t('education.languages')}:</span>
                    {item.languages.map((lang) => (
                      <span key={lang} className="border-2 border-bg-border px-2 py-1 text-xs text-ink/70">
                        {lang}
                      </span>
                    ))}
                  </div>
                  {item.images && item.images.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setPreview({ title: t(item.degreeKey), subtitle: t(item.institutionKey), images: item.images ?? [] })
                      }
                      className="mt-4 flex items-center gap-2 border-2 border-bg-border px-3 py-2 font-pixel text-[9px] uppercase text-ink/70 hover:border-pixel-blue hover:text-pixel-blue"
                    >
                      <Maximize2 size={12} aria-hidden="true" /> {t('education.viewDiploma')}
                    </button>
                  )}
                </div>
              </PixelPanel>
            </motion.li>
          ))}
        </motion.ul>

        {certifications.length > 0 && (
          <>
            <h4 className="mb-4 mt-12 font-pixel text-[11px] text-pixel-yellow">{t('certifications.title')}</h4>
            <motion.ul
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-4 sm:grid-cols-2"
            >
              {certifications.map((cert) => {
                const content = (
                  <PixelPanel as="article" className="flex h-full gap-4 p-5 text-left" glow="yellow">
                    {cert.images?.[0] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cert.images[0]}
                        alt=""
                        loading="lazy"
                        className="h-16 w-20 shrink-0 border-2 border-pixel-yellow object-cover"
                      />
                    ) : (
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-pixel-yellow bg-bg text-pixel-yellow">
                        <Award size={22} aria-hidden="true" />
                      </span>
                    )}
                    <div>
                      <h5 className="font-pixel text-[10px] leading-relaxed text-ink">{t(cert.nameKey)}</h5>
                      <p className="mt-1 text-sm text-pixel-blue">
                        {t('certifications.issuedBy')} {t(cert.issuerKey)}
                        {cert.date ? ` · ${formatMonthYear(cert.date, locale, '')}` : ''}
                      </p>
                      <p className="mt-2 text-sm text-ink/75">{t(cert.descriptionKey)}</p>
                      {cert.images?.[0] && (
                        <p className="mt-3 flex items-center gap-2 font-pixel text-[8px] uppercase text-pixel-yellow">
                          <Maximize2 size={10} aria-hidden="true" /> {t('education.viewCertificate')}
                        </p>
                      )}
                    </div>
                  </PixelPanel>
                );
                return (
                  <motion.li key={cert.id} variants={fadeUp}>
                    {cert.images?.[0] ? (
                      <button
                        type="button"
                        aria-haspopup="dialog"
                        className="group block h-full w-full transition-transform duration-200 hover:-translate-y-1"
                        onClick={() =>
                          setPreview({
                            title: t(cert.nameKey),
                            subtitle: t(cert.issuerKey),
                            images: cert.images ?? [],
                            verifyUrl: cert.verifyUrl,
                          })
                        }
                      >
                        {content}
                      </button>
                    ) : (
                      content
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </>
        )}
      </div>

      <Modal open={!!preview} onClose={() => setPreview(null)} labelledBy="education-modal-title" closeLabel={t('projects.close')}>
        {preview && (
          <div>
            <h3 id="education-modal-title" className="pr-8 font-pixel text-xs leading-relaxed text-ink">
              {preview.title}
            </h3>
            <p className="mt-1 text-sm text-pixel-blue">{preview.subtitle}</p>
            <ol className="mt-4 flex flex-col gap-5">
              {preview.images.map((src, index) => (
                <li key={src}>
                  {preview.images.length > 1 && (
                    <p className="mb-2 font-pixel text-[9px] text-ink/60">
                      {t('education.page')} {index + 1} / {preview.images.length}
                    </p>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={preview.images.length > 1 ? `${preview.title} — ${index + 1}` : preview.title}
                    className="w-full border-2 border-bg-border bg-white"
                  />
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 border-2 border-bg-border px-3 py-2 font-pixel text-[9px] uppercase text-ink/70 hover:border-pixel-green hover:text-pixel-green"
                  >
                    <ExternalLink size={12} aria-hidden="true" /> {t('education.openFull')}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-4 flex flex-wrap gap-3">
              {preview.verifyUrl && (
                <a
                  href={preview.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-pixel-green px-3 py-2 font-pixel text-[9px] uppercase text-pixel-green hover:bg-pixel-green hover:text-bg"
                >
                  <ShieldCheck size={12} aria-hidden="true" /> {t('education.verify')}
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
