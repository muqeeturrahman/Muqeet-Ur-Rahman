"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, User2, Sparkles, Play } from "lucide-react";
import { useRef } from "react";

const NAME_FIRST = "Muqeet";
const NAME_LAST = "Ur Rahman";

const STACK = [
  "Node.js",
  "NestJS",
  "Python",
  "FastAPI",
  "Golang",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "Docker",
  "Kubernetes",
  "AWS",
  "LangChain",
  "LangGraph",
  "Vector DBs",
  "RAG",
  "n8n",
];

function AnimatedName() {
  const letters = (word: string, base: number, gradientClass: string) =>
    word.split("").map((ch, i) => (
      <motion.span
        key={`${word}-${i}`}
        aria-hidden
        style={{ whiteSpace: "pre" }}
        className={`hero-name-letter bg-clip-text text-transparent ${gradientClass}`}
        initial={{ y: 80, opacity: 0, rotateX: -35 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{
          delay: base + i * 0.045,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {ch === " " ? " " : ch}
      </motion.span>
    ));

  return (
    <h1
      aria-label={`${NAME_FIRST} ${NAME_LAST}`}
      className="section-title text-[2.75rem] leading-[0.95] xs:text-[3.25rem] sm:text-[4.5rem] lg:text-[6.25rem] xl:text-[7rem]"
      style={{ perspective: 800 }}
    >
      <span aria-hidden className="block">
        {letters(
          NAME_FIRST,
          0.15,
          "bg-gradient-to-br from-white via-white to-white/50"
        )}
      </span>
      <span aria-hidden className="block">
        {letters(
          NAME_LAST,
          0.5,
          "bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300"
        )}
      </span>
    </h1>
  );
}

function MagneticButton({
  children,
  href,
  variant = "outline",
  ariaLabel,
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "outline" | "loom";
  ariaLabel?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classForVariant =
    variant === "solid"
      ? "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-black shadow-[0_20px_50px_-15px_rgba(255,255,255,0.35)] transition-transform"
      : variant === "loom"
      ? "group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-red-500/30 bg-red-500/10 px-5 sm:px-6 py-2.5 sm:py-3 text-sm text-red-100 backdrop-blur-md hover:border-red-400/50 hover:bg-red-500/15 shadow-[0_10px_40px_-15px_rgba(239,68,68,0.5)] transition"
      : "group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 sm:px-6 py-2.5 sm:py-3 text-sm text-white/85 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/25 transition";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={classForVariant}
    >
      {variant === "solid" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 opacity-0 transition duration-700 group-hover:translate-x-0 group-hover:opacity-100"
        />
      )}
      {variant === "loom" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-red-500/30 via-orange-500/20 to-red-500/30 opacity-0 transition duration-700 group-hover:translate-x-0 group-hover:opacity-100"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}

function PhoneFrame() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 90, damping: 12 });
  const sry = useSpring(ry, { stiffness: 90, damping: 12 });
  const tiltX = useTransform(srx, (v) => `${v}deg`);
  const tiltY = useTransform(sry, (v) => `${v}deg`);

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 14);
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ perspective: 1200 }}
      className="relative mx-auto w-[220px] sm:w-[280px] lg:w-[320px]"
    >
      <motion.div
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className="relative aspect-[9/16] w-full"
      >
        <div className="absolute -inset-10 rounded-[3rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(139,92,246,0.35),rgba(56,189,248,0.25),rgba(236,72,153,0.25),rgba(139,92,246,0.35))] opacity-70 blur-3xl animate-glow" />

        <div className="relative h-full w-full rounded-[2.2rem] border border-white/15 bg-neutral-900/70 p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
          <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
          <div className="h-full w-full overflow-hidden rounded-[1.85rem] bg-black">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
            >
              <source src="/intro_edited.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute -left-10 top-10 hidden rounded-2xl border border-white/10 bg-neutral-950/90 px-3 py-2 shadow-2xl backdrop-blur sm:flex sm:items-center sm:gap-2"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
            <Sparkles size={12} />
          </span>
          <div className="text-[10px] leading-tight">
            <div className="text-white/85">Backend + AI</div>
            <div className="text-white/40">Senior Engineer</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{ transform: "translateZ(50px)" }}
          className="absolute -right-6 bottom-16 hidden rounded-2xl border border-white/10 bg-neutral-950/90 px-3 py-2 shadow-2xl backdrop-blur sm:block"
        >
          <div className="flex items-center gap-2 text-[10px] text-white/80">
            <span className="inline-block h-1.5 w-1.5 animate-glow rounded-full bg-violet-400" />
            10k+ DAU
          </div>
          <div className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/40">
            99.9% Uptime
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-10 px-5 pb-24 pt-24 sm:px-6 sm:pt-28 lg:flex-row lg:justify-between lg:gap-12 lg:px-10">
        <div className="w-full text-center lg:max-w-2xl lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/60"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Open for senior roles · 2026
          </motion.div>

          <AnimatedName />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-5 mx-auto max-w-lg text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.22em] text-white/50 lg:mx-0"
          >
            Senior Backend &{" "}
            <span className="text-white/85">AI Full-Stack Engineer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-5 mx-auto max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/70 lg:mx-0"
          >
            5+ years architecting scalable distributed systems, microservices
            and event-driven backends, with production LLM, RAG and AI-agent
            pipelines on top. Handling 10,000+ daily users at 99.9% uptime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <MagneticButton
              href="#projects"
              variant="solid"
              ariaLabel="View case studies"
            >
              View Case Studies
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#about" ariaLabel="Learn more about Muqeet">
              <User2 size={14} />
              About Me
            </MagneticButton>
            <MagneticButton
              href="https://www.loom.com/share/539e00b89a674bf28afc541b650f769d"
              external
              ariaLabel="Watch Loom introduction video"
              variant="loom"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400/60 opacity-75" />
                <span className="relative grid h-4 w-4 place-items-center rounded-full bg-red-500">
                  <Play size={8} className="translate-x-[1px] fill-white text-white" />
                </span>
              </span>
              Watch Loom Intro
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-2">
              {[
                "bg-violet-500",
                "bg-fuchsia-500",
                "bg-indigo-500",
                "bg-emerald-500",
              ].map((c, i) => (
                <div
                  key={i}
                  className={`h-7 w-7 rounded-full border border-black ${c} shadow-[0_0_20px_rgba(139,92,246,0.4)]`}
                />
              ))}
            </div>
            <div className="text-xs text-white/55">
              <span className="text-white">Fintech · Blockchain · AI</span> ·
              production at scale
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="animate-floaty"
        >
          <PhoneFrame />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-[3] overflow-hidden border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="flex gap-10 whitespace-nowrap py-3">
          <motion.div
            className="flex shrink-0 gap-10 pr-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {[...STACK, ...STACK].map((s, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs uppercase tracking-[0.28em] sm:tracking-[0.3em] text-white/40"
              >
                {s} <span className="ml-10 text-white/15">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
