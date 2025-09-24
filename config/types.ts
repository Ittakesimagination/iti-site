export interface SiteMeta {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  twitter: string;
}
export interface SocialLink {
  label: string;
  href: string;
  ariaLabel?: string;
}
export interface HeroConfig {
  kicker: string;
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
}
export interface AboutConfig {
  title: string;
  body: string[];
}
export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  href: string;
  tags: string[];
  image?: string;
}
export interface ProjectsConfig {
  title: string;
  items: ProjectItem[];
}
export interface ContactConfig {
  title: string;
  subtitle: string;
  successMessage: string;
  errorMessage: string;
}
export interface ThemeTokens {
  brand: string;
  accent: string;
}
export interface SiteConfig {
  meta: SiteMeta;
  socials: SocialLink[];
  hero: HeroConfig;
  about: AboutConfig;
  projects: ProjectsConfig;
  contact: ContactConfig;
  theme: ThemeTokens;
}
