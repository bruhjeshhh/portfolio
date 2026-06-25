import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./About";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

type Event = {
  type: string;
  repo: { name: string };
  created_at: string;
};

const GITHUB_USER = "bruhjeshhh";

const fallbackRepos: Repo[] = [
  {
    name: "portfolio",
    description: "Personal portfolio — React + Vite",
    html_url: "https://github.com/bruhjeshhh/portfolio",
    language: "TypeScript",
    stargazers_count: 0,
    updated_at: new Date().toISOString(),
  },
];

function timeAgo(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const [reposRes, eventsRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=5`,
          ),
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=6`,
          ),
        ]);

        if (reposRes.ok) {
          const data: Repo[] = await reposRes.json();
          setRepos(
            data.filter((r) => !(r as Repo & { fork?: boolean }).fork).slice(0, 5),
          );
        } else {
          setRepos(fallbackRepos);
        }

        if (eventsRes.ok) {
          const data: Event[] = await eventsRes.json();
          setEvents(
            data.filter((e) => e.type === "PushEvent").slice(0, 4),
          );
        }
      } catch {
        setRepos(fallbackRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGithub();
  }, []);

  const displayRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <section
      id="github"
      className="border-t border-border-subtle py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>GitHub</SectionLabel>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Recent activity
            </h2>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-green-400 transition-colors hover:text-green-300"
            >
              @{GITHUB_USER} ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3" delay={80}>
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
                Repositories
              </p>
              {loading ? (
                <div className="mt-4 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-14 animate-pulse rounded-lg bg-bg-elevated"
                    />
                  ))}
                </div>
              ) : (
                <ul className="mt-4 divide-y divide-border-subtle">
                  {displayRepos.map((repo) => (
                    <li key={repo.name}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between gap-4 py-3 transition-colors hover:text-green-400"
                      >
                        <div>
                          <p className="font-mono text-sm font-medium text-text group-hover:text-green-400">
                            {repo.name}
                          </p>
                          {repo.description && (
                            <p className="mt-0.5 line-clamp-1 text-xs text-text-dim">
                              {repo.description}
                            </p>
                          )}
                        </div>
                        <div className="shrink-0 text-right font-mono text-[10px] text-text-dim">
                          {repo.language && (
                            <span className="text-cyan-400/80">
                              {repo.language}
                            </span>
                          )}
                          <p className="mt-0.5">{timeAgo(repo.updated_at)}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={160}>
            <div className="h-full rounded-2xl border border-border bg-bg-card p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-text-dim">
                Recent pushes
              </p>
              {loading ? (
                <div className="mt-4 space-y-3">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-10 animate-pulse rounded-lg bg-bg-elevated"
                    />
                  ))}
                </div>
              ) : events.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {events.map((ev, i) => (
                    <li
                      key={`${ev.repo.name}-${i}`}
                      className="flex items-center gap-3 rounded-lg border border-border-subtle bg-bg-elevated px-3 py-2.5"
                    >
                      <span className="text-green-400">▲</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-mono text-xs text-text">
                          {ev.repo.name.replace(`${GITHUB_USER}/`, "")}
                        </p>
                        <p className="text-[10px] text-text-dim">
                          push · {timeAgo(ev.created_at)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-text-dim">
                  Push events will appear here from the GitHub API.
                </p>
              )}

              <div className="mt-6 rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                <p className="font-mono text-xs text-green-400">
                  git pull origin main
                </p>
                <p className="mt-1 font-mono text-[10px] text-text-dim">
                  Always shipping.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
