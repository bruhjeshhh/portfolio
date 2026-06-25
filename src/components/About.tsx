import { education } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-green-400">
      <span className="h-px w-6 bg-green-400/50" />
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Engineer obsessed with{" "}
            <span className="text-green-400">reliability</span> and{" "}
            <span className="text-cyan-400">throughput</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={100}>
            <div className="rounded-2xl border border-border bg-bg-card p-8">
              <p className="text-lg leading-relaxed text-text-muted">
                CS undergrad at VIT building production backends in Go. I
                design APIs, job queues, stream processors, and data pipelines —
                the kind of systems where a 64% latency drop or zero job loss
                actually matters.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                Recent work spans geospatial query optimization at{" "}
                <span className="text-text">Amasqis.ai</span>, a Kafka log
                pipeline load-tested to ~1.8K events/sec, and Postgres-backed
                job queues with idempotent enqueue semantics.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={200}>
            <div className="h-full rounded-2xl border border-border bg-gradient-to-br from-bg-card to-bg-elevated p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
                Education
              </p>
              <p className="mt-4 text-lg font-bold text-text">
                {education.school}
              </p>
              <p className="mt-1 text-sm text-text-muted">{education.degree}</p>
              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-dim">Period</span>
                  <span className="text-text-muted">{education.period}</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-text-dim">Location</span>
                  <span className="text-text-muted">{education.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-dim">CGPA</span>
                  <span className="font-semibold text-green-400">
                    {education.gpa}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
