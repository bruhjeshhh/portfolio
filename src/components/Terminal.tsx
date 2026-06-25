import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { profile, projects, skills } from "../data/portfolio";
import { scrollToSection } from "../utils/scroll";

type LineType = "input" | "output" | "success" | "error" | "hint";

type Line = { type: LineType; text: string };

const WELCOME: Line[] = [
  { type: "hint", text: "brajesh@prod — interactive shell" },
  { type: "hint", text: "Type 'help' for commands · press ~ anywhere to focus" },
];

type CommandResult = {
  lines: Line[];
  navigateTo?: string;
};

function runCommand(raw: string): CommandResult {
  const cmd = raw.trim().toLowerCase();

  if (!cmd) return { lines: [] };

  if (cmd === "clear") {
    return { lines: [{ type: "success", text: "__CLEAR__" }] };
  }

  if (cmd === "help") {
    return {
      lines: [
      { type: "output", text: "Available commands:" },
      { type: "hint", text: "  help        — show this message" },
      { type: "hint", text: "  whoami      — who am i?" },
      { type: "hint", text: "  about       — navigate to about" },
      { type: "hint", text: "  skills      — navigate to skills" },
      { type: "hint", text: "  experience  — navigate to experience" },
      { type: "hint", text: "  projects    — list projects" },
      { type: "hint", text: "  activity    — navigate to github activity" },
      { type: "hint", text: "  contact     — navigate to contact" },
      { type: "hint", text: "  github      — open github profile" },
      { type: "hint", text: "  clear       — clear terminal" },
      ],
    };
  }

  if (cmd === "whoami") {
    return {
      lines: [
      { type: "success", text: profile.name },
      { type: "output", text: profile.title },
      { type: "output", text: profile.location },
      { type: "output", text: profile.email },
      ],
    };
  }

  if (cmd === "about") {
    return {
      navigateTo: "about",
      lines: [{ type: "success", text: "→ scrolling to #about" }],
    };
  }

  if (cmd === "skills") {
    const flat = skills.flatMap((s) => s.items).slice(0, 12);
    return {
      navigateTo: "skills",
      lines: [
        { type: "success", text: "→ scrolling to #skills" },
        { type: "output", text: flat.join(" · ") },
      ],
    };
  }

  if (cmd === "experience") {
    return {
      navigateTo: "experience",
      lines: [{ type: "success", text: "→ scrolling to #experience" }],
    };
  }

  if (cmd === "activity" || cmd === "github-activity") {
    return {
      navigateTo: "github",
      lines: [{ type: "success", text: "→ scrolling to #github" }],
    };
  }

  if (cmd === "contact") {
    return {
      navigateTo: "contact",
      lines: [
        { type: "success", text: "→ scrolling to #contact" },
        { type: "output", text: profile.email },
      ],
    };
  }

  if (cmd === "projects") {
    return {
      navigateTo: "projects",
      lines: [
        { type: "success", text: "→ scrolling to #projects" },
        ...projects.map((p) => ({
          type: "output" as const,
          text: `  ${p.name} — ${p.subtitle}`,
        })),
      ],
    };
  }

  if (cmd === "github") {
    window.open(profile.github, "_blank", "noopener,noreferrer");
    return {
      lines: [{ type: "success", text: `→ opening ${profile.github}` }],
    };
  }

  if (cmd === "ls") {
    return {
      lines: [
        {
          type: "output",
          text: "logstream/  flowd/  gateway/  chirpy/  README.md",
        },
      ],
    };
  }

  if (cmd === "cat readme.md") {
    return { lines: [{ type: "output", text: profile.tagline }] };
  }

  return {
    lines: [
      {
        type: "error",
        text: `command not found: ${cmd}. Type 'help' for available commands.`,
      },
    ],
  };
}

const lineClass: Record<LineType, string> = {
  input: "text-text",
  output: "text-text-dim",
  success: "text-green-400",
  error: "text-red-400",
  hint: "text-cyan-400/70",
};

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTerminalToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
    scrollTerminalToBottom();
  }, [scrollTerminalToBottom]);

  useEffect(() => {
    scrollTerminalToBottom();
  }, [lines, scrollTerminalToBottom]);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "~" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tag = (e.target as HTMLElement).tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA") {
          e.preventDefault();
          focusInput();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusInput]);

  const submit = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setHistory((h) => [trimmed, ...h].slice(0, 20));
    setHistoryIdx(-1);

    const result = runCommand(trimmed);
    if (result.lines[0]?.text === "__CLEAR__") {
      setLines(WELCOME);
    } else {
      setLines((prev) => [
        ...prev,
        { type: "input", text: `$ ${trimmed}` },
        ...result.lines,
      ]);
    }
    setInput("");

    if (result.navigateTo) {
      requestAnimationFrame(() => {
        scrollToSection(result.navigateTo!);
      });
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(next);
      setInput(history[next]);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx <= 0) {
        setHistoryIdx(-1);
        setInput("");
        return;
      }
      const next = historyIdx - 1;
      setHistoryIdx(next);
      setInput(history[next]);
    }
  };

  return (
    <div
      className="terminal-window flex max-h-[420px] flex-col overflow-hidden rounded-xl border border-border bg-[#0c0c0e] shadow-2xl shadow-green-500/5"
      onClick={focusInput}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-text-dim">
          brajesh@prod — zsh
        </span>
        <span className="ml-auto font-mono text-[10px] text-text-dim">
          ~ to focus
        </span>
      </div>

      <div
        ref={scrollRef}
        className="min-h-0 flex-1 space-y-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed md:text-sm"
      >
        {lines.map((line, i) => (
          <p key={i} className={lineClass[line.type]}>
            {line.text}
          </p>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="flex shrink-0 items-center gap-2 border-t border-border-subtle px-4 py-3 font-mono text-xs md:text-sm">
        <span className="text-green-400">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent text-text outline-none placeholder:text-text-dim"
          placeholder="help"
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal input"
        />
        <span className="cursor-blink h-4 w-2 shrink-0 bg-green-400" />
      </div>
    </div>
  );
}
