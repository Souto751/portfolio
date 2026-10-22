'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { projects } from '@/constants/projects';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { PixelButton } from '@/components/PixelButton';
import { Modal } from '@/components/Modal';
import { PixelFrame } from '@/components/PixelFrame';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import type { Project } from '@/types';

export function ProjectsSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('projects.eyebrow')} title={t('projects.title')} subtitle={t('projects.subtitle')} color="red" />
        <h3 id="projects-heading" className="sr-only">
          {t('nav.projects')}
        </h3>

        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.li key={project.id} variants={fadeUp}>
              <article>
                <button
                  onClick={() => setSelected(project)}
                  className="group block w-full text-left"
                  aria-haspopup="dialog"
                >
                  <PixelPanel
                    glow="red"
                    className="overflow-hidden transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-[1.015]"
                  >
                    {project.screenshots?.[0] ? (
                      <div className="border-b-2 border-bg-border bg-bg p-3">
                        <PixelFrame>
                          <div className="aspect-video w-full overflow-hidden bg-bg">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={project.screenshots[0]}
                              alt={project.imageAlt}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </PixelFrame>
                      </div>
                    ) : (
                      <div className="aspect-video w-full overflow-hidden border-b-2 border-bg-border bg-bg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          className="pixelated h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <p className="mb-2 inline-block border-2 border-pixel-yellow/60 px-2 py-1 font-pixel text-[8px] uppercase text-pixel-yellow">
                        {t(project.statusKey)}
                      </p>
                      <h4 className="font-pixel text-xs text-ink">{t(project.nameKey)}</h4>
                      <p className="mt-2 text-sm text-ink/70">{t(project.descriptionKey)}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <li key={tech} className="border-2 border-bg-border px-2 py-1 text-[10px] text-ink/60">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </PixelPanel>
                </button>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} labelledBy="project-modal-title" closeLabel={t('projects.close')}>
        {selected && (
          <div>
            <h3 id="project-modal-title" className="font-pixel text-sm text-ink">
              {t(selected.nameKey)}
            </h3>
            <p className="mt-2 font-pixel text-[9px] uppercase text-pixel-yellow">
              {t('projects.status')}: {t(selected.statusKey)}
            </p>
            <p className="mt-3 text-sm text-ink/70">{t(selected.descriptionKey)}</p>

            {selected.screenshots && selected.screenshots.length > 0 && (
              <ul className="mt-5 flex flex-col gap-4">
                {selected.screenshots.map((src, index) => (
                  <li key={src}>
                    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${t('projects.screenshot')} ${index + 1}`}>
                      <PixelFrame>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${t(selected.nameKey)} — ${t('projects.screenshot')} ${index + 1}`}
                          loading="lazy"
                          className="w-full"
                        />
                      </PixelFrame>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <dl className="mt-5 flex flex-col gap-4">
              <div>
                <dt className="font-pixel text-[9px] text-pixel-red">{t('projects.problem')}</dt>
                <dd className="mt-1 text-sm text-ink/80">{t(selected.problemKey)}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[9px] text-pixel-green">{t('projects.solution')}</dt>
                <dd className="mt-1 text-sm text-ink/80">{t(selected.solutionKey)}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[9px] text-pixel-blue">{t('projects.architecture')}</dt>
                <dd className="mt-1 text-sm text-ink/80">{t(selected.architectureKey)}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[9px] text-pixel-yellow">{t('projects.challenges')}</dt>
                <dd className="mt-1 text-sm text-ink/80">{t(selected.challengesKey)}</dd>
              </div>
              <div>
                <dt className="font-pixel text-[9px] text-pixel-green">{t('projects.results')}</dt>
                <dd className="mt-1 text-sm text-ink/80">{t(selected.resultsKey)}</dd>
              </div>
              <div className="border-l-2 border-pixel-blue pl-3">
                <dt className="font-pixel text-[9px] text-pixel-blue">{t('projects.role')}</dt>
                <dd className="mt-1 text-sm text-ink/80">{t(selected.roleKey)}</dd>
              </div>
            </dl>

            <div className="mt-5">
              <p className="mb-2 font-pixel text-[9px] text-ink/60">{t('projects.technologies')}</p>
              <ul className="flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <li key={tech} className="border-2 border-bg-border px-2 py-1 text-xs text-ink/70">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {selected.github && (
                <PixelButton
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(selected.github, '_blank', 'noopener,noreferrer')}
                >
                  <Github size={14} aria-hidden="true" /> {t('projects.github')}
                </PixelButton>
              )}
              {selected.download && (
                <PixelButton
                  size="sm"
                  onClick={() => window.open(selected.download, '_blank', 'noopener,noreferrer')}
                >
                  <Download size={14} aria-hidden="true" /> {t('projects.download')}
                </PixelButton>
              )}
              {selected.demo && (
                <PixelButton
                  size="sm"
                  onClick={() => window.open(selected.demo, '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink size={14} aria-hidden="true" /> {t('projects.demo')}
                </PixelButton>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
