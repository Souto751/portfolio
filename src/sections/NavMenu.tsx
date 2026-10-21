'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { navItems } from '@/constants/nav';
import { useActiveSection } from '@/hooks/useActiveSection';
import { LanguageToggle } from '@/components/LanguageToggle';
import { MusicToggle } from '@/components/MusicToggle';
import { cn } from '@/utils/cn';
import type { SectionId } from '@/types';

const sectionIds: SectionId[] = ['home', ...navItems.map((item) => item.id)];

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/** Sticky RPG-style main menu / nav bar with pixel hover states and mobile drawer. */
interface NavMenuProps {
  music: { enabled: boolean; toggle: () => void; volume: number; setVolume: (volume: number) => void };
}

export function NavMenu({ music }: NavMenuProps) {
  const { t } = useLanguage();
  const activeSection = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-bg-border bg-bg/90 backdrop-blur">
      <nav aria-label={t('nav.menuTitle')} className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={() => scrollToSection('home')}
          className="font-pixel text-[10px] text-pixel-green sm:text-xs"
          aria-label={t('nav.home')}
        >
          AS_
        </button>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={cn(
                  'border-2 border-transparent px-3 py-2 font-pixel text-[9px] uppercase tracking-wide text-ink/70 transition-colors',
                  'hover:border-pixel-green hover:text-pixel-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-pixel-yellow',
                  activeSection === item.id && 'border-pixel-green text-pixel-green',
                )}
              >
                {t(item.labelKey)}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 xl:flex">
          <Link
            href="/cv"
            className="flex items-center gap-2 border-2 border-pixel-yellow px-3 py-2 font-pixel text-[9px] uppercase text-pixel-yellow hover:bg-pixel-yellow hover:text-bg"
          >
            <FileText size={12} aria-hidden="true" /> {t('nav.quickCv')}
          </Link>
          <MusicToggle compact enabled={music.enabled} onToggle={music.toggle} volume={music.volume} onVolumeChange={music.setVolume} />
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <MusicToggle compact enabled={music.enabled} onToggle={music.toggle} volume={music.volume} onVolumeChange={music.setVolume} />
          <button
            className="xl:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="text-pixel-green" /> : <Menu className="text-pixel-green" />}
          </button>
        </div>
      </nav>

      {/* CSS-only collapse — see ExperienceSection for why this avoids the animation library. */}
      <div
        className={cn(
          'grid transition-all duration-300 ease-out xl:hidden',
          mobileOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden border-t-2 border-bg-border bg-bg">
          <ul className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    'block w-full border-2 border-transparent px-3 py-3 text-left font-pixel text-[10px] uppercase text-ink/70',
                    activeSection === item.id && 'border-pixel-green text-pixel-green',
                  )}
                >
                  {t(item.labelKey)}
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/cv"
                className="flex w-full items-center gap-2 border-2 border-pixel-yellow px-3 py-3 font-pixel text-[10px] uppercase text-pixel-yellow"
              >
                <FileText size={12} aria-hidden="true" /> {t('nav.quickCv')}
              </Link>
            </li>
            <li className="mt-2">
              <LanguageToggle className="w-full justify-center" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
