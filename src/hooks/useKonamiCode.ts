'use client';

import { useEffect, useRef } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

/** Listens for the Konami Code and invokes the callback when the full sequence is entered. */
export function useKonamiCode(onActivated: () => void) {
  const progress = useRef(0);
  const callbackRef = useRef(onActivated);
  callbackRef.current = onActivated;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const expected = KONAMI_SEQUENCE[progress.current];
      const pressed = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (pressed === expected) {
        progress.current += 1;
        if (progress.current === KONAMI_SEQUENCE.length) {
          progress.current = 0;
          callbackRef.current();
        }
      } else {
        progress.current = pressed === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
