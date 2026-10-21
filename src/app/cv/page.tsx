import type { Metadata } from 'next';
import { QuickCv } from '@/components/QuickCv';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Quick, printable one-page CV of Agustin Souto — Full Stack Developer.',
  alternates: { canonical: '/cv' },
};

export default function CvPage() {
  return <QuickCv />;
}
