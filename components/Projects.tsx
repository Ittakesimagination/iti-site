import type { ProjectsConfig } from "@/config/types";
import ProjectCard from "./ProjectCard";

export default function Projects({ config }: { config: ProjectsConfig }) {
  return (
    <section id="projects" className="section">
      <h2 className="text-2xl font-bold">{config.title}</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.items.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
