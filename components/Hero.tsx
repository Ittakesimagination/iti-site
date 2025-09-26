import React from "react";

/**
 * Accept multiple shapes so it works with config/types without fighting TS.
 * We normalize everything inside the component.
 */

type StatInput = {
  label?: string;   // component-native
  name?: string;    // config/types may use "name"
  value: string | number;
};

type HeroConfigInput = {
  // your config might use "title" or "heading"
  title?: string;
  heading?: string;

  subtitle?: string;

  // primary CTA variants
  ctaText?: string;
  ctaHref?: string;
  // sometimes teams use "cta" objects; add if you need later
  // cta?: { text?: string; href?: string };

  stats?: StatInput[];
};

type SocialLinkInput = {
  label?: string;  // component-native
  name?: string;   // config/types often uses "name"
  href?: string;   // component-native
  url?: string;    // config/types often uses "url"
  // icon?: React.ReactNode;
};

export interface HeroProps {
  /** Direct props (optional if you pass `config`) */
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  stats?: Array<{ label: string; value: string | number }>;

  /** Looser config accepted from config/types (e.g., siteConfig.hero) */
  config?: HeroConfigInput;

  /** Looser socials accepted from config/types (e.g., siteConfig.socials) */
  socials?: SocialLinkInput[];

  children?: React.ReactNode;
}

function normalizeStat(s: StatInput): { label: string; value: string | number } {
  return {
    label: (s.label ?? s.name ?? "").toString(),
    value: s.value,
  };
}

function normalizeSocial(s: SocialLinkInput): { label: string; href: string } {
  return {
    label: (s.label ?? s.name ?? "").toString(),
    href: (s.href ?? s.url ?? "#").toString(),
  };
}

export default function Hero({
  config,
  title,
  subtitle,
  ctaText,
  ctaHref,
  onCtaClick,
  stats,
  socials,
  children,
}: HeroProps) {
  // Normalize config + props: direct props override config
  const mergedTitle = title ?? config?.title ?? config?.heading ?? "";
  const mergedSubtitle = subtitle ?? config?.subtitle;

  const mergedCtaText = ctaText ?? config?.ctaText;
  const mergedCtaHref = ctaHref ?? config?.ctaHref;

  const mergedStats = (stats ?? config?.stats)?.map(normalizeStat);
  const normalizedSocials = socials?.map(normalizeSocial);

  return (
    <section>
      <h1>{mergedTitle}</h1>

      {mergedSubtitle && <p>{mergedSubtitle}</p>}

      {mergedCtaText && (
        <a href={mergedCtaHref} onClick={onCtaClick}>
          {mergedCtaText}
        </a>
      )}

      {mergedStats?.length ? (
        <div>
          {mergedStats.map((s) => (
            <div key={`${s.label}-${s.value}`}>
              <strong>{s.value}</strong> <span>{s.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      {normalizedSocials?.length ? (
        <nav>
          {normalizedSocials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
              {s.label || s.href}
            </a>
          ))}
        </nav>
      ) : null}

      {children}
    </section>
  );
}

