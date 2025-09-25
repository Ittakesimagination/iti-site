"use client";
import React from "react";
import { type AboutConfig } from "@/config/types";

interface Props {
  config: AboutConfig; // heading: string; body: string
}

export default function About({ config }: Props) {
  return (
    <section id="about" className="section">
      <h2 className="text-2xl font-bold">{config.heading}</h2>
      <p className="mt-4 leading-relaxed text-neutral-800 dark:text-neutral-200">
        {config.body}
      </p>
    </section>
  );
}

