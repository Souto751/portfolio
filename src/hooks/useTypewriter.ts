'use client';

import { useEffect, useRef, useState } from 'react';

interface UseTypewriterOptions {
  speedMs?: number;
  startDelayMs?: number;
  enabled?: boolean;
}

/** Reveals `text` one character at a time, resetting whenever `text` changes. */
export function useTypewriter(text: string, { speedMs = 22, startDelayMs = 0, enabled = true }: UseTypewriterOptions = {}) {
  const [displayed, setDisplayed] = useState(enabled ? '' : text);
  const [isDone, setIsDone] = useState(!enabled);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      setIsDone(true);
      return;
    }

    indexRef.current = 0;
    setDisplayed('');
    setIsDone(false);

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setIsDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs, enabled]);

  return { displayed, isDone };
}
