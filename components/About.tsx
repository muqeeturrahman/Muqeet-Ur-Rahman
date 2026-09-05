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
  { icon: Bot, label: "AI Agents & Claude AI" },
  { icon: Workflow, label: "n8n Workflow Automation" },
  { icon: Layers, label: "System & API Architecture" },
  { icon: Database, label: "Database Design & Indexing" },
  { icon: ShieldCheck, label: "Security Hardening & RBAC" },
  { icon: Users, label: "Multi-Tenant SaaS Engineering" },
];

const stats = [
  { value: "13+", label: "production systems shipped" },
  { value: "6+", label: "AI automation systems deployed" },
  { value: "80%+", label: "AI auto-resolution rate" },
  { value: "20+", label: "clients across 8+ industries" },
];

const engineeringCards = [
  {
    icon: Sparkles,
    title: "AI Agents & Automation",
    body: "Autonomous agents and workflow pipelines built with Claude AI, n8n, ElevenLabs and third-party APIs.",
    tags: [
      "Claude AI Integration",
      "n8n Workflow Orchestration",
      "Voice AI (ElevenLabs + Twilio)",
      "Shopify / Gmail / CRM Automation",
    ],
  },
  {
    icon: Layers,
    title: "SaaS Architecture",
    body: "Multi-tenant platforms with subscription billing, RBAC, escrow payments and scalable infrastructure.",
    tags: [
      "Multi-Tenant Architecture",
      "Escrow & Payment Systems",
      "Role-Based Access Control",
      "Admin Dashboards",
    ],
  },
  {
    icon: Rocket,
    title: "Next.js Full-Stack",
    body: "High-performance apps with App Router, RSC, ISR/SSR strategies, API design and edge-optimized delivery.",
    tags: [
      "App Router & RSC",
      "SSR / SSG / ISR",
      "API Design & Versioning",
      "Edge Caching & CDN",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    body: "REST and GraphQL services on NestJS/Express with webhooks, background jobs and enterprise-grade security.",
    tags: [
      "NestJS Microservices",
      "Webhook Architecture",
      "Background Job Queues",
      "API Gateway Patterns",
    ],
  },
  {
    icon: KeyRound,
    title: "Security Engineering",
    body: "CSRF/XSS protection, CSP headers, rate limiting, input sanitization and detailed audit trails.",
    tags: [
      "CSRF & XSS Protection",
      "Security Headers",
      "Rate Limiting",
      "Audit Logging",
    ],
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    body: "Core Web Vitals tuning, database indexing, caching strategies, structured data and SEO architecture.",
    tags: [
      "Core Web Vitals",
      "Database Indexing & Caching",
      "Structured Data & Schema",
      "Sitemap & Canonical Mgmt",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
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
              I&apos;m <span className="text-white">Rohail Ahmed</span>, a
              full-stack engineer and AI automation architect with 4+ years of
              experience shipping production-grade platforms and intelligent
              automation systems. My work spans database schemas, API contracts,
              AI agent pipelines and end-to-end workflow orchestration.
            </p>
            <p className="text-white/60 leading-relaxed">
              I focus on two overlapping domains — building autonomous agents
              with Claude AI, n8n, and voice-AI stacks like ElevenLabs + Twilio,
              and shipping full-stack products with Next.js, NestJS, TypeScript
              and MongoDB / PostgreSQL.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="chip">Islamabad, Pakistan</span>
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
