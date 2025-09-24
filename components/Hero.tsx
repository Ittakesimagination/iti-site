"use client";
import { motion } from "framer-motion";
import type { HeroConfig, SocialLink } from "@/config/types";
import ThemeToggle from "./ThemeToggle";

export default function Hero({ config, socials }: { config: HeroConfig; socials: SocialLink[] }) {
  return (
    <header className="section pt-24 pb-20">
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-3xl">
          <p className="kicker">{config.kicker}</p>
          <motion.h1
            className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {config.headline}
          </motion.h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">{config.subhead}</p>
          <div className="mt-8 flex items-center gap-3">
            <a className="btn-primary" href={config.ctaHref} aria-label={config.ctaLabel}>
              {config.ctaLabel}
            </a>
            <nav aria-label="Social Links" className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="underline-offset-2 hover:underline"
                  aria-label={s.ariaLabel ?? s.label}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
