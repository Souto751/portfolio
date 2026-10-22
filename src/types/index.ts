export type Locale = 'en' | 'es';

export interface NavItem {
  id: SectionId;
  labelKey: string;
}

export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'ai'
  | 'resume'
  | 'contact';

export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'tools' | 'ai';

export interface Skill {
  id: string;
  name: string;
  itemNameKey: string; // "React Sword" style flavor name (i18n key)
  category: SkillCategory;
  icon: string; // lucide icon name
  descriptionKey: string;
  relatedProjectIds: string[];
  /** Experience item ids (job1, job2…) where this skill was used. */
  jobIds: string[];
  color: 'green' | 'blue' | 'red' | 'yellow';
}

export interface ExperienceItem {
  id: string;
  companyKey: string;
  roleKey: string;
  startDate: string;
  endDate: string | 'present';
  achievementsKey: string; // key to array
  technologies: string[];
  locationKey: string;
}

export interface Project {
  id: string;
  nameKey: string;
  imageAlt: string;
  image: string;
  /** Real screenshots under /public/assets/images/projects/<project>/ — the first one is the card cover. */
  screenshots?: string[];
  descriptionKey: string;
  problemKey: string;
  solutionKey: string;
  architectureKey: string;
  challengesKey: string;
  resultsKey: string;
  /** What I did vs. what the AI did — shown for transparency. */
  roleKey: string;
  statusKey: string;
  technologies: string[];
  github?: string;
  demo?: string;
  /** Download page for desktop apps (e.g. the latest GitHub release). */
  download?: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  nameKey: string;
  issuerKey: string;
  descriptionKey: string;
  /** "YYYY-MM", optional until the date is known. */
  date?: string;
  /** Scans of the certificate under /public, one per page (shown in a modal). */
  images?: string[];
  verifyUrl?: string;
}

export interface EducationItem {
  id: string;
  degreeKey: string;
  institutionKey: string;
  locationKey: string;
  statusKey: string;
  startDate: string;
  endDate: string | 'present';
  average?: string;
  languages: string[];
  /** Scans of the diploma under /public, one per page (shown in a modal). */
  images?: string[];
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'email';
  label: string;
  href: string;
  icon: string;
}
