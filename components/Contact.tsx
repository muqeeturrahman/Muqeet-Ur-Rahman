"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const WHATSAPP_NUMBER_DISPLAY = "+92 300 2203919";
const WHATSAPP_URL = "https://wa.me/923002203919";
const EMAIL = "muqeeturrehman234@gmail.com";
const GITHUB_URL = "https://github.com/muqeeturrahman";
const LINKEDIN_URL = "https://www.linkedin.com/in/muqeet-ur-rahman-141287167/";

interface Channel {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
  accent: string;
  ring: string;
  copyable?: boolean;
  external?: boolean;
}

const channels: Channel[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: WHATSAPP_NUMBER_DISPLAY,
    href: WHATSAPP_URL,
    icon: MessageCircle,
    accent: "from-emerald-500/25 via-emerald-500/10 to-transparent",
    ring: "shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]",
    external: true,
  },
  {
    id: "email",
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    ring: "shadow-[0_0_40px_-10px_rgba(167,139,250,0.5)]",
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "muqeeturrahman",
    href: GITHUB_URL,
    icon: Github,
    accent: "from-white/15 via-white/5 to-transparent",
    ring: "shadow-[0_0_40px_-10px_rgba(255,255,255,0.35)]",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/muqeet-ur-rahman",
    href: LINKEDIN_URL,
    icon: Linkedin,
    accent: "from-sky-500/25 via-blue-500/10 to-transparent",
    ring: "shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Ambient decorative gradient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15),transparent_60%)] blur-3xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build"
          accent="Something Real"
          subtitle="Available for senior full-stack and AI-engineering engagements. Fastest reply via WhatsApp. Expect a response the same day."
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <StatusChip
            icon={Clock}
            label="Response < 24h"
            dot="bg-emerald-400"
          />
          <StatusChip icon={MapPin} label="Karachi · PKT (UTC+5)" />
          <StatusChip icon={Phone} label="Timezone-flexible" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((ch, i) => (
            <ChannelCard key={ch.id} channel={ch} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/60 p-6 sm:p-10 text-center backdrop-blur"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_50%)]"
          />
          <div className="relative">
            <p className="mx-auto max-w-2xl text-lg sm:text-xl font-extralight text-white/80 leading-relaxed">
              Have a scalability challenge, an AI product idea, or a backend
              that&apos;s buckling under load?
            </p>
            <p className="mt-2 text-sm text-white/50">
              Let&apos;s scope it out and I&apos;ll respond with concrete next steps.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-[0_20px_50px_-15px_rgba(16,185,129,0.5)] transition"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <MessageCircle size={16} />
                  WhatsApp Me
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/85 backdrop-blur transition hover:bg-white/[0.08] hover:border-white/25"
              >
                <Mail size={14} />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatusChip({
  icon: Icon,
  label,
  dot,
}: {
  icon: typeof Clock;
  label: string;
  dot?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60"
    >
      {dot && <span className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`} />}
      <Icon size={11} />
      {label}
    </motion.span>
  );
}

function ChannelCard({ channel, index }: { channel: Channel; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 15 });
  const sry = useSpring(ry, { stiffness: 120, damping: 15 });
  const tiltX = useTransform(srx, (v) => `${v}deg`);
  const tiltY = useTransform(sry, (v) => `${v}deg`);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(255,255,255,0.08), transparent 60%)`;

  const [copied, setCopied] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 5);
    rx.set(-py * 5);
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(channel.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  const Icon = channel.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
    >
      <motion.a
        href={channel.href}
        target={channel.external ? "_blank" : undefined}
        rel={channel.external ? "noopener noreferrer" : undefined}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
        }}
        className={`group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/70 p-6 backdrop-blur transition-all duration-300 hover:border-white/25 hover:${channel.ring}`}
      >
        <div
          aria-hidden
          className={`absolute inset-0 -z-[1] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${channel.accent}`}
        />
        <motion.div
          aria-hidden
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl transition group-hover:bg-white/[0.06]" />

        <div style={{ transform: "translateZ(30px)" }} className="relative">
          <div className="mb-5 flex items-start justify-between">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition group-hover:bg-white/10 group-hover:text-white">
              <Icon size={20} />
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-white/40 transition group-hover:text-white/70">
              {channel.external ? "Open" : "Send"}
              <ArrowUpRight
                size={12}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            {channel.label}
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="truncate text-base sm:text-lg text-white">
              {channel.value}
            </div>
            {channel.copyable && (
              <button
                onClick={handleCopy}
                aria-label={`Copy ${channel.label}`}
                className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-white/60 transition hover:bg-white/[0.08] hover:text-white"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </button>
            )}
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/40">
            <span>
              {channel.id === "whatsapp"
                ? "Fastest · same-day reply"
                : channel.id === "email"
                ? "Detailed briefs welcome"
                : channel.id === "github"
                ? "Code, projects & OSS"
                : "Professional history"}
            </span>
            <span className="inline-flex items-center gap-1 text-white/50">
              <span className="inline-block h-1.5 w-1.5 animate-glow rounded-full bg-emerald-400" />
              Active
            </span>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
}
