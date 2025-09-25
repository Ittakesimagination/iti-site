"use client";
import type { ProjectItem } from "@/config/types";

export default function ProjectCard({ item }: { item: ProjectItem }) {
  const Wrapper: React.ElementType = item.href ? "a" : "div";
  const wrapperProps = item.href
    ? { href: item.href, rel: "noreferrer", target: "_blank" }
    : { role: "article" };

  return (
    <Wrapper
      {...wrapperProps}
      className="block rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 
hover:bg-neutral-50 dark:hover:bg-neutral-900 focus-visible:outline-[var(--accent)] 
transition"
      aria-label={item.title}
    >
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
        {item.description}
      </p>
      {item.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li
              key={t}
              className="text-xs rounded-full border px-2 py-0.5 dark:border-neutral-700"
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </Wrapper>
  );
}

