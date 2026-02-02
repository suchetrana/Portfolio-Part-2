import { NavItem, Project, Skill, SocialLink, AboutText, SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: 'Suchet Rana',
  title: 'Suchet Rana | JAVA DEVELOPER | MERN STACK',
  description: 'Aspiring Java Developer and MERN Stack Developer passionate about building modern web applications.',
  url: 'https://suchetrana.github.io',
  email: 'suchetrana27@gmail.com',
  location: 'India',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/suchetrana', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/suchetrana', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/Suchet_cpp', icon: 'twitter' },
  { name: 'Email', url: 'mailto:hello@suchet.dev', icon: 'mail' },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: 'nodejs', category: 'backend' },
  { name: 'Express.js', icon: 'express', category: 'backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'backend' },
  { name: 'Redis', icon: 'redis', category: 'backend' },
  { name: 'Socket.IO', icon: 'socketio', category: 'backend' },
  { name: 'BullMQ', icon: 'bull', category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', category: 'backend' },
  
  // Tools & DevOps
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'Docker', icon: 'docker', category: 'tools' },
  { name: 'Nginx', icon: 'nginx', category: 'tools' },
  { name: 'AWS', icon: 'aws', category: 'tools' },
  { name: 'Linux', icon: 'linux', category: 'tools' },
  { name: 'Jest', icon: 'jest', category: 'tools' },
  
  // Other
  { name: 'Java', icon: 'java', category: 'other' },
  { name: 'C++', icon: 'cpp', category: 'other' },
  { name: 'Python', icon: 'python', category: 'other' },
  { name: 'System Design', icon: 'system', category: 'other' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Miles & Smiles V1',
    description: 'Full-stack travel platform featuring real-time updates via Socket.IO, Redis caching for active sessions, and robust job processing with Bull.',
    image: '/images/miles-smiles.png',
    technologies: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.IO', 'Docker'],
    icon: 'search',
    iconColor: 'violet',
    category: 'web',
    githubUrl: 'https://github.com/udaylol/Miles-and-Smiles-V1',
    featured: true,
  },
];

export const ROLES = [
  "Java Developer",
  "MERN Stack Developer"
];

export const ABOUT_TEXT: AboutText = {
  intro: "Hello, I'm",
  headline: "Java Developer & MERN Stack Developer",
  description: "Fresher Java Developer and MERN Stack Developer passionate about crafting scalable web applications and clean code.",
  bio: [
    "A passionate developer eager to build innovative solutions using Java and the MERN stack.",
  ],
  resumeUrl: '/resume.pdf',
  resumeDriveUrl: 'https://drive.google.com/file/d/1zKLWthBJ-l1mKL25L6Yqm5l04SZNVkI-/view?usp=drive_link',
  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'Kubernetes',
    'AWS',
    'Linux',
    'System Design',
  ],
  education: [
    { 
      school: 'Chitkara University', 
      degree: "Bachelor's of Engineering in Computer Science (B.E.)", 
      year: '2023 - 2027',
      logo: '/images/chitkara-logo.png'
    },
  ],
  certifications: [
    'Cloud Data Engineering',
    'Introductory C Programming Specialization',
  ],
};
