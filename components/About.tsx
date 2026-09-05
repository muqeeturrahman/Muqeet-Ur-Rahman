"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
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
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import CountUp from "./CountUp";

const coreDomains = [
  { icon: Server, label: "Distributed Backend Architecture" },
  { icon: Database, label: "DB Indexing, Sharding & Replication" },
  { icon: Bot, label: "LLMs, RAG & AI Agent Orchestration" },
  { icon: Workflow, label: "Event-Driven Systems & n8n" },
  { icon: ShieldCheck, label: "API Security, JWT & RBAC" },
  { icon: Users, label: "Fintech, Payments & Blockchain" },
];

const stats = [
  {
    value: "40%",
    label: "API latency reduction (indexing + query tuning)",
  },
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
    accent: "from-emerald-500/25 via-teal-500/15 to-transparent",
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
    accent: "from-sky-500/25 via-indigo-500/15 to-transparent",
  },
  {
    icon: Sparkles,
    title: "AI & RAG Pipelines",
    body: "LLM integrations, LangChain / LangGraph RAG chatbots, AI agents, vector databases and n8n workflow automation.",
    tags: ["LangChain", "LangGraph", "Vector DBs", "AI Agents", "n8n"],
    accent: "from-fuchsia-500/25 via-rose-500/15 to-transparent",
  },
  {
    icon: Layers,
    title: "Microservices & Events",
    body: "Event-driven architectures with Kafka, BullMQ queues, WebSockets and message-based service communication.",
    tags: ["Microservices", "Kafka", "BullMQ", "WebSockets", "Event-Driven"],
    accent: "from-violet-500/25 via-indigo-500/15 to-transparent",
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps",
    body: "AWS Elastic Beanstalk, Docker, Kubernetes and CI/CD pipelines with zero-downtime deployments and auto-scaling.",
    tags: ["AWS", "Docker", "Kubernetes", "Nginx", "CI/CD"],
    accent: "from-amber-500/25 via-orange-500/15 to-transparent",
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
    accent: "from-cyan-500/25 via-sky-500/15 to-transparent",
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

      {/* Decorative floating orbs specific to this section */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_60%)] blur-3xl"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="About Me"
          title="Engineering Partner,"
          accent="Not Just a Developer"
          subtitle="Five years of shipping backend + AI at scale — turning ambiguous briefs into architected systems that ship, scale and stay up."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left column: bio + chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <RevealParagraph delay={0.05}>
              I&apos;m <span className="text-white">Muqeet Ur Rahman</span>, a
              senior full-stack engineer with 5+ years architecting scalable,
              high-performance distributed systems for fintech, blockchain and
              AI. I work from database internals up through API contracts,
              AI-agent pipelines and cloud infrastructure.
            </RevealParagraph>

            <RevealParagraph delay={0.15} muted>
              Deep backend fundamentals in Node.js, NestJS, Python, FastAPI and
              Golang — with production LLM integration (GPT, Claude, Gemini),
              RAG chatbots built on LangChain and LangGraph, and AI agents for
              workflow automation. Shipped systems handling 10,000+ daily
              users at 99.9% uptime.
            </RevealParagraph>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 pt-2"
            >
              <span className="chip">Karachi, Pakistan</span>
              <span className="text-white/30">•</span>
              <span className="chip">Available for Remote Engagements</span>
              <span className="text-white/30">•</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300 hover:bg-emerald-500/15 transition"
              >
                Let&apos;s talk
                <ArrowUpRight size={11} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column: domains + stats */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.28em] text-white/60"
            >
              Core Engineering Domains
            </motion.h3>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {coreDomains.map(({ icon: Icon, label }, i) => (
                <SpotlightDomainCard key={label} icon={Icon} label={label} index={i} />
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 p-5 backdrop-blur"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.15),transparent_60%)] blur-2xl"
              />
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.28em] text-white/60">
                  By the Numbers
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                  Production Impact
                </div>
              </div>
              <ul className="space-y-3">
                {stats.map((s, i) => (
                  <motion.li
                    key={s.label}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.05 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-[10px] text-emerald-300">
                      <Check size={12} />
                    </span>
                    <p className="text-sm text-white/75">
                      <CountUp
                        value={s.value}
                        className="bg-gradient-to-br from-white to-violet-200 bg-clip-text font-medium text-transparent"
                      />{" "}
                      <span className="text-white/60">{s.label}</span>
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* What I Engineer */}
        <div className="mt-20 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="eyebrow">Capabilities</span>
              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-tight">
                What I{" "}
                <span className="bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
                  Engineer
                </span>
              </h3>
            </div>
            <div className="hidden flex-1 items-center gap-6 sm:flex">
              <div className="divider-line flex-1" />
              <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-white/40">
                6 Focus Areas
              </span>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCards.map((card, i) => (
              <EngineeringCard key={card.title} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- Small pieces below -------- */

function RevealParagraph({
  children,
  delay = 0,
  muted = false,
}: {
  children: React.ReactNode;
  delay?: number;
  muted?: boolean;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${muted ? "text-white/60" : "text-white/80"} leading-relaxed`}
    >
      {children}
    </motion.p>
  );
}

function SpotlightDomainCard({
  icon: Icon,
  label,
  index,
}: {
  icon: typeof Server;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const bg = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, rgba(167,139,250,0.15), transparent 60%)`;

  return (
    <motion.li
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: 0.05 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 transition"
    >
      <motion.div
        aria-hidden
        style={{ background: bg }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-white/80 transition group-hover:bg-violet-500/15 group-hover:text-white">
          <Icon size={16} />
        </span>
        <span className="text-sm text-white/85">{label}</span>
      </div>
    </motion.li>
  );
}

function EngineeringCard({
  card,
  index,
}: {
  card: {
    icon: typeof Server;
    title: string;
    body: string;
    tags: string[];
    accent: string;
  };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 15 });
  const sry = useSpring(ry, { stiffness: 120, damping: 15 });
  const tiltX = useTransform(srx, (v) => `${v}deg`);
  const tiltY = useTransform(sry, (v) => `${v}deg`);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(255,255,255,0.06), transparent 60%)`;

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 6);
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.article
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="relative h-full overflow-hidden rounded-2xl border border-white/8 bg-neutral-950/60 p-5 sm:p-6 backdrop-blur transition-colors duration-300 hover:border-white/20"
      >
        <div
          aria-hidden
          className={`absolute inset-0 -z-[1] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${card.accent}`}
        />
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/[0.02] blur-3xl transition group-hover:bg-white/[0.05]" />

        <div style={{ transform: "translateZ(30px)" }} className="relative">
          <div className="mb-4 flex items-center justify-between">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/85 shadow-inner transition group-hover:bg-white/10">
              <Icon size={18} />
            </div>
            <span className="text-[9px] uppercase tracking-[0.28em] text-white/30 transition group-hover:text-white/60">
              0{index + 1}
            </span>
          </div>
          <h4 className="text-lg text-white">{card.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {card.body}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {card.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-1 text-[11px] text-white/70 transition group-hover:border-white/20"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
}
