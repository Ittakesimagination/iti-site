import type { AboutConfig } from "@/config/types";

export default function About({ config }: { config: AboutConfig }) {
  return (
    <section id="about" className="section">
      <h2 className="text-2xl font-bold">{config.title}</h2>
      <div className="mt-4 space-y-3 leading-relaxed text-neutral-800 dark:text-neutral-200">
        {config.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
