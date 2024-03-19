import { StaticImageData } from "next/image";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Tool {
  name: string;
  logo: LogoTheme;
  description: string | React.ReactNode;
  link: string;
  categoryId?: string;
}

export interface LogoTheme {
  logoLight: string;
  logoDark: string;
}

export interface Category {
  name: string;
  icon: string;
}

export interface Education {
  school: string;
  degree: string;
  link: string;
  logo: string;
  start: string;
  end: string;
}

export interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  about: string;
  description: string[];
}

export interface Reference {
  name: string;
  link: string;
  role: string;
  description: string[];
  picture: StaticImageData;
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl?: string;
  contact: {
    email: string;
    tel: string;
    social: SocialLink[];
  };
  values: string[];
  tool_categories: {
    [key: string]: Category;
  };
  tools: Tool[];
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  references: Reference[];
}
