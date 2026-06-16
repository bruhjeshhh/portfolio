import { experience } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Where I've built
          </h2>
        </Reveal>

        <div className="relative mt-12">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-green-400/50 via-border to-transparent md:block" />

          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <article className="relative md:pl-14">
                <div className="absolute left-3 top-8 hidden h-3 w-3 rounded-full border-2 border-green-400 bg-bg md:block" />

                <div className="rounded-2xl border border-border bg-bg-card p-7 md:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs text-green-400">
                        {job.company}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-text">
                        {job.role}
                      </h3>
                    </div>
                    <div className="font-mono text-xs text-text-dim sm:text-right">
                      <p>{job.period}</p>
                      <p className="mt-1">{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-lg border border-transparent p-2 text-sm leading-relaxed text-text-muted transition-colors hover:border-border-subtle hover:bg-bg-elevated"
                      >
                        <span className="mt-1.5 font-mono text-green-400">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
