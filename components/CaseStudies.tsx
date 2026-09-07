"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Category = "all" | "ai" | "fullstack" | "frontend";

interface Project {
  title: string;
  role: string;
  company: string;
  summary: string;
  metric: { value: string; label: string };
  liveUrl?: string;
  category: Exclude<Category, "all">;
  stack: string[];
  accent: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Senoa",
    role: "Full-Stack · Blockchain",
    company: "Senoa",
    summary:
      "Crypto-fintech platform for fiat-to-crypto and crypto-to-fiat transactions with secure payment and KYC flows.",
    metric: { value: "Fiat ↔ Crypto", label: "Payments" },
    liveUrl: "https://senoaapp.com/",
    category: "fullstack",
    stack: ["Node.js", "Blockchain", "Crypto", "KYC"],
    accent: "from-emerald-500/40 via-cyan-500/25 to-transparent",
    featured: true,
  },
  {
    title: "Chubb's Army",
    role: "Full-Stack · Video Platform",
    company: "Chubb's Army",
    summary:
      "High-performance social video platform with aggressive video preloading and caching for near-instant playback.",
    metric: { value: "Preloaded", label: "Video Delivery" },
    liveUrl: "https://www.chubbsarmy.com/",
    category: "fullstack",
    stack: ["Next.js", "Node.js", "Video Streaming", "Caching"],
    accent: "from-orange-500/40 via-rose-500/25 to-transparent",
  },

  {
    title: "Edbanz",
    role: "Full-Stack · Academic CMS",
    company: "Edbanz",
    summary:
      "Academic lifecycle platform connecting administration, teachers and students across branches, classrooms and operations.",
    metric: { value: "Multi-Branch", label: "Architecture" },
    liveUrl: "https://edbanz.com/",
    category: "fullstack",
    stack: ["Next.js", "Node.js", "MongoDB", "WebSockets"],
    accent: "from-blue-500/40 via-cyan-500/25 to-transparent",
  },

  {
    title: "Wondrfly",
    role: "Full-Stack · Scalable Backend",
    company: "Wondrfly",
    summary:
      "Scalable kids-program platform processing thousands of programs and supporting complex activity, provider and discovery workflows.",
    metric: { value: "1000s", label: "Programs" },
    liveUrl: "https://wondrfly.com",
    category: "fullstack",
    stack: ["Node.js", "NestJS", "MongoDB", "AWS","n8n"],
    accent: "from-violet-500/40 via-indigo-500/25 to-transparent",
  },
  {
    title: "FikaDuka",
    role: "Full-Stack · B2B Commerce",
    company: "FikaDuka",
    summary:
      "B2B commerce platform connecting vendors, distributors and retailers with streamlined wholesale ordering and product management.",
    metric: { value: "B2B", label: "Commerce Platform" },
    liveUrl: "https://www.fikaduka.com/",
    category: "fullstack",
    stack: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
    accent: "from-orange-500/40 via-amber-500/25 to-transparent",
  },
  {
    title: "TestPower",
    role: "Full-Stack · RAG Pipeline",
    company: "Right Tail Corporation",
    summary:
      "AI-powered instrument discovery platform with document ingestion, embeddings and retrieval across 400+ products.",
    metric: { value: "400+", label: "Instruments Indexed" },
    liveUrl: "https://www.testpower.se/",
    category: "fullstack",
    stack: ["Next.js", "Node.js", "Gemini", "OpenAI", "RAG"],
    accent: "from-fuchsia-500/40 via-rose-500/25 to-transparent",
  },

{
  title: "BioYapp",
  role: "Full-Stack · Social Platform",
  company: "Dignite Studios",
  summary:
    "Pharmaceutical social platform combining professional networking, diverse content feeds, job boards and community-driven interactions.",
  metric: { value: "Multi-Feature", label: "Social Platform" },
  category: "fullstack",
  stack: ["React Native", "Node.js", "MongoDB", "REST API"],
  accent: "from-blue-500/35 via-cyan-500/20 to-transparent",
},

 {
  title: "AI Escrow Assistant",
  role: "Full-Stack · AI Agent",
  company: "Client Engagement",
  summary:
    "AI-powered payment assistant for transaction workflows, KYC checks and escrow operations.",
  metric: { value: "AI Agent", label: "Payments" },
  category: "ai",
  stack: ["NestJS", "LLM", "Agents", "Stripe"],
  accent: "from-indigo-500/40 via-violet-500/25 to-transparent",
},
{
  title: "Academic AI Copilot",
  role: "Full-Stack · AI Platform",
  company: "Madi Devs",
  summary:
    "AI-driven academic platform connecting student data, learning workflows and intelligent insights.",
  metric: { value: "AI Copilot", label: "Academics" },
  category: "ai",
  stack: ["Next.js", "NestJS", "LLM", "MongoDB"],
  accent: "from-sky-500/40 via-blue-500/20 to-transparent",
},

{
  title: "AI Billing Agent",
  role: "Full-Stack · AI Automation",
  company: "Madi Devs",
  summary:
    "AI agent automating billing workflows, invoice generation, subscription events and reconciliation.",
  metric: { value: "AI Agent", label: "Automation" },
  category: "ai",
  stack: ["Next.js", "NestJS", "LLM", "PostgreSQL"],
  accent: "from-amber-500/35 via-orange-500/20 to-transparent",
},

{
  title: "Ad Revenue Intelligence Agent",
  role: "Full-Stack · AI Agent",
  company: "Right Tail Corporation",
  summary:
    "AI agent analyzing Shopify and advertising data to surface revenue, cost and profit insights.",
  metric: { value: "AI Agent", label: "Revenue" },
  category: "ai",
  stack: ["Next.js", "NestJS", "LLM", "Shopify API"],
  accent: "from-lime-500/35 via-emerald-500/20 to-transparent",
},

{
  title: "RAG Ticketing Assistant",
  role: "Full-Stack · RAG",
  company: "Right Tail Corporation",
  summary:
    "Retrieval-augmented assistant for event data, ticketing workflows and organizer operations.",
  metric: { value: "RAG", label: "Knowledge" },
  category: "ai",
  stack: ["Next.js", "NestJS", "OpenAI", "Vector DB"],
  accent: "from-cyan-500/35 via-sky-500/20 to-transparent",
},

{
  title: "AI Commerce Agent",
  role: "Full-Stack · AI Automation",
  company: "Saasifylabs",
  summary:
    "AI-powered commerce agent for product discovery, tenant operations and automated business workflows.",
  metric: { value: "Agentic", label: "Commerce" },
  category: "ai",
  stack: ["Next.js", "NestJS", "LLM", "PostgreSQL"],
  accent: "from-purple-500/35 via-fuchsia-500/20 to-transparent",
},
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI-Powered" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend & 3D" },
];

export default function CaseStudies() {
  const [active, setActive] = useState<Category>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  const totalTech = useMemo(
    () => new Set(projects.flatMap((p) => p.stack)).size,
    []
  );

  return (
    <section
      id="projects"
      aria-label="Case Studies"
      className="relative w-full overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Case Studies"
          title="Featured"
          accent="Work"
          subtitle="Production platforms across fintech, blockchain, commerce and AI. Systems engineered for real-world scale."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <Metric value={String(projects.length)} label="Projects" />
          <span className="hidden h-8 w-px bg-white/10 sm:block" />
          <Metric value={`${totalTech}+`} label="Technologies" />
          <span className="hidden h-8 w-px bg-white/10 sm:block" />
          <Metric value="5+" label="Years Shipping" />
        </div>

        <div className="-mx-4 mb-10 overflow-x-auto no-scrollbar px-4 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="mx-auto flex w-max max-w-none items-center gap-2 sm:w-auto sm:max-w-2xl sm:flex-wrap sm:justify-center">
            {filters.map((f) => {
              const count =
                f.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === f.id).length;
              const isActive = active === f.id;
              return (
                <motion.button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  whileHover={{ y: -2 }}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] transition ${
                    isActive
                      ? "border-white/40 bg-white text-black"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {f.label}
                  <span
                    className={`grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[10px] ${
                      isActive
                        ? "bg-black/10 text-black/70"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {featured && <FeaturedCard project={featured} />}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <ProjectTile key={p.title} project={p} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 90, damping: 14 });
  const sry = useSpring(ry, { stiffness: 90, damping: 14 });
  const tiltX = useTransform(srx, (v) => `${v}deg`);
  const tiltY = useTransform(sry, (v) => `${v}deg`);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 6);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };
  return { ref, onMove, onLeave, tiltX, tiltY };
}

function FeaturedCard({ project }: { project: Project }) {
  const { ref, onMove, onLeave, tiltX, tiltY } = useTilt();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1200 }}
    >
      <motion.article
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/70 backdrop-blur transition"
      >
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br opacity-70 ${project.accent}`}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,0),rgba(255,255,255,0.06),transparent_60%)]"
        />

        <div className="relative grid gap-6 p-6 sm:gap-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white/60">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Featured Project
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white/40">
                {project.category === "ai"
                  ? "AI · Automation"
                  : project.category === "frontend"
                    ? "Frontend · 3D"
                    : "Full-Stack Platform"}
              </span>
            </div>

            <h3 className="text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <div className="mt-2 text-sm text-white/60">
              {project.role} · {project.company}
            </div>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-black transition hover:bg-white/85"
                >
                  Live Site
                  <ExternalLink size={14} />
                </a>
              )}
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-white/85 backdrop-blur hover:bg-white/[0.08] transition">
                Read Case Study
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent blur-2xl"
            />
            <div
              style={{ transform: "translateZ(40px)" }}
              className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-neutral-950/60 p-5 sm:p-6 backdrop-blur"
            >
              <div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white/40">
                  Signature Metric
                </div>
                <div className="mt-2 bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-3xl font-extralight text-transparent sm:text-5xl lg:text-6xl">
                  {project.metric.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-white/60">
                  {project.metric.label}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {["Architecture", "Delivery", "Impact"].map((k, i) => (
                  <div key={k} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70">
                      {i + 1}
                    </span>
                    <span className="text-white/80">{k}</span>
                    <div className="flex-1" />
                    <span className="h-1 w-16 overflow-hidden rounded-full bg-white/5">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: ["85%", "95%", "90%"][i] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        className="block h-full rounded-full bg-gradient-to-r from-white/80 to-violet-300"
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ProjectTile({ project, index }: { project: Project; index: number }) {
  const { ref, onMove, onLeave, tiltX, tiltY } = useTilt();

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
    >
      <motion.article
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-neutral-950/60 p-6 backdrop-blur transition hover:border-white/20"
      >
        <div
          aria-hidden
          className={`absolute inset-0 -z-[1] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${project.accent}`}
        />
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl transition group-hover:bg-white/[0.06]" />

        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
          <Layers size={12} /> Case Study
        </div>

        <h3 className="text-xl font-light">{project.title}</h3>
        <div className="mt-1 text-[12px] text-white/60">
          {project.role} · {project.company}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/65">
          {project.summary}
        </p>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-2xl font-extralight text-white">
            {project.metric.value}
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            {project.metric.label}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[10px] text-white/60"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[10px] text-white/40">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-xs text-white/70 transition hover:text-white"
          >
            View live <ArrowUpRight size={12} className="transition group-hover:translate-x-0.5" />
          </a>
        )}
      </motion.article>
    </motion.div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-extralight">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
        {label}
      </div>
    </div>
  );
}
