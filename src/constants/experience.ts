import type { ExperienceItem } from '@/types';

export const experienceItems: ExperienceItem[] = [
  {
    id: 'job1',
    companyKey: 'experience.items.job1.company',
    roleKey: 'experience.items.job1.role',
    locationKey: 'experience.items.job1.location',
    startDate: '2022-02',
    endDate: 'present',
    achievementsKey: 'experience.items.job1.achievements',
    technologies: ['JavaScript', 'Vue.js', 'JSP', 'HTML / CSS', 'Java', '4GL', 'Informix', 'PostgreSQL', 'Docker', 'Linux', 'Git / GitLab', 'Jenkins', 'Jira', 'ChatGPT', 'Cursor', 'n8n'],
  },
  {
    id: 'job2',
    companyKey: 'experience.items.job2.company',
    roleKey: 'experience.items.job2.role',
    locationKey: 'experience.items.job2.location',
    startDate: '2021-05',
    endDate: '2021-07',
    achievementsKey: 'experience.items.job2.achievements',
    technologies: ['JavaScript', 'React', 'Node.js', 'AWS'],
  },
];
