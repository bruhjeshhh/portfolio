import { useState } from "react";
import { navLinks, profile } from "../data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle/60 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-green-500/30 bg-green-500/10 font-mono text-xs font-bold text-green-400 transition-colors group-hover:bg-green-500/20">
            BM
          </span>
          <span className="hidden font-mono text-sm text-text-muted sm:inline">
            brajesh.dev
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-text-muted transition-colors hover:bg-bg-card hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${profile.email}`} className="btn-primary hidden !py-2 !text-xs md:inline-block">
          Hire me
        </a>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-text transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-bg-elevated px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-text-muted" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
