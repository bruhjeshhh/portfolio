import { useEffect, useState } from "react";

const lines = [
  { type: "cmd" as const, text: "$ go run ./cmd/logstream --workers=16" },
  { type: "out" as const, text: "→ Kafka consumer pool started [3 instances]" },
  { type: "out" as const, text: "→ Ingesting 10,247 events/sec (peak)" },
  { type: "out" as const, text: "→ PostgreSQL load: 13,500 q/min ↓70%" },
  { type: "out" as const, text: "→ P95 latency: 150ms | P99: 320ms" },
  { type: "success" as const, text: "✓ System availability: 99.8%" },
  { type: "cmd" as const, text: "$ flowd status --queue=default" },
  { type: "out" as const, text: "→ Workers: 24 active | DLQ: 0 jobs lost" },
  { type: "out" as const, text: "→ Stuck jobs recovered: 847/day" },
  { type: "success" as const, text: "✓ All pipelines healthy" },
];

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setCharIndex(0);
        setCycle((c) => c + 1);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const current = lines[visibleLines];
    if (charIndex < current.text.length) {
      const timeout = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(timeout);
    }

    const pause = current.type === "cmd" ? 400 : 200;
    const timeout = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setCharIndex(0);
    }, pause);
    return () => clearTimeout(timeout);
  }, [visibleLines, charIndex, cycle]);

  return (
    <div className="terminal-window overflow-hidden rounded-xl border border-border bg-[#0c0c0e] shadow-2xl shadow-green-500/5">
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-text-dim">
          brajesh@prod — zsh
        </span>
      </div>
      <div className="space-y-1.5 p-4 font-mono text-xs leading-relaxed md:text-sm">
        {lines.slice(0, visibleLines).map((line, i) => (
          <p
            key={`${cycle}-${i}`}
            className={
              line.type === "cmd"
                ? "text-text"
                : line.type === "success"
                  ? "text-green-400"
                  : "text-text-dim"
            }
          >
            {line.text}
          </p>
        ))}
        {visibleLines < lines.length && (
          <p
            className={
              lines[visibleLines].type === "cmd"
                ? "text-text"
                : lines[visibleLines].type === "success"
                  ? "text-green-400"
                  : "text-text-dim"
            }
          >
            {lines[visibleLines].text.slice(0, charIndex)}
            <span className="cursor-blink ml-0.5 inline-block h-4 w-2 bg-green-400 align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}
