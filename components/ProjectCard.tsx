import type { ProjectItem } from "@/config/types";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <a
      href={item.href}
      className="block rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-[var(--accent)]"
      aria-label={item.title}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-neutral-700 dark:text-neutral-300">{item.summary}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li
              key={t}
              className="rounded bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs text-neutral-700 dark:text-neutral-300"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
