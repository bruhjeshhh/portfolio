import { pipelineSteps } from "../data/pipeline";
import { useActiveSection } from "../hooks/useActiveSection";

export function DeployPipeline() {
  const active = useActiveSection();
  const activeIdx = pipelineSteps.findIndex((s) => s.section === active);

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        aria-label="Deployment pipeline progress"
      >
        <div className="rounded-2xl border border-border-subtle bg-bg/80 p-4 backdrop-blur-md">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-text-dim">
            pipeline
          </p>
          <ol className="relative space-y-0">
            <div className="absolute bottom-4 left-[11px] top-4 w-px bg-border" />
            {pipelineSteps.map((step, i) => {
              const done = i < activeIdx;
              const current = i === activeIdx;
              return (
                <li key={step.id} className="relative flex items-center gap-3 py-2">
                  <span
                    className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-500 ${
                      current
                        ? "border-green-400 bg-green-400/20 text-green-400 shadow-lg shadow-green-500/20"
                        : done
                          ? "border-green-400/50 bg-green-400/10 text-green-400"
                          : "border-border bg-bg-card text-text-dim"
                    }`}
                  >
                    {done ? "✓" : step.icon}
                  </span>
                  <span
                    className={`font-mono text-xs transition-colors duration-500 ${
                      current
                        ? "text-green-400"
                        : done
                          ? "text-text-muted"
                          : "text-text-dim"
                    }`}
                  >
                    {step.label}
                  </span>
                  {current && (
                    <span className="pipeline-pulse ml-1 h-1.5 w-1.5 rounded-full bg-green-400" />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </aside>

      {/* Mobile horizontal bar */}
      <div className="sticky top-[65px] z-30 border-b border-border-subtle bg-bg/90 backdrop-blur-md xl:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 py-2">
          {pipelineSteps.map((step, i) => {
            const done = i < activeIdx;
            const current = i === activeIdx;
            return (
              <div
                key={step.id}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] transition-all ${
                  current
                    ? "border-green-400/50 bg-green-400/10 text-green-400"
                    : done
                      ? "border-green-400/20 text-text-muted"
                      : "border-border-subtle text-text-dim"
                }`}
              >
                <span>{done ? "✓" : step.icon}</span>
                {step.label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
