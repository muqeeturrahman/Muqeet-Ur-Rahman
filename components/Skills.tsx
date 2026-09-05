"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Cloud,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type CategoryId = "frontend" | "backend" | "database" | "ai" | "cloud";

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
    id: "frontend",
    title: "Frontend & Mobile",
    desc: "Interfaces, motion and cross-platform apps",
    icon: Code2,
    color: "from-violet-500/30 to-fuchsia-500/20",
    items: [
      { name: "React", level: 95, years: "4y", accent: "#61dafb" },
      { name: "Next.js", level: 95, years: "3y", accent: "#ffffff" },
      { name: "React Native", level: 88, years: "2y", accent: "#61dafb" },
      { name: "TypeScript", level: 93, years: "4y", accent: "#3178c6" },
      { name: "Tailwind CSS", level: 96, years: "3y", accent: "#38bdf8" },
      { name: "Framer Motion", level: 88, years: "2y", accent: "#e11d48" },
      { name: "Three.js", level: 74, years: "2y", accent: "#ffffff" },
      { name: "Redux", level: 85, years: "3y", accent: "#764abc" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    desc: "Services, gateways and background systems",
    icon: Server,
    color: "from-emerald-500/25 to-teal-500/20",
    items: [
      { name: "Node.js", level: 94, years: "4y", accent: "#8cc84b" },
      { name: "NestJS", level: 90, years: "3y", accent: "#e0234e" },
      { name: "Express", level: 92, years: "4y", accent: "#ffffff" },
      { name: "GraphQL", level: 82, years: "2y", accent: "#e535ab" },
      { name: "REST APIs", level: 96, years: "4y", accent: "#38bdf8" },
    ],
  },
  {
    id: "database",
    title: "Data & Storage",
    desc: "Modeling, indexing and query performance",
    icon: Database,
    color: "from-sky-500/25 to-indigo-500/20",
    items: [
      { name: "PostgreSQL", level: 92, years: "3y", accent: "#336791" },
      { name: "MongoDB", level: 93, years: "4y", accent: "#00ed64" },
      { name: "MySQL", level: 85, years: "3y", accent: "#00758f" },
      { name: "Redis", level: 82, years: "2y", accent: "#dc382d" },
      { name: "Prisma", level: 88, years: "2y", accent: "#ffffff" },
      { name: "Mongoose", level: 90, years: "3y", accent: "#8b0000" },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    desc: "Agents, RAG pipelines and workflow orchestration",
    icon: Sparkles,
    color: "from-fuchsia-500/30 to-rose-500/20",
    items: [
      { name: "Claude AI", level: 92, years: "2y", accent: "#c084fc" },
      { name: "OpenAI", level: 90, years: "2y", accent: "#10b981" },
      { name: "n8n", level: 88, years: "2y", accent: "#ea4b71" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    desc: "Deployment, edge and container orchestration",
    icon: Cloud,
    color: "from-indigo-500/25 to-violet-500/20",
    items: [
      { name: "Google Cloud", level: 82, years: "2y", accent: "#4285f4" },
      { name: "AWS", level: 78, years: "2y", accent: "#ff9900" },
      { name: "Vercel", level: 94, years: "3y", accent: "#ffffff" },
      { name: "Docker", level: 84, years: "3y", accent: "#2496ed" },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState<CategoryId>("frontend");
  const current = categories.find((c) => c.id === active)!;

  const total = useMemo(
    () => categories.reduce((n, c) => n + c.items.length, 0),
    []
  );

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative w-full overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills &"
          accent="Expertise"
          subtitle={
            <>
              An honest map of the tools I ship with day to day. Hover a card
              for depth &middot; click a category to switch domains.
            </>
          }
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-8">
          <Stat value={String(total)} label="Technologies" />
          <span className="h-8 w-px bg-white/10" />
          <Stat value={String(categories.length)} label="Domains" />
          <span className="h-8 w-px bg-white/10" />
          <Stat value="4+" label="Years Experience" />
        </div>

        <div className="mx-auto mb-12 flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === active;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                whileHover={{ y: -2 }}
                className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  isActive
                    ? "border-white/40 bg-white text-black shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)]"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon size={14} />
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
                <span className="text-lg font-light">{current.title}</span>
              </div>
              <p className="mt-2 text-sm text-white/50">{current.desc}</p>
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
        delay: index * 0.05,
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
        <div className="flex items-start justify-between">
          <div>
            <div
              className="mb-1 h-8 w-8 rounded-lg border border-white/10"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${skill.accent}55, transparent 60%)`,
              }}
            />
            <div className="text-base text-white">{skill.name}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              {skill.years} experience
            </div>
          </div>
          <div className="text-xs font-mono text-white/45">{skill.level}</div>
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
      <div className="text-3xl font-extralight">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
        {label}
      </div>
    </div>
  );
}
