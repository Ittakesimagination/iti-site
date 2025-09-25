"use client";
import React from "react";
import { motion } from "framer-motion";
import { type HeroConfig } from "@/config/types";

interface Props {
  config: HeroConfig; // heading, subheading, cta (kicker optional)
  socials?: { name: string; href: string }[];
}

export default function Hero({ config, socials = [] }: Props) {
  const ctaLabel = config.cta ?? config.ctaText ?? "Watch Clips"; // tolerant to either key
  const { heading, subheading } = config;

  return (
    <section id="hero" className="section pt-8 sm:pt-14">
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-3xl">
          {/* Optional kicker — only render if provided in future */}
          {"kicker" in config && (config as any).kicker ? (
            <p className="kicker">{(config as any).kicker}</p>
          ) : null}

          <motion.h1
            className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {heading}
          </motion.h1>

          <p className="mt-3 text-lg text-neutral-700 dark:text-neutral-300">
            {subheading}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-amber-400 px-4 py-2 font-semibold text-black shadow 
hover:translate-y-px transition"
            >
              {ctaLabel}
            </a>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-neutral-300 px-3 py-2 text-sm 
hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right rail spacer so banner doesn’t overlap hero */}
        <div className="hidden md:block w-[220px]" aria-hidden="true" />
      </div>
    </section>
  );
}

