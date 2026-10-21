import type { Project } from '@/types';

const GITHUB = 'https://github.com/Souto751';

const keys = (id: string) => ({
  nameKey: `projects.items.${id}.name`,
  descriptionKey: `projects.items.${id}.description`,
  problemKey: `projects.items.${id}.problem`,
  solutionKey: `projects.items.${id}.solution`,
  architectureKey: `projects.items.${id}.architecture`,
  challengesKey: `projects.items.${id}.challenges`,
  resultsKey: `projects.items.${id}.results`,
  roleKey: `projects.items.${id}.role`,
  statusKey: `projects.items.${id}.status`,
});

// TODO(agustin): completar `github` cuando cada repo sea público y `demo` cuando haya una demo online.
// Si un campo queda vacío, su botón no se muestra.
export const projects: Project[] = [
  {
    id: 'automotiveEmpire',
    ...keys('automotiveEmpire'),
    image: '/assets/images/projects/automotive-empire.svg',
    imageAlt: 'Automotive Empire — preview of the idle game workshop',
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'PixiJS', 'Docker'],
    featured: true,
  },
  {
    id: 'storiesCreator',
    ...keys('storiesCreator'),
    image: '/assets/images/projects/stories-creator.svg',
    imageAlt: 'Stories Creator — 9:16 story editor preview',
    technologies: ['Node.js', 'SQLite', 'JavaScript', 'Canvas', 'TOTP 2FA'],
    featured: true,
  },
  {
    id: 'aetheria',
    ...keys('aetheria'),
    image: '/assets/images/projects/aetheria.svg',
    imageAlt: 'Aetheria Game Master — block world with an AI chat bubble',
    technologies: ['Node.js', 'Mineflayer', 'Ollama', 'LLM tool calling', 'Discord.js'],
  },
  {
    id: 'tinmangas',
    ...keys('tinmangas'),
    image: '/assets/images/projects/tinmangas.svg',
    imageAlt: 'TinMangas — manga reader on an Android phone',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Kotlin', 'GitHub Actions'],
  },
  {
    id: 'gameManager',
    ...keys('gameManager'),
    image: '/assets/images/projects/game-manager.svg',
    imageAlt: 'Game Manager — unified game library grid',
    technologies: ['Python', 'CustomTkinter', 'PyInstaller', 'Windows'],
    github: `${GITHUB}/game-manager`,
  },
];
