// config/types.ts

export interface MetaConfig {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}

export interface HeroConfig {
  heading: string;
  subheading: string;
  cta?: string;
  ctaText?: string;
  kicker?: string;
}

export interface AboutConfig {
  heading: string;
  body: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface ProjectsConfig {
  heading: string;
  items: ProjectItem[];
}

export interface ContactConfig {
  heading: string;          // required
  subheading: string;
  description: string;    // required
  successMessage: string;
  errorMessage: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface ThemeConfig {
  brand: string;
  accent: string;
}

export interface ProjectItem {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  href?: string; // ← optional, so components won't crash if absent
}

export interface SiteConfig {
  meta: MetaConfig;
  hero: HeroConfig;
  about: AboutConfig;
  projects: ProjectsConfig;
  contact: ContactConfig;
  socials: SocialLink[];
  theme: ThemeConfig;
}

