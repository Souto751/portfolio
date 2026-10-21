'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import dictionaries, { type Dictionary } from '@/constants/content';
import { getNestedValue } from '@/utils/getNestedValue';
import type { Locale } from '@/types';

interface LanguageContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (path: string) => string;
  tList: (path: string) => string[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-locale';
const DEFAULT_LOCALE: Locale = 'en';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') {
      setLocaleState(stored);
      return;
    }
    const browserLang = window.navigator.language?.toLowerCase();
    if (browserLang?.startsWith('es')) setLocaleState('es');
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'es' : 'en');
  }, [locale, setLocale]);

  const dictionary = dictionaries[locale];

  const t = useCallback(
    (path: string) => {
      const value = getNestedValue(dictionary, path);
      return typeof value === 'string' ? value : path;
    },
    [dictionary],
  );

  const tList = useCallback(
    (path: string) => {
      const value = getNestedValue(dictionary, path);
      return Array.isArray(value) ? (value as string[]) : [];
    },
    [dictionary],
  );

  const value = useMemo(
    () => ({ locale, dictionary, setLocale, toggleLocale, t, tList }),
    [locale, dictionary, setLocale, toggleLocale, t, tList],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
