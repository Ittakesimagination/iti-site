"use client";
import React from "react";
import type { ProjectsConfig } from "@/config/types";
import ProjectCard from "./ProjectCard";

interface Props {
  config: ProjectsConfig; // { heading: string; items: ProjectItem[] }
}

export default function Projects({ config }: Props) {
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl font-bold">{config.heading}</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.items.map((item, i) => (
          <ProjectCard key={item.id ?? `${item.title}-${i}`} item={item} />
        ))}
      </div>
    </section>
  );
}

