import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  // Inicio se alcanza con el logo "AS_" y el CV con el botón "CV rápido", así el menú entra en una línea.
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'experience', labelKey: 'nav.experience' },
  { id: 'education', labelKey: 'nav.education' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'ai', labelKey: 'nav.ai' },
  { id: 'contact', labelKey: 'nav.contact' },
];
