import { useState } from "react";
import { achievements, projects } from "../data/portfolio";
import { architectures } from "../data/architectures";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";

function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof projects)[number];
  className?: string;
}) {
  const [showArch, setShowArch] = useState(project.featured ?? false);
  const arch = architectures[project.id];

  return (
    <article
      className={`project-card p-6 md:p-7 ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty(
          "--mouse-x",
          `${e.clientX - rect.left}px`,
        );
        e.currentTarget.style.setProperty(
          "--mouse-y",
          `${e.clientY - rect.top}px`,
        );
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-text">{project.name}</h3>
          <p className="mt-1 text-sm text-text-muted">{project.subtitle}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-text-dim">
          {project.period}
        </span>
      </div>

      {project.stats && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-green-500/15 bg-green-500/5 px-3 py-2"
            >
              <p className="font-mono text-sm font-semibold text-green-400">
                {s.value}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-text-dim">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-bg-elevated px-2 py-0.5 font-mono text-[11px] text-cyan-400/80"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {project.highlights.slice(0, project.featured ? 4 : 2).map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green-400/70" />
            {item}
          </li>
        ))}
      </ul>

      {arch && (
        <>
          <button
            type="button"
            onClick={() => setShowArch(!showArch)}
            className="mt-5 flex items-center gap-2 font-mono text-xs text-green-400 transition-colors hover:text-green-300"
          >
            <span className={`transition-transform ${showArch ? "rotate-90" : ""}`}>
              ›
            </span>
            {showArch ? "hide" : "view"} architecture
          </button>
          {showArch && <ArchitectureDiagram arch={arch} />}
        </>
      )}
    </article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="border-t border-border-subtle py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Systems I've shipped
          </h2>
          <p className="mt-3 max-w-xl text-text-muted">
            Production-grade backends — queues, gateways, and pipelines with
            real throughput numbers.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2 lg:row-span-2" delay={100}>
            <ProjectCard project={featured} className="h-full" />
          </Reveal>
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={150 + i * 80}>
              <ProjectCard project={project} className="h-full" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20" delay={100}>
          <SectionLabel>Achievements</SectionLabel>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-bg-card p-6 transition-all hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/5"
              >
                <span className="font-mono text-3xl font-bold text-border transition-colors group-hover:text-orange-400/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
