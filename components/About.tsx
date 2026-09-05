"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Layers,
  Database,
  ShieldCheck,
  Users,
  Sparkles,
  Server,
  Rocket,
  KeyRound,
  Gauge,
  Check,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const coreDomains = [
  { icon: Server, label: "Distributed Backend Architecture" },
  { icon: Database, label: "DB Indexing, Sharding & Replication" },
  { icon: Bot, label: "LLMs, RAG & AI Agent Orchestration" },
  { icon: Workflow, label: "Event-Driven Systems & n8n" },
  { icon: ShieldCheck, label: "API Security, JWT & RBAC" },
  { icon: Users, label: "Fintech, Payments & Blockchain" },
];

const stats = [
  { value: "40%", label: "API latency reduction (indexing + query tuning)" },
  { value: "10k+", label: "daily active users at 99.9% uptime" },
  { value: "40%", label: "MTTR reduction via observability" },
  { value: "50%", label: "throughput lift via queues + caching" },
];

const engineeringCards = [
  {
    icon: Server,
    title: "Scalable Backend",
    body: "Node.js, NestJS, Python, FastAPI and Golang services handling 10k+ DAU with 99.9% uptime and horizontal scalability.",
    tags: ["Node.js", "NestJS", "Python", "Golang", "FastAPI"],
  },
  {
    icon: Database,
    title: "Database Performance",
    body: "Advanced indexing, query tuning, sharding and replication across PostgreSQL, MongoDB, MySQL and Redis.",
    tags: [
      "Indexing & Tuning",
      "Sharding",
      "Replication",
      "PostgreSQL / Mongo / Redis",
    ],
  },
  {
    icon: Sparkles,
    title: "AI & RAG Pipelines",
    body: "LLM integrations, LangChain / LangGraph RAG chatbots, AI agents, vector databases and n8n workflow automation.",
    tags: ["LangChain", "LangGraph", "Vector DBs", "AI Agents", "n8n"],
  },
  {
    icon: Layers,
    title: "Microservices & Events",
    body: "Event-driven architectures with Kafka, BullMQ queues, WebSockets and message-based service communication.",
    tags: ["Microservices", "Kafka", "BullMQ", "WebSockets", "Event-Driven"],
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    body: "AWS Elastic Beanstalk, Docker, Kubernetes and CI/CD pipelines with zero-downtime deployments and auto-scaling.",
    tags: ["AWS", "Docker", "Kubernetes", "Nginx", "CI/CD"],
  },
  {
    icon: KeyRound,
    title: "Fintech & Blockchain",
    body: "Fiat↔crypto payment flows, double-entry ledgers, wallet services and on-chain transaction monitoring.",
    tags: [
      "Payments (Stripe / Transak)",
      "Double-Entry Ledgers",
      "On-Chain Monitoring",
      "KYC",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="About Me"
          title="Engineering Partner,"
          accent="Not Just a Developer"
          subtitle="Four years of shipping product across AI, full-stack and mobile — turning ambiguous briefs into architected systems that ship, scale and sell."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-white/75 leading-relaxed">
              I&apos;m <span className="text-white">Muqeet Ur Rahman</span>, a
              senior full-stack engineer with 5+ years architecting scalable,
              high-performance distributed systems for fintech, blockchain and
              AI. I work from database internals up through API contracts,
              AI-agent pipelines and cloud infrastructure.
            </p>
            <p className="text-white/60 leading-relaxed">
              Deep backend fundamentals in Node.js, NestJS, Python, FastAPI and
              Golang — with production LLM integration (GPT, Claude, Gemini),
              RAG chatbots built on LangChain and LangGraph, and AI agents for
              workflow automation. Shipped systems handling 10,000+ daily users
              at 99.9% uptime.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="chip">Karachi, Pakistan</span>
              <span className="text-white/30">•</span>
              <span className="chip">Available for Remote Engagements</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-6"
          >
            <h3 className="text-sm uppercase tracking-[0.28em] text-white/60">
              Core Engineering Domains
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreDomains.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.05] transition"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-white/80">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-white/80">{label}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
              <div className="mb-4 text-sm uppercase tracking-[0.28em] text-white/60">
                By the Numbers
              </div>
              <ul className="space-y-3">
                {stats.map((s) => (
                  <li key={s.label} className="flex items-start gap-3">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-[10px] text-white/80">
                      <Check size={12} />
                    </span>
                    <p className="text-sm text-white/75">
                      <span className="text-white">{s.value}</span>{" "}
                      <span className="text-white/60">{s.label}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between">
            <h3 className="text-2xl sm:text-3xl font-light">What I Engineer</h3>
            <div className="divider-line hidden flex-1 mx-6 sm:block" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">
              6 focus areas
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCards.map(({ icon: Icon, title, body, tags }, i) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card-panel p-5"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/85">
                  <Icon size={18} />
                </div>
                <h4 className="text-lg text-white">{title}</h4>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[11px] text-white/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
