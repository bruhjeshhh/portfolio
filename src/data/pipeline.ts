export const pipelineSteps = [
  { id: "push", label: "git push", section: "hero" as const, icon: "›" },
  { id: "ci", label: "CI run", section: "about" as const, icon: "◎" },
  { id: "build", label: "npm build", section: "skills" as const, icon: "⚙" },
  { id: "test", label: "integration", section: "experience" as const, icon: "✓" },
  { id: "deploy", label: "deploy", section: "projects" as const, icon: "↑" },
  { id: "live", label: "live", section: "contact" as const, icon: "●" },
];
