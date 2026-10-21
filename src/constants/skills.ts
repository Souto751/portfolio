import type { Skill } from '@/types';

const skill = (
  id: string,
  name: string,
  category: Skill['category'],
  icon: string,
  color: Skill['color'],
  relatedProjectIds: string[],
  /** true = current job (job1); or an explicit list of experience ids. */
  work: boolean | string[] = false,
): Skill => ({
  id,
  name,
  itemNameKey: `skills.items.${id}.itemName`,
  descriptionKey: `skills.items.${id}.description`,
  category,
  icon,
  color,
  relatedProjectIds,
  jobIds: work === true ? ['job1'] : work || [],
});

// Sin porcentajes ni años: cada skill se respalda con los proyectos donde se usó y/o el trabajo.
export const skills: Skill[] = [
  skill('vueBlade', 'Vue.js', 'frontend', 'Swords', 'green', [], true),
  skill('jspScroll', 'JSP / HTML / CSS', 'frontend', 'BookOpen', 'yellow', [], true),
  skill('reactSword', 'React', 'frontend', 'Sword', 'blue', ['automotiveEmpire', 'storiesCreator'], ['job2']),
  skill('tsCrystal', 'TypeScript', 'frontend', 'Gem', 'blue', ['automotiveEmpire', 'tinmangas']),
  skill('nextShield', 'Next.js', 'frontend', 'Shield', 'green', []),
  skill('tailwindGem', 'TailwindCSS', 'frontend', 'Gem', 'green', ['automotiveEmpire']),
  skill('nodeFlame', 'Node.js', 'backend', 'Flame', 'red', ['storiesCreator', 'aetheria', 'automotiveEmpire'], ['job2']),
  skill('javaAxe', 'Java', 'backend', 'Axe', 'red', [], true),
  skill('legacyRune', '4GL', 'backend', 'Landmark', 'yellow', [], true),
  skill('nestHammer', 'NestJS', 'backend', 'Hammer', 'red', ['automotiveEmpire']),
  skill('pythonStaff', 'Python', 'backend', 'Terminal', 'yellow', ['gameManager']),
  skill('expoBoots', 'React Native / Expo', 'mobile', 'Smartphone', 'green', ['tinmangas']),
  skill('postgresRelic', 'PostgreSQL + Prisma', 'database', 'Database', 'yellow', ['automotiveEmpire'], true),
  skill('informixVault', 'Informix', 'database', 'Server', 'blue', [], true),
  skill('dockerBackpack', 'Docker', 'devops', 'Package', 'blue', ['automotiveEmpire'], true),
  skill('awsCloud', 'AWS', 'devops', 'Cloud', 'yellow', [], ['job2']),
  skill('linuxLantern', 'Linux', 'devops', 'Terminal', 'green', [], true),
  skill('gitBranch', 'Git / GitLab', 'devops', 'GitBranch', 'red', ['tinmangas', 'gameManager', 'automotiveEmpire'], true),
  skill('jenkinsGolem', 'Jenkins', 'devops', 'Workflow', 'blue', [], true),
  skill('ciScroll', 'GitHub Actions', 'devops', 'ScrollText', 'yellow', ['tinmangas', 'automotiveEmpire']),
  skill('jiraMap', 'Jira', 'tools', 'KanbanSquare', 'blue', [], true),
  skill('llmOrb', 'LLMs / Ollama', 'ai', 'BrainCircuit', 'red', ['aetheria']),
  skill('aiCompanion', 'ChatGPT / Cursor', 'ai', 'Bot', 'green', [], true),
  skill('automationGear', 'n8n', 'tools', 'Cog', 'blue', [], true),
];
