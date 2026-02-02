export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  icon?: string;
  iconColor?: string;
  category?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
  logo: string;
}

export interface AboutText {
  intro: string;
  headline: string;
  description: string;
  bio: string[];
  resumeUrl: string;
  resumeDriveUrl?: string;
  skills: string[];
  education: Education[];
  certifications: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  location: string;
}
