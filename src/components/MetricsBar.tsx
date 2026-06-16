import { useEffect, useRef, useState } from "react";
import { metrics } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const { ref, visible } = useInView(0.3);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function MetricsBar() {
  return (
    <div className="border-y border-border-subtle bg-bg-elevated/50 backdrop-blur-sm">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px bg-border-subtle md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="group bg-bg px-6 py-8 text-center transition-colors hover:bg-bg-card"
          >
            <p className="font-mono text-2xl font-bold text-green-400 md:text-3xl">
              <AnimatedNumber value={m.value} suffix={m.suffix} />
            </p>
            <p className="mt-2 text-xs text-text-dim transition-colors group-hover:text-text-muted">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
