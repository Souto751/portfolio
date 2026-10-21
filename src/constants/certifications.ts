import type { Certification } from '@/types';

const keys = (id: string) => ({
  nameKey: `certifications.items.${id}.name`,
  issuerKey: `certifications.items.${id}.issuer`,
  descriptionKey: `certifications.items.${id}.description`,
});

// Para sumar un certificado: agregá una entrada acá y sus textos en content/es.ts y content/en.ts.
export const certifications: Certification[] = [
  {
    id: 'mejoraContinua',
    ...keys('mejoraContinua'),
    date: '2023-11',
    images: [
      '/assets/certificates/mejora-continua-hospital.jpg',
      '/assets/certificates/mejora-continua-sameco.jpg',
    ],
  },
  { id: 'alkemy', ...keys('alkemy'), date: '2021-07', images: ['/assets/certificates/alkemy.jpg'] },
];
