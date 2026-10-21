'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const ENABLED_KEY = 'portfolio-music-enabled';
const VOLUME_KEY = 'portfolio-music-volume';
const DEFAULT_VOLUME = 0.06;

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* Storage blocked (private mode, etc.): the preference just won't persist. */
  }
}

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
  // Latest "enabled" value, read by the deferred autoplay retry so it never starts music the user turned off.
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  useEffect(() => {
    const storedEnabled = readStorage(ENABLED_KEY);
    const storedVolume = readStorage(VOLUME_KEY);
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
    let cancelled = false;

    // Browsers block autoplay until the user has interacted with the page at least once.
    // Retry on the first click/keypress anywhere (e.g. "START GAME") — but only if music is
    // still enabled at that moment, so a first click on "music off" can't start it.
    const retryPlay = () => {
      removeRetry();
      if (cancelled || !enabledRef.current) return;
      audio.play().catch(() => {
        /* Still blocked; the music control remains available regardless. */
      });
    };
    const removeRetry = () => {
      window.removeEventListener('pointerup', retryPlay);
      window.removeEventListener('keyup', retryPlay);
    };

    audio.play().catch(() => {
      if (cancelled) return;
      // If that same click turns music off, the effect re-runs with enabled=false and pauses it.
      window.addEventListener('pointerup', retryPlay);
      window.addEventListener('keyup', retryPlay);
    });

    return () => {
      cancelled = true;
      removeRetry();
    };
  }, [enabled, hydrated]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      writeStorage(ENABLED_KEY, String(next));
      return next;
    });
  }, []);

  const setVolume = useCallback((next: number) => {
    const clamped = Math.min(1, Math.max(0, next));
    setVolumeState(clamped);
    writeStorage(VOLUME_KEY, String(clamped));
  }, []);

  return { enabled, toggle, volume, setVolume, hydrated };
}
