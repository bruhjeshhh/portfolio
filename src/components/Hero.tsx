import { NetworkCanvas } from "./NetworkCanvas";
import { Terminal } from "./Terminal";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden pt-28 pb-16 md:pt-36">
      <NetworkCanvas />
      <div className="noise pointer-events-none absolute inset-0" />
      <div className="glow-orb pointer-events-none absolute -top-20 right-0 h-[600px] w-[600px] opacity-60" />
      <div className="glow-orb-orange pointer-events-none absolute bottom-0 -left-32 h-[400px] w-[400px] opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="font-mono text-xs text-green-400">
              systems online
            </span>
          </div>

          <h1 className="animate-fade-up animate-delay-1 mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            <span className="text-text">Building</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              backends
            </span>
            <br />
            <span className="text-text-muted">that scale.</span>
          </h1>

          <p className="animate-fade-up animate-delay-2 mt-6 max-w-lg text-lg text-text-muted">
            Hey, I'm{" "}
            <span className="font-medium text-text">{profile.name}</span> —{" "}
            {profile.tagline.toLowerCase()}
          </p>

          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              Explore systems →
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
