'use client';

import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  LandingScreen,
  NavMenu,
  HomeHero,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  AiWorkflowSection,
  ResumeSection,
  ContactSection,
  FooterSection,
} from '@/sections';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { useMusicPreference } from '@/hooks/useMusicPreference';
import { KonamiEasterEgg } from './KonamiEasterEgg';

/**
 * Client-side orchestrator: shows the Landing splash as a dismissible overlay above the
 * real site (which is always mounted, so search engines / ATS parsers see full content
 * regardless of the splash), and wires up the Konami Code easter egg.
 *
 * Owns the music preference hook (rather than LandingScreen) so the underlying <audio>
 * element keeps playing for the whole session, even after the Landing screen unmounts.
 */
export function GameExperience() {
  const [started, setStarted] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const music = useMusicPreference();

  const handleStart = useCallback(() => {
    // The real content sits scrollable behind the splash the whole time, so make sure
    // we land at the top (Home) instead of wherever the page happened to be scrolled to.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setStarted(true);
  }, []);
  useKonamiCode(() => setSecretOpen(true));

  return (
    <>
      <AnimatePresence>
        {!started && (
          <LandingScreen
            key="landing"
            onStart={handleStart}
            musicEnabled={music.enabled}
            onMusicToggle={music.toggle}
            musicVolume={music.volume}
            onMusicVolumeChange={music.setVolume}
          />
        )}
      </AnimatePresence>

      {/* Keep the sticky header out of the DOM during the splash — it sits at a higher
          z-index than the Landing screen and was covering the character/avatar. */}
      {started && <NavMenu music={music} />}

      <main id="main-content">
        <HomeHero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <AiWorkflowSection />
        <ResumeSection />
        <ContactSection />
      </main>

      <FooterSection />

      <KonamiEasterEgg open={secretOpen} onClose={() => setSecretOpen(false)} />
    </>
  );
}
