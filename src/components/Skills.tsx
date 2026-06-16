import { skills } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";

const techMarquee = [
  "Go", "Kafka", "PostgreSQL", "Redis", "Elasticsearch", "Kubernetes",
  "Docker", "FastAPI", "SQLC", "Prometheus", "gRPC", "PostGIS",
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Stack</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Tools I ship with
          </h2>
        </Reveal>

        <div className="mt-8 overflow-hidden border-y border-border-subtle py-4">
          <div className="animate-marquee flex w-max gap-8">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="font-mono text-sm text-text-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-bg-card p-5">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-widest text-text-dim">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
