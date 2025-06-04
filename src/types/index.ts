export interface Profile {
  name: string;
  role: string;
  bio: string[];
}

export interface Skill {
  name: string;
  details: string[];
}

export interface SkillCategories {
  technical: string[];
  soft: Skill[];
}

export interface TimelineItem {
  period: string;
  role: string;
  highlights: string[];
  technologies: string[];
  achievements: string;
  company: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  year?: number;
  tech: string[];
}
