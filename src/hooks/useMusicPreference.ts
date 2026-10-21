'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const ENABLED_KEY = 'portfolio-music-enabled';
const VOLUME_KEY = 'portfolio-music-volume';
const DEFAULT_VOLUME = 0.06;

/**
 * Manages background music: on by default for first-time visitors, adjustable volume,
 * both persisted across visits. Intended to be called once from a component that stays
 * mounted for the whole session (the audio element lives for as long as this hook does).
 */
export function useMusicPreference() {
  const [enabled, setEnabled] = useState(true);
  const [volume, setVolumeState] = useState(DEFAULT_VOLUME);
  const [hydrated, setHydrated] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const storedEnabled = window.localStorage.getItem(ENABLED_KEY);
    const storedVolume = window.localStorage.getItem(VOLUME_KEY);
    // No stored preference yet (first visit) -> default to on. Otherwise respect the user's choice.
    setEnabled(storedEnabled === null ? true : storedEnabled === 'true');
    if (storedVolume !== null) {
      const parsed = Number(storedVolume);
      if (!Number.isNaN(parsed)) setVolumeState(Math.min(1, Math.max(0, parsed)));
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/audio/theme-adventure.mp3');
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!hydrated || !audioRef.current) return;

    if (!enabled) {
      audioRef.current.pause();
      return;
    }

    const audio = audioRef.current;
    audio.play().catch(() => {
      // Browsers block autoplay until the user has interacted with the page at least once.
      // Retry on the first click/keypress anywhere — e.g. the "START GAME" button.
      const retryPlay = () => {
        audio.play().catch(() => {
          /* Still blocked; the music control remains available regardless. */
        });
      };
      window.addEventListener('pointerdown', retryPlay, { once: true });
      window.addEventListener('keydown', retryPlay, { once: true });
      return () => {
        window.removeEventListener('pointerdown', retryPlay);
        window.removeEventListener('keydown', retryPlay);
      };
    });
  }, [enabled, hydrated]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      window.localStorage.setItem(ENABLED_KEY, String(next));
      return next;
    });
  }, []);

  const setVolume = useCallback((next: number) => {
    const clamped = Math.min(1, Math.max(0, next));
    setVolumeState(clamped);
    window.localStorage.setItem(VOLUME_KEY, String(clamped));
  }, []);

  return { enabled, toggle, volume, setVolume, hydrated };
}
