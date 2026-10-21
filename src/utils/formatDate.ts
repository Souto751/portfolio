import type { Locale } from '@/types';

/** Formats a "YYYY-MM" string (or "present") into a short localized label. */
export function formatMonthYear(value: string, locale: Locale, presentLabel: string): string {
  if (value === 'present') return presentLabel;
  const [year, month] = value.split('-').map(Number);
  if (!year || !month) return value;
  const date = new Date(year, month - 1);
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-AR' : 'en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}
