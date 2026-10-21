import type { EducationItem } from '@/types';

// Versiones -web: DNI, fecha de nacimiento y firma propia tapados. No publicar los originales.
export const educationItems: EducationItem[] = [
  {
    id: 'tecnicatura',
    degreeKey: 'education.items.tecnicatura.degree',
    institutionKey: 'education.items.tecnicatura.institution',
    locationKey: 'education.items.tecnicatura.location',
    statusKey: 'education.items.tecnicatura.status',
    startDate: '2020-03',
    endDate: '2022-12',
    average: '8.91',
    languages: ['C', 'C++', 'HTML', 'CSS', 'JavaScript'],
    images: ['/assets/certificates/titulo-tecnicatura-1-web.jpg', '/assets/certificates/titulo-tecnicatura-2-web.jpg'],
  },
];
