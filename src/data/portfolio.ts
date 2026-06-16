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
      "Developed 22 REST API endpoints using FastAPI processing 8,500+ requests/day with 99.2% uptime",
      "Developed Geospatial features using PostGIS reducing filter latency from 850ms to 120ms (85.9% improvement)",
      "Architected data pipelines in Go aggregating 2.3 million property records daily for analytics, increasing dashboard load speed by 76%",
      "Enhanced system reliability by implementing 15 validation checks reducing failed requests from 4.2% to 0.8% (81% error reduction)",
      "Optimized database queries using B-tree indices reducing query latency by 64% across 12 critical endpoints",
    ],
  },
];

export const projects = [
  {
    name: "LogStream",
    subtitle: "Distributed Log Processing & Query Engine",
    period: "Jan 2026 — Mar 2026",
    featured: true,
    stats: [
      { label: "Throughput", value: "50M+/day" },
      { label: "P95", value: "150ms" },
      { label: "Uptime", value: "99.8%" },
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
      "High-throughput log pipeline handling 50M+ logs/day with 10,000 peak events/second across 3+ consumer instances",
      "Stream processor with 16 Goroutine worker pools and sliding-window aggregations, reducing PostgreSQL load by 70%",
      "Dual-storage: PostgreSQL sub-100ms queries on 50M+ records; Elasticsearch full-text search at 0.23s avg latency",
      "REST API with 150+ concurrent requests, P95 150ms / P99 320ms via connection pooling",
      "8 Kubernetes manifests with HPA for zero-downtime deployments; Bloom Filters for 40% memory efficiency",
      "Prometheus metrics achieving 99.8% availability under 10k events/sec load testing",
    ],
  },
  {
    name: "FlowD",
    subtitle: "Distributed Job Queue",
    period: "Aug 2025 — Oct 2025",
    featured: false,
    stats: [
      { label: "Workers", value: "24" },
      { label: "Job loss", value: "0" },
    ],
    tech: ["Go", "PostgreSQL", "SQLC", "Docker"],
    highlights: [
      "Postgres-backed queue with 24 concurrent workers using FOR UPDATE SKIP LOCKED — zero double-processing",
      "Idempotent enqueue via transactional constraints, 2.3ms faster than re-processing",
      "Exponential backoff (5 retries, max 32s) and Dead Letter Queue with zero job loss",
      "Scavenger goroutine resetting 847 stuck jobs/day with 61s detection latency",
    ],
  },
  {
    name: "API Gateway",
    subtitle: "Rate Limiting & Analytics",
    period: "Jun 2025 — Aug 2025",
    featured: false,
    stats: [
      { label: "Req/s", value: "10.5K+" },
      { label: "Success", value: "99.4%" },
    ],
    tech: ["Go", "Redis", "Elasticsearch", "Docker"],
    highlights: [
      "Distributed gateway handling 10,500+ req/s across 8 multi-tenant rate limit buckets via Lua O(1) ops",
      "32-thread worker pool at 99.4% success rate, fail-open on Redis failure protecting upstream services",
      "Real-time analytics indexing 100% of requests to Elasticsearch with 0.35s aggregations",
      "AWS-ready with RDS, ElastiCache, ECS/Fargate auto-scaling at 70–85% CPU thresholds",
    ],
  },
  {
    name: "Chirpy",
    subtitle: "Scalable Backend API",
    period: "Apr 2025 — Jun 2025",
    featured: false,
    stats: [
      { label: "Sessions", value: "3.2K+" },
      { label: "SQLC APIs", value: "47" },
    ],
    tech: ["Go", "PostgreSQL"],
    highlights: [
      "Microservice with JWT auth supporting 3,200+ active sessions and Argon2ID hashing",
      "SQLC generating 47 type-safe SQL interfaces with 100% compile-time validation",
      "18 webhook endpoints secured with API key validation and ownership middleware",
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
  { label: "Logs processed / day", value: 50, suffix: "M+" },
  { label: "Peak events / sec", value: 10000, suffix: "+" },
  { label: "API uptime", value: 99, suffix: ".8%" },
  { label: "LeetCode rating", value: 1750, suffix: "" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
