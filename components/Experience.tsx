"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  Presentation,
  Terminal,
  Code2,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  location?: string;
  summary: string;
  bullets?: string[];
  stack?: string[];
  icon: typeof Briefcase;
  current?: boolean;
}

const timeline: TimelineItem[] = [
  {
    date: "Nov 2025 - Present",
    title: "Technical Team Lead",
    company: "Codewyse",
    location: "Karachi, Pakistan",
    summary:
      "Leading full-stack delivery for fintech, blockchain and AI workloads, from architecture through production observability.",
    bullets: [
      "Shipped a full-stack RAG chatbot with LangChain + LangGraph for a legal-consulting client, exposing natural-language Q&A over sourced legal documents.",
      "Built AI agents that automate advertising-performance evaluation end-to-end, replacing a manual analyst workflow.",
      "Engineered Fiat↔Crypto payment flows integrating Transak, ChangeNOW and multiple chains, with double-entry ledger, wallets and reconciliation.",
      "Optimized DB performance via indexing, query tuning and schema redesign, achieving 35% API latency reduction and lower infra spend.",
      "Deployed to AWS Elastic Beanstalk with auto-scaling, health checks and zero-downtime rolling releases; Redis + BullMQ + event-driven cut processing bottlenecks by 50%.",
      "Established end-to-end observability (structured logs, metrics, alerts), delivering a 40% MTTR reduction on production incidents.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "LangChain",
      "LangGraph",
      "AWS",
      "Redis",
      "BullMQ",
      "Blockchain",
    ],
    icon: Presentation,
    current: true,
  },
  {
    date: "Nov 2024 - Dec 2025",
    title: "Backend Engineer",
    company: "LaunchBox",
    location: "Karachi, Pakistan",
    summary:
      "Designed high-throughput REST/GraphQL APIs, containerized services and orchestrated zero-downtime deployments.",
    bullets: [
      "Cut data-retrieval time by 40% with hardened REST + GraphQL APIs on Node.js/Express/NestJS over PostgreSQL and MongoDB.",
      "Redesigned API contracts with frontend to eliminate redundant round-trips, cutting dev cycle time by 20%.",
      "Automated payments via Stripe, Google Pay and Apple Pay, supporting 500+ monthly transactions with 30% less manual intervention.",
      "Kubernetes orchestration: service discovery, load balancing, horizontal pod autoscaling and automated rollback for zero-downtime deploys.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Stripe",
    ],
    icon: Terminal,
  },
  {
    date: "Jan 2023 - Oct 2024",
    title: "Software Engineer",
    company: "Jumppace Pvt Ltd",
    location: "Karachi, Pakistan",
    summary:
      "Built full-stack products with real-time features, third-party integrations and containerized cloud deployments.",
    bullets: [
      "Delivered Next.js + NestJS applications with Socket.IO/WebSockets supporting thousands of concurrent users.",
      "Integrated Google Meet, Stripe and other third-party services across REST and GraphQL surfaces.",
      "Tuned Prisma/TypeORM queries across PostgreSQL and MongoDB for up to 45% faster execution.",
      "Automated CI/CD pipelines with Docker, Nginx and Redis on AWS, delivering 60% faster deployments.",
    ],
    stack: [
      "Next.js",
      "React",
      "NestJS",
      "GraphQL",
      "Socket.IO",
      "PostgreSQL",
      "MongoDB",
      "AWS",
    ],
    icon: Briefcase,
  },
  {
    date: "Jan 2021 - Dec 2022",
    title: "Associate Software Engineer",
    company: "Qist Bazaar",
    location: "Karachi, Pakistan",
    summary:
      "Engineered high-traffic e-commerce APIs, hardened security, and refactored legacy microservices for reliability.",
    bullets: [
      "Built RESTful Node.js APIs serving 10,000+ daily active users at 99.9% uptime.",
      "Rolled out JWT auth, role-based access control and layered API security, eliminating critical vulnerabilities.",
      "Applied black-box and regression testing methodologies for 20% higher defect detection and reliability.",
      "Refactored microservices out of a legacy monolith, reducing latency and boosting throughput under peak load.",
    ],
    stack: ["Node.js", "REST", "JWT", "RBAC", "Microservices"],
    icon: Code2,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative w-full overflow-hidden bg-black pb-20 pt-20"
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Journey"
          title="Professional"
          accent="Experience"
          subtitle="5+ years across fintech, blockchain and AI. Architecting distributed backends, shipping AI agents, and hardening systems for production scale."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <Stat icon={Briefcase} value={String(timeline.length)} label="Roles" />
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <Stat icon={Calendar} value="5+" label="Years Active" />
          <div className="hidden h-8 w-px bg-white/10 sm:block" />
          <Stat icon={Terminal} value="10k+" label="DAU Shipped" />
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.3em] text-white/60">
            <span className="inline-block h-1.5 w-1.5 animate-glow rounded-full bg-emerald-400" />
            Currently Leading Delivery
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0 sm:left-6 lg:left-1/2" />

          <ul className="space-y-8">
            {timeline.map((item, i) => (
              <TimelineRow key={i} item={item} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = item.icon;
  const alignRight = index % 2 === 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-14 sm:pl-16 lg:pl-0"
    >
      <div
        className={`absolute left-0 top-2 z-10 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/10 bg-neutral-900 lg:left-1/2 lg:-translate-x-1/2 ${
          item.current ? "ring-2 ring-emerald-400/40" : ""
        }`}
      >
        <Icon size={16} className="text-white/85" />
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-10">
        <div className={alignRight ? "lg:col-start-2" : "lg:col-start-1"}>
          <div
            className={`card-panel p-5 sm:p-6 ${
              alignRight ? "lg:ml-8" : "lg:mr-8"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.3em] text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
              {item.date}
              {item.current && (
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[9px] tracking-[0.2em] text-emerald-300">
                  Current
                </span>
              )}
            </div>
            <h3 className="mt-3 text-lg sm:text-xl font-light">{item.title}</h3>
            <p className="mt-1 text-sm text-white/70">
              <span className="text-white/40">•</span> {item.company}
              {item.location && (
                <span className="text-white/40"> · {item.location}</span>
              )}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {item.summary}
            </p>

            {item.bullets && (
              <>
                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/65">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-violet-300/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {item.stack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[10px] text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-white/60 hover:text-white/85 transition"
                >
                  {open ? "Show Less" : "Show More"}
                  <ChevronDown
                    size={12}
                    className={`transition ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Briefcase;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5">
        <Icon size={14} className="text-white/70" />
      </span>
      <div className="text-2xl font-extralight leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
        {label}
      </div>
    </div>
  );
}
