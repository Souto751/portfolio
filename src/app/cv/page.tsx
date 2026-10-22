import type { Metadata } from 'next';
import { QuickCv } from '@/components/QuickCv';

export const metadata: Metadata = {
  title: 'CV',
  description:
    'One-page CV of Agustin Souto, Full Stack Developer from Mar del Plata, Argentina: experience, education, skills and projects. CV de una pagina, imprimible.',
  alternates: { canonical: '/cv' },
};

export default function CvPage() {
  return <QuickCv />;
}
