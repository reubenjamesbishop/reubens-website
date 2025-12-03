export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  gpa?: string;
  description: string;
}

export interface Certificate {
  id: string;
  name: string;
  description: string;
}

export interface TechnologyCategory {
  category: string;
  technologies: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

