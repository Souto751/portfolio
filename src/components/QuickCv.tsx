'use client';

import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Mail, Printer } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { projects } from '@/constants/projects';
import { skills } from '@/constants/skills';
import { experienceItems } from '@/constants/experience';
import { certifications } from '@/constants/certifications';
import { educationItems } from '@/constants/education';
import { socialLinks } from '@/constants/socials';
import { LanguageToggle } from '@/components/LanguageToggle';
import { formatMonthYear } from '@/utils/formatDate';
import type { SkillCategory } from '@/types';

const socialIcons = { github: Github, linkedin: Linkedin, email: Mail };
const categoryOrder: SkillCategory[] = ['frontend', 'backend', 'mobile', 'database', 'devops', 'tools', 'ai'];

function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b border-bg-border pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-pixel-green print:border-gray-300 print:text-gray-900">
      {children}
    </h2>
  );
}

/**
 * Recruiter-friendly, single-page CV built from the same content as the game experience.
 * No animations, plain typography, and print styles so "Save as PDF" produces a clean resume.
 */
export function QuickCv() {
  const { t, tList, locale } = useLanguage();

  return (
    <div className="min-h-screen bg-bg text-ink print:bg-white print:text-gray-900">
      <div className="sticky top-0 z-50 border-b border-bg-border bg-bg/95 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm text-ink/70 hover:text-pixel-green">
            <ArrowLeft size={16} aria-hidden="true" /> {t('cv.back')}
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 border-2 border-pixel-green px-3 py-2 text-xs font-medium text-pixel-green hover:bg-pixel-green hover:text-bg"
            >
              <Printer size={14} aria-hidden="true" /> {t('cv.print')}
            </button>
            <LanguageToggle />
          </div>
        </div>
      </div>

      <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 sm:px-6 print:max-w-none print:px-0 print:py-0">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{t('about.name')}</h1>
          <p className="mt-1 text-lg text-pixel-blue print:text-gray-700">{t('about.profession')}</p>
          <p className="mt-1 text-sm text-ink/60 print:text-gray-600">{t('about.location')}</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.id];
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-ink/80 hover:text-pixel-green print:text-gray-800"
                    target={link.id === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <Icon size={14} aria-hidden="true" />
                    {link.id === 'email' ? link.href.replace('mailto:', '') : link.href.replace('https://', '')}
                  </a>
                </li>
              );
            })}
          </ul>
        </header>

        <section className="mt-8">
          <CvHeading>{t('cv.summaryTitle')}</CvHeading>
          <p className="text-sm leading-relaxed text-ink/85 print:text-gray-800">{t('about.summary')}</p>
        </section>

        <section className="mt-8">
          <CvHeading>{t('cv.experienceTitle')}</CvHeading>
          <ul className="flex flex-col gap-5">
            {experienceItems.map((item) => (
              <li key={item.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">
                    {t(item.roleKey)} — {t(item.companyKey)}
                  </h3>
                  <span className="text-xs text-ink/50 print:text-gray-600">
                    {formatMonthYear(item.startDate, locale, t('experience.present'))} —{' '}
                    {formatMonthYear(item.endDate, locale, t('experience.present'))}
                  </span>
                </div>
                <ul className="mt-1 list-disc pl-5 text-sm text-ink/80 print:text-gray-800">
                  {tList(item.achievementsKey).map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <CvHeading>{t('cv.educationTitle')}</CvHeading>
          <ul className="flex flex-col gap-3">
            {educationItems.map((item) => (
              <li key={item.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">{t(item.degreeKey)}</h3>
                  <span className="text-xs text-ink/50 print:text-gray-600">
                    {formatMonthYear(item.startDate, locale, t('experience.present'))} —{' '}
                    {formatMonthYear(item.endDate, locale, t('experience.present'))}
                  </span>
                </div>
                <p className="text-sm text-ink/75 print:text-gray-700">
                  {t(item.institutionKey)} · {t(item.locationKey)} · {t(item.statusKey)}
                  {item.average ? ` · ${t('education.average')}: ${item.average}/10` : ''}
                </p>
                <p className="text-xs text-ink/50 print:text-gray-500">
                  {t('education.languages')}: {item.languages.join(' · ')}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {certifications.length > 0 && (
          <section className="mt-8">
            <CvHeading>{t('cv.certificationsTitle')}</CvHeading>
            <ul className="flex flex-col gap-2 text-sm">
              {certifications.map((cert) => (
                <li key={cert.id} className="break-inside-avoid">
                  <span className="font-semibold">{t(cert.nameKey)}</span>
                  <span className="text-ink/60 print:text-gray-600">
                    {' '}— {t(cert.issuerKey)}
                    {cert.date ? ` · ${formatMonthYear(cert.date, locale, '')}` : ''}
                  </span>
                  <p className="text-ink/75 print:text-gray-700">{t(cert.descriptionKey)}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-8">
          <CvHeading>{t('cv.skillsTitle')}</CvHeading>
          <dl className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-[8rem_1fr]">
            {categoryOrder.map((category) => {
              const names = skills.filter((skill) => skill.category === category).map((skill) => skill.name);
              if (names.length === 0) return null;
              return (
                <div key={category} className="contents">
                  <dt className="font-medium text-ink/60 print:text-gray-600">{t(`skills.categories.${category}`)}</dt>
                  <dd className="text-ink/90 print:text-gray-900">{names.join(' · ')}</dd>
                </div>
              );
            })}
          </dl>
        </section>

        <section className="mt-8">
          <CvHeading>{t('cv.projectsTitle')}</CvHeading>
          <ul className="flex flex-col gap-5">
            {projects.map((project) => (
              <li key={project.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">
                        {t(project.nameKey)}
                      </a>
                    ) : (
                      t(project.nameKey)
                    )}
                  </h3>
                  <span className="text-xs text-pixel-yellow print:text-gray-600">{t(project.statusKey)}</span>
                </div>
                <p className="mt-1 text-sm text-ink/85 print:text-gray-800">{t(project.descriptionKey)}</p>
                <p className="mt-1 text-sm text-ink/70 print:text-gray-700">{t(project.challengesKey)}</p>
                <p className="mt-1 text-xs text-ink/50 print:text-gray-500">{project.technologies.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <CvHeading>{t('cv.aiTitle')}</CvHeading>
          <p className="text-sm leading-relaxed text-ink/85 print:text-gray-800">{t('cv.aiText')}</p>
        </section>

        <section className="mt-8 text-sm text-ink/70 print:text-gray-700">
          <p>{t('about.quickFacts.languages')}</p>
          <p>{t('about.quickFacts.availability')}</p>
        </section>
      </main>
    </div>
  );
}
