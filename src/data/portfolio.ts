export const profile = {
  name: "Brajesh Mohanty",
  title: "Backend Engineer",
  tagline:
    "I build distributed systems, high-throughput APIs, and data pipelines that scale.",
  email: "mohantybrajesh4@gmail.com",
  phone: "+91-7008363493",
  linkedin: "https://linkedin.com/in/brajesh-mohanty",
  github: "https://github.com/bruhjeshhh",
  location: "Vellore, India",
};

export const education = {
  school: "Vellore Institute of Technology",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  period: "Sept 2023 — Present",
  location: "Vellore, India",
  gpa: "8.53 / 10.0",
};

export const skills = [
  {
    category: "Languages",
    items: ["Go", "Java", "Python", "C"],
  },
  {
    category: "Backend & Frameworks",
    items: [
      "FastAPI",
      "Spring Boot",
      "Spring JPA",
      "SQLC",
      "REST APIs",
      "Goroutines",
    ],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "H2", "Redis", "Elasticsearch"],
  },
  {
    category: "Systems & Concepts",
    items: [
      "Distributed Job Queues",
      "Rate Limiting",
      "Idempotency",
      "Concurrency",
      "Lua Scripting",
      "Token Bucket Algorithm",
      "Geospatial Mapping",
      "Stream Processing",
      "Kafka",
    ],
  },
  {
    category: "Orchestration & DevOps",
    items: ["Docker", "Docker-Compose", "Kubernetes", "CI/CD", "Prometheus"],
  },
  {
    category: "Security",
    items: ["JWT", "Argon2ID", "API Key Auth"],
  },
];

export const experience = [
  {
    company: "Amasqis.ai",
    role: "Backend Engineer Intern",
    period: "Apr 2025 — Sept 2025",
    location: "Remote",
    highlights: [
      "Built 22 REST API endpoints in FastAPI serving ~8,500 requests/day with 99.2% uptime",
      "PostGIS geospatial filters: cut p95 latency from 850ms to 120ms (~86% faster)",
      "Go data pipelines aggregating 2.3M property records/day for analytics dashboards",
      "Added 15 request validation checks; client error rate dropped from 4.2% to 0.8%",
      "B-tree indexes on 12 hot queries — average latency down ~64%",
    ],
  },
];

export const projects = [
  {
    id: "logstream",
    name: "LogStream",
    subtitle: "Distributed Log Processing & Query Engine",
    period: "Jan 2026 — Mar 2026",
    featured: true,
    stats: [
      { label: "Load test peak", value: "~1.8K/s" },
      { label: "Query p95", value: "48ms" },
      { label: "Test dataset", value: "5M rows" },
    ],
    tech: [
      "Go",
      "Apache Kafka",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    highlights: [
      "Kafka log pipeline load-tested at ~1,800 events/sec peak across 3 consumer instances",
      "8-worker stream processor with sliding-window aggregations; ~70% fewer PostgreSQL writes",
      "Dual storage: indexed Postgres queries under 50ms on a 5M-row test set; ES search ~280ms",
      "Query API at 100 concurrent clients: p95 48ms, p99 110ms with connection pooling",
      "Docker Compose + K8s manifests with HPA; bloom-filter dedup reduced memory ~35% in benchmarks",
      "Prometheus instrumentation; 99.5% availability over a 30-minute sustained load test",
    ],
  },
  {
    id: "flowd",
    name: "FlowD",
    subtitle: "Distributed Job Queue",
    period: "Aug 2025 — Oct 2025",
    featured: false,
    stats: [
      { label: "Workers", value: "8" },
      { label: "Recovery", value: "~90s" },
    ],
    tech: ["Go", "PostgreSQL", "SQLC", "Docker"],
    highlights: [
      "Postgres-backed queue with 8 workers using FOR UPDATE SKIP LOCKED — no duplicate processing in tests",
      "Idempotent enqueue via unique constraints; duplicate submits return the existing job row",
      "Exponential backoff (5 retries, max 32s) and a dead-letter queue; zero job loss in fault-injection runs",
      "Scavenger goroutine detects and resets stuck jobs within ~90 seconds",
    ],
  },
  {
    id: "api-gateway",
    name: "API Gateway",
    subtitle: "Rate Limiting & Analytics",
    period: "Jun 2025 — Aug 2025",
    featured: false,
    stats: [
      { label: "Benchmark", value: "~1.2K/s" },
      { label: "Success rate", value: "99.2%" },
    ],
    tech: ["Go", "Redis", "Elasticsearch", "Docker"],
    highlights: [
      "Gateway benchmarked at ~1,200 req/s across 4 tenant rate-limit buckets (Redis + Lua scripts)",
      "16-worker pool with fail-open behavior when Redis is unavailable",
      "Request metadata indexed to Elasticsearch; aggregation queries ~400ms on test traffic",
      "Dockerized and structured for ECS/Fargate with CPU-based autoscaling hooks",
    ],
  },
  {
    id: "chirpy",
    name: "Chirpy",
    subtitle: "Scalable Backend API",
    period: "Apr 2025 — Jun 2025",
    featured: false,
    stats: [
      { label: "Endpoints", value: "18" },
      { label: "Auth", value: "JWT" },
    ],
    tech: ["Go", "PostgreSQL"],
    highlights: [
      "REST API with JWT auth, Argon2id hashing, and refresh-token rotation",
      "SQLC-generated type-safe queries — SQL checked at compile time",
      "6 webhook routes secured with API keys and resource-ownership middleware",
    ],
  },
];

export const achievements = [
  {
    title: "Sol-VIT Hackathon",
    detail: "Ranked 6th out of 160+ teams (top 3.75%) for a 24-hour supply-chain optimization tool",
  },
  {
    title: "LeetCode",
    detail:
      "1750 Rating (top 7%); 240+ problems solved with 89% acceptance rate",
  },
  {
    title: "Oracle Certified",
    detail: "AI Foundations & Architect Associate (2025)",
  },
];

export const metrics = [
  { label: "APIs shipped (internship)", value: 22, suffix: "" },
  { label: "Load-test peak", value: 1800, suffix: "/s" },
  { label: "Geo filter speedup", value: 86, suffix: "%" },
  { label: "LeetCode rating", value: 1750, suffix: "" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
