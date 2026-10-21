'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Copy, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { siteConfig, socialLinks } from '@/constants/socials';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { useTypewriter } from '@/hooks/useTypewriter';
import { fadeUp, viewportOnce } from '@/animations/variants';

const linkClasses =
  'flex items-center justify-center gap-2 border-2 px-4 py-3 font-pixel text-[9px] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-pixel-yellow';

/**
 * Direct contact card (no form): recruiters usually reach out by email or LinkedIn,
 * and a direct channel never silently loses messages.
 */
export function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bootText = `${t('contact.bootLine1')}\n${t('contact.bootLine2')}\n${t('contact.bootLine3')}`;
  const { displayed } = useTypewriter(bootText, { speedMs: 14 });

  const linkedin = socialLinks.find((link) => link.id === 'linkedin');
  const github = socialLinks.find((link) => link.id === 'github');

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (permissions, insecure context): the address stays visible to copy by hand.
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} subtitle={t('contact.subtitle')} color="green" />
        <h3 id="contact-heading" className="sr-only">
          {t('nav.contact')}
        </h3>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <PixelPanel className="overflow-hidden" glow="green">
            <div className="flex items-center gap-2 border-b-2 border-bg-border bg-bg px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-pixel-red" />
              <span className="h-2.5 w-2.5 rounded-full bg-pixel-yellow" />
              <span className="h-2.5 w-2.5 rounded-full bg-pixel-green" />
              <span className="ml-2 font-pixel text-[9px] text-ink/50">contact@souto751:~</span>
            </div>

            <div className="p-5 sm:p-6">
              <pre className="mb-6 whitespace-pre-wrap font-mono text-xs text-pixel-green">{displayed}</pre>

              <p className="font-pixel text-[9px] text-ink/60">{t('contact.emailLabel')}</p>
              <div className="mt-2 flex flex-col gap-3 border-2 border-bg-border bg-bg p-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all font-mono text-base text-ink hover:text-pixel-green sm:text-lg"
                >
                  {siteConfig.email}
                </a>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`${linkClasses} border-bg-border text-ink/80 hover:border-pixel-green hover:text-pixel-green`}
                  >
                    {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                    {copied ? t('contact.copied') : t('contact.copy')}
                  </button>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className={`${linkClasses} border-pixel-green bg-pixel-green text-bg hover:brightness-110`}
                  >
                    <Mail size={14} aria-hidden="true" /> {t('contact.write')}
                  </a>
                </div>
              </div>
              <p className="sr-only" role="status" aria-live="polite">
                {copied ? t('contact.copied') : ''}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {linkedin && (
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClasses} border-pixel-blue text-pixel-blue hover:bg-pixel-blue hover:text-bg`}
                  >
                    <Linkedin size={14} aria-hidden="true" /> LinkedIn
                  </a>
                )}
                {github && (
                  <a
                    href={github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClasses} border-bg-border text-ink/80 hover:border-ink hover:text-ink`}
                  >
                    <Github size={14} aria-hidden="true" /> GitHub
                  </a>
                )}
                <Link
                  href="/cv"
                  className={`${linkClasses} border-pixel-yellow text-pixel-yellow hover:bg-pixel-yellow hover:text-bg`}
                >
                  <FileText size={14} aria-hidden="true" /> {t('nav.quickCv')}
                </Link>
              </div>

              <p className="mt-6 flex items-start gap-2 text-sm text-ink/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-pixel-red" aria-hidden="true" />
                {t('contact.availability')}
              </p>
            </div>
          </PixelPanel>
        </motion.div>
      </div>
    </section>
  );
}
