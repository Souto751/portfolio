'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Bot,
  Server,
  GitBranch,
  KanbanSquare,
  Workflow,
  Axe,
  BookOpen,
  BrainCircuit,
  Cog,
  Landmark,
  Swords,
  Database,
  Flame,
  Gem,
  Hammer,
  Package,
  ScrollText,
  Shield,
  Smartphone,
  Sparkles,
  Sword,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { skills } from '@/constants/skills';
import { projects } from '@/constants/projects';
import { SectionHeading } from '@/components/SectionHeading';
import { PixelPanel } from '@/components/PixelPanel';
import { Modal } from '@/components/Modal';
import { cn } from '@/utils/cn';
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants';
import type { Skill, SkillCategory } from '@/types';

const iconMap: Record<string, typeof Sword> = {
  Sword, Swords, Shield, Gem, Flame, Database, Package, Hammer, Terminal, Smartphone, ScrollText, BrainCircuit,
  BookOpen, Axe, Landmark, Cog, GitBranch, Workflow, KanbanSquare, Server, Bot, Cloud,
};

const colorText = {
  green: 'text-pixel-green border-pixel-green',
  blue: 'text-pixel-blue border-pixel-blue',
  red: 'text-pixel-red border-pixel-red',
  yellow: 'text-pixel-yellow border-pixel-yellow',
};

const categories: SkillCategory[] = ['frontend', 'backend', 'mobile', 'database', 'devops', 'tools', 'ai'];

function countLabel(count: number, t: (path: string) => string) {
  return `${count} ${count === 1 ? t('skills.projectCount') : t('skills.projectsCount')}`;
}

export function SkillsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [selected, setSelected] = useState<Skill | null>(null);

  // Skills stay mounted at all times and are only hidden via CSS when filtered out.
  // (Filtering the array itself would unmount/remount cards, and re-entering cards
  // never replayed their reveal animation reliably — this keeps every card mounted once.)
  const isVisible = (skill: Skill) => activeCategory === 'all' || skill.category === activeCategory;

  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative border-t-2 border-bg-border bg-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t('skills.eyebrow')} title={t('skills.title')} subtitle={t('skills.subtitle')} color="blue" />
        <h3 id="skills-heading" className="sr-only">
          {t('nav.skills')}
        </h3>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label={t('skills.title')}>
          <button
            onClick={() => setActiveCategory('all')}
            className={cn(
              'border-2 px-3 py-2 font-pixel text-[9px] uppercase text-ink/70',
              activeCategory === 'all' ? 'border-pixel-green text-pixel-green' : 'border-bg-border hover:text-ink',
            )}
          >
            {t('skills.filterAll')}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'border-2 px-3 py-2 font-pixel text-[9px] uppercase text-ink/70',
                activeCategory === category ? 'border-pixel-green text-pixel-green' : 'border-bg-border hover:text-ink',
              )}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        <motion.ul
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? Sparkles;
            return (
              <motion.li key={skill.id} variants={fadeUp} className={cn(!isVisible(skill) && 'hidden')}>
                <button
                  onClick={() => setSelected(skill)}
                  className="group w-full text-left"
                  aria-haspopup="dialog"
                >
                  <PixelPanel
                    glow={skill.color}
                    className="flex h-full flex-col items-center gap-2 p-4 transition-transform duration-150 group-hover:-translate-y-1 group-hover:scale-[1.03]"
                  >
                    <span
                      className={cn(
                        'flex h-12 w-12 items-center justify-center border-2 bg-bg transition-transform duration-200 group-hover:animate-float',
                        colorText[skill.color],
                      )}
                    >
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <p className="text-center font-pixel text-[9px] leading-snug text-ink">{t(skill.itemNameKey)}</p>
                    <p className="text-center text-[11px] text-ink/50">{skill.name}</p>
                    <span className={cn('text-center font-pixel text-[8px] leading-relaxed', colorText[skill.color].split(' ')[0])}>
                      {[
                        skill.jobIds.length > 0 ? t('skills.atWork') : null,
                        skill.relatedProjectIds.length > 0 ? countLabel(skill.relatedProjectIds.length, t) : null,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  </PixelPanel>
                </button>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} labelledBy="skill-modal-title" closeLabel={t('projects.close')}>
        {selected && (
          <div>
            <p className={cn('font-pixel text-[10px]', colorText[selected.color].split(' ')[0])}>
              {t(`skills.categories.${selected.category}`)}
            </p>
            <h3 id="skill-modal-title" className="mt-2 font-pixel text-sm text-ink">
              {t(selected.itemNameKey)}
            </h3>
            <p className="text-sm text-ink/50">{selected.name}</p>

            <p className="mt-4 text-sm leading-relaxed text-ink/80">{t(selected.descriptionKey)}</p>

            {(selected.relatedProjectIds.length > 0 || selected.jobIds.length > 0) && (
              <div className="mt-5">
                <p className="mb-2 font-pixel text-[9px] text-pixel-yellow">{t('skills.usedIn')}</p>
                <ul className="flex flex-wrap gap-2">
                  {selected.jobIds.map((jobId) => (
                    <li key={jobId} className="border-2 border-pixel-green/60 px-2 py-1 text-xs text-pixel-green">
                      {t(`experience.items.${jobId}.company`)}
                    </li>
                  ))}
                  {selected.relatedProjectIds.map((projectId) => {
                    const project = projects.find((item) => item.id === projectId);
                    if (!project) return null;
                    return (
                      <li key={projectId} className="border-2 border-bg-border px-2 py-1 text-xs text-ink/70">
                        {t(project.nameKey)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
