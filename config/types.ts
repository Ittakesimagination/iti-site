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
  cta: string;
}

export interface AboutConfig {
  heading: string;
  body: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactConfig {
  heading: string;
  subheading: string;
  description: string;
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

export interface SiteConfig {
  meta: MetaConfig;
  hero: HeroConfig;
  about: AboutConfig;
  projects: Project[];
  contact: ContactConfig;
  socials: SocialLink[];
  theme: ThemeConfig;
}

