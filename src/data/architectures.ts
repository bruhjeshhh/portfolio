export type ArchNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  variant?: "primary" | "storage" | "queue" | "client";
};

export type ArchEdge = {
  from: string;
  to: string;
};

export type Architecture = {
  nodes: ArchNode[];
  edges: ArchEdge[];
};

export const architectures: Record<string, Architecture> = {
  logstream: {
    nodes: [
      { id: "clients", label: "Clients", x: 40, y: 100, variant: "client" },
      { id: "kafka", label: "Kafka", x: 130, y: 100, variant: "queue" },
      { id: "go", label: "Go Workers", x: 230, y: 60, variant: "primary" },
      { id: "redis", label: "Redis", x: 230, y: 140, variant: "storage" },
      { id: "pg", label: "PostgreSQL", x: 330, y: 60, variant: "storage" },
      { id: "es", label: "Elasticsearch", x: 330, y: 140, variant: "storage" },
    ],
    edges: [
      { from: "clients", to: "kafka" },
      { from: "kafka", to: "go" },
      { from: "go", to: "redis" },
      { from: "go", to: "pg" },
      { from: "go", to: "es" },
    ],
  },
  flowd: {
    nodes: [
      { id: "api", label: "API", x: 50, y: 100, variant: "client" },
      { id: "pg", label: "PostgreSQL", x: 170, y: 100, variant: "storage" },
      { id: "workers", label: "8 Workers", x: 290, y: 60, variant: "primary" },
      { id: "dlq", label: "DLQ", x: 290, y: 140, variant: "queue" },
      { id: "scav", label: "Scavenger", x: 370, y: 100, variant: "primary" },
    ],
    edges: [
      { from: "api", to: "pg" },
      { from: "pg", to: "workers" },
      { from: "workers", to: "dlq" },
      { from: "scav", to: "pg" },
    ],
  },
  "api-gateway": {
    nodes: [
      { id: "clients", label: "Clients", x: 40, y: 100, variant: "client" },
      { id: "gw", label: "Gateway", x: 150, y: 100, variant: "primary" },
      { id: "redis", label: "Redis", x: 260, y: 55, variant: "storage" },
      { id: "pool", label: "Worker Pool", x: 260, y: 145, variant: "primary" },
      { id: "es", label: "Elasticsearch", x: 360, y: 100, variant: "storage" },
    ],
    edges: [
      { from: "clients", to: "gw" },
      { from: "gw", to: "redis" },
      { from: "gw", to: "pool" },
      { from: "pool", to: "es" },
    ],
  },
  chirpy: {
    nodes: [
      { id: "clients", label: "Clients", x: 60, y: 100, variant: "client" },
      { id: "api", label: "Go API", x: 180, y: 100, variant: "primary" },
      { id: "jwt", label: "JWT / Argon2", x: 290, y: 55, variant: "queue" },
      { id: "pg", label: "PostgreSQL", x: 290, y: 145, variant: "storage" },
      { id: "hooks", label: "Webhooks", x: 370, y: 100, variant: "client" },
    ],
    edges: [
      { from: "clients", to: "api" },
      { from: "api", to: "jwt" },
      { from: "api", to: "pg" },
      { from: "api", to: "hooks" },
    ],
  },
};
