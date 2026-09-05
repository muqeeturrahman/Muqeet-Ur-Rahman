"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Cloud,
  Boxes,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type CategoryId =
  | "backend"
  | "ai"
  | "database"
  | "cloud"
  | "distributed"
  | "frontend";

interface Skill {
  name: string;
  level: number;
  years: string;
  accent: string;
}

interface CategoryDef {
  id: CategoryId;
  title: string;
  desc: string;
  icon: typeof Code2;
  color: string;
  items: Skill[];
}

const categories: CategoryDef[] = [
  {
    id: "backend",
    title: "Backend & APIs",
    desc:
      "High-performance services, event-driven pipelines and secure API design",
    icon: Server,
    color: "from-emerald-500/30 to-teal-500/20",
    items: [
      { name: "Node.js", level: 96, years: "5y", accent: "#8cc84b" },
      { name: "NestJS", level: 94, years: "4y", accent: "#e0234e" },
      { name: "Express.js", level: 93, years: "5y", accent: "#ffffff" },
      { name: "Python", level: 88, years: "4y", accent: "#3776ab" },
      { name: "FastAPI", level: 85, years: "2y", accent: "#009688" },
      { name: "Golang", level: 78, years: "2y", accent: "#00add8" },
      { name: "GraphQL", level: 88, years: "3y", accent: "#e535ab" },
      { name: "REST APIs", level: 97, years: "5y", accent: "#38bdf8" },
    ],
  },
  {
    id: "ai",
    title: "AI & LLM Engineering",
    desc:
      "RAG pipelines, LLM integration, AI agents and workflow automation",
    icon: Sparkles,
    color: "from-fuchsia-500/30 to-rose-500/20",
    items: [
      { name: "OpenAI GPT", level: 92, years: "2y", accent: "#10b981" },
      { name: "Anthropic Claude", level: 90, years: "2y", accent: "#c084fc" },
      { name: "Google Gemini", level: 85, years: "2y", accent: "#4285f4" },
      { name: "LangChain", level: 90, years: "2y", accent: "#1a7f37" },
      { name: "LangGraph", level: 88, years: "1y", accent: "#38bdf8" },
      { name: "RAG Pipelines", level: 92, years: "2y", accent: "#f97316" },
      { name: "AI Agents", level: 90, years: "2y", accent: "#c084fc" },
      { name: "Vector DBs", level: 85, years: "2y", accent: "#8b5cf6" },
      { name: "n8n Automation", level: 88, years: "2y", accent: "#ea4b71" },
      { name: "Prompt Engineering", level: 92, years: "2y", accent: "#ffffff" },
    ],
  },
  {
    id: "database",
    title: "Databases & Performance",
    desc:
      "Indexing, sharding, replication, query tuning and schema design",
    icon: Database,
    color: "from-sky-500/25 to-indigo-500/20",
    items: [
      { name: "PostgreSQL", level: 94, years: "5y", accent: "#336791" },
      { name: "MongoDB", level: 93, years: "5y", accent: "#00ed64" },
      { name: "MySQL", level: 88, years: "4y", accent: "#00758f" },
      { name: "Redis", level: 90, years: "4y", accent: "#dc382d" },
      { name: "Indexing & Query Tuning", level: 92, years: "5y", accent: "#38bdf8" },
      { name: "Sharding", level: 85, years: "3y", accent: "#a78bfa" },
      { name: "Replication", level: 86, years: "3y", accent: "#22d3ee" },
      { name: "Prisma / TypeORM", level: 90, years: "3y", accent: "#ffffff" },
    ],
  },
  {
    id: "distributed",
    title: "Distributed & Realtime",
    desc:
      "Microservices, message queues, streaming and event-driven systems",
    icon: Boxes,
    color: "from-violet-500/30 to-indigo-500/20",
    items: [
      { name: "Microservices", level: 92, years: "4y", accent: "#a78bfa" },
      { name: "Event-Driven Systems", level: 90, years: "3y", accent: "#38bdf8" },
      { name: "Kafka", level: 82, years: "2y", accent: "#231f20" },
      { name: "WebSockets", level: 92, years: "4y", accent: "#ffffff" },
      { name: "Socket.IO", level: 92, years: "4y", accent: "#010101" },
      { name: "BullMQ Queues", level: 88, years: "3y", accent: "#dc382d" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc:
      "Container orchestration, CI/CD and zero-downtime deployment",
    icon: Cloud,
    color: "from-indigo-500/25 to-violet-500/20",
    items: [
      { name: "AWS (EC2, S3, EBS)", level: 90, years: "4y", accent: "#ff9900" },
      { name: "Docker", level: 92, years: "4y", accent: "#2496ed" },
      { name: "Kubernetes", level: 86, years: "3y", accent: "#326ce5" },
      { name: "Nginx", level: 85, years: "3y", accent: "#009639" },
      { name: "CI/CD Pipelines", level: 90, years: "4y", accent: "#22d3ee" },
      { name: "Vercel", level: 92, years: "3y", accent: "#ffffff" },
      { name: "Heroku", level: 80, years: "3y", accent: "#6762a6" },
      { name: "Render / Netlify", level: 82, years: "2y", accent: "#38bdf8" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    desc:
      "Production React and Next.js interfaces for full-stack products",
    icon: Code2,
    color: "from-violet-500/25 to-fuchsia-500/20",
    items: [
      { name: "React.js", level: 94, years: "5y", accent: "#61dafb" },
      { name: "Next.js", level: 93, years: "3y", accent: "#ffffff" },
      { name: "TypeScript", level: 95, years: "4y", accent: "#3178c6" },
      { name: "Tailwind CSS", level: 92, years: "3y", accent: "#38bdf8" },
      { name: "Framer Motion", level: 82, years: "2y", accent: "#e11d48" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<CategoryId>("backend");
  const current = categories.find((c) => c.id === active)!;

  const total = useMemo(
    () => categories.reduce((n, c) => n + c.items.length, 0),
    []
  );

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills &"
          accent="Expertise"
          subtitle={
            <>
              A senior backend + AI-engineering toolkit — from microservices
              and database internals to RAG pipelines and cloud orchestration.
            </>
          }
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <Stat value={String(total)} label="Technologies" />
          <span className="hidden h-8 w-px bg-white/10 sm:block" />
          <Stat value={String(categories.length)} label="Domains" />
          <span className="hidden h-8 w-px bg-white/10 sm:block" />
          <Stat value="5+" label="Years Experience" />
        </div>

        <div className="-mx-4 mb-10 overflow-x-auto no-scrollbar px-4 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="mx-auto flex w-max max-w-none items-center gap-2 sm:w-auto sm:max-w-4xl sm:flex-wrap sm:justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === active;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  whileHover={{ y: -2 }}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] transition ${
                    isActive
                      ? "border-white/40 bg-white text-black shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)]"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <Icon size={12} />
                  {cat.title}
                  <span
                    className={`grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[10px] ${
                      isActive
                        ? "bg-black/10 text-black/70"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {cat.items.length}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <div className="inline-flex items-center gap-3 text-white/80">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5">
                  <current.icon size={14} />
                </span>
                <span className="text-base sm:text-lg font-light">
                  {current.title}
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-white/50">
                {current.desc}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {current.items.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  bg={current.color}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  bg,
}: {
  skill: Skill;
  index: number;
  bg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/70 p-5 backdrop-blur transition"
    >
      <div
        aria-hidden
        className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${bg}`}
      />
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/[0.03] blur-2xl group-hover:bg-white/[0.06] transition" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div
              className="mb-1 h-8 w-8 rounded-lg border border-white/10"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${skill.accent}55, transparent 60%)`,
              }}
            />
            <div className="text-sm sm:text-base text-white break-words">
              {skill.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              {skill.years} experience
            </div>
          </div>
          <div className="shrink-0 text-xs font-mono text-white/45">
            {skill.level}
          </div>
        </div>

        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-white/90 via-violet-300 to-fuchsia-300"
          />
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-extralight">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
        {label}
      </div>
    </div>
  );
}
