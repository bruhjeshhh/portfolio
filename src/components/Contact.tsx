import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border-subtle py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-card p-10 text-center md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />
            <div className="relative">
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-5xl">
                Let's build the next system
              </h2>
              <p className="mx-auto mt-4 max-w-md text-text-muted">
                Open to backend roles, internships, and interesting distributed
                systems problems.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="btn-primary mt-10 inline-block text-base"
              >
                {profile.email}
              </a>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                {[
                  { label: profile.phone, href: `tel:${profile.phone}` },
                  { label: "LinkedIn", href: profile.linkedin },
                  { label: "GitHub", href: profile.github },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-mono text-sm text-text-dim transition-colors hover:text-green-400"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-text-dim">
          <span className="text-green-400">●</span> all systems operational
        </p>
      </div>
    </footer>
  );
}
