import en from './en';
import es from './es';
import type { Locale } from '@/types';

export const dictionaries: Record<Locale, typeof en> = { en, es };

export type Dictionary = typeof en;

export default dictionaries;
