"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  GraduationCap,
  Presentation,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  summary: string;
  detail?: string;
  icon: typeof Briefcase;
  current?: boolean;
}

const timeline: TimelineItem[] = [
  {
    date: "January 2026 — Present",
    title: "Full-Stack Engineer",
    company: "Right Tail Corporation",
    summary:
      "Building production web platforms and mobile apps end-to-end — a Shopify profit-analytics SaaS, a zero-fee event-ticketing platform with native iOS/Android apps, an AI daily-planner app, an e-commerce storefront and an AI Instrument Finder chatbot powered by a Gemini + OpenAI RAG pipeline.",
    detail:
      "Owning full delivery: schema design, API contracts, real-time features, mobile builds and cloud deployment. Working closely with product to translate business goals into shipped features.",
    icon: Presentation,
    current: true,
  },
  {
    date: "2025",
    title: "Full-Stack Engineer",
    company: "Saasifylabs",
    summary:
      "Shipped full-stack features across several SaaS products — a real-time seat-map ticketing engine, a multi-vertical commerce platform, multi-site API syndication and a WebGL 3D character customizer.",
    detail:
      "Built with Next.js, NestJS, PostgreSQL and Redis; contributed to authorization, background jobs and real-time concurrency patterns used across the product line.",
    icon: Briefcase,
  },
  {
    date: "2024",
    title: "Full-Stack Engineer",
    company: "Madi Devs",
    summary:
      "Built full-stack web applications for clients — an EdTech LMS with real-time chat and Google Classroom integration, and an enterprise billing dashboard with automated PDF invoicing.",
    detail:
      "Focused on API design, real-time features and reliability. Introduced structured logging, background job workflows and a shared UI kit.",
    icon: Briefcase,
  },
  {
    date: "2023",
    title: "Frontend Engineer (Contract)",
    company: "Pakistan Post Headquarters, Islamabad",
    summary:
      "Led the frontend modernization of the Pakistan Post public web platform — a React + Tailwind rebuild with real-time parcel tracking and a caching layer over the REST API.",
    detail:
      "Delivered a fully redesigned public site with improved Core Web Vitals, accessibility, and a maintainable component system.",
    icon: Briefcase,
  },
  {
    date: "2021 — 2025",
    title: "B.Sc. Computer Science",
    company: "COMSATS University Islamabad",
    summary:
      "Core coursework in Data Structures & Algorithms, Distributed Systems, Database Management and Software Engineering — applied directly to client projects throughout the degree.",
    icon: GraduationCap,
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
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Journey"
          title="Professional"
          accent="Experience"
          subtitle="Roles, launches and learning — a timeline of shipping real product across companies, verticals and continents."
        />

        <div className="mb-10 flex items-center justify-center gap-8">
          <Stat icon={Briefcase} value={String(timeline.length)} label="Positions" />
          <div className="h-8 w-px bg-white/10" />
          <Stat icon={Calendar} value="4+" label="Years Active" />
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/60">
            <span className="inline-block h-1.5 w-1.5 animate-glow rounded-full bg-emerald-400" />
            Currently Growing
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/15 to-white/0 lg:left-1/2" />

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
  const [open, setOpen] = useState(false);
  const Icon = item.icon;
  const alignRight = index % 2 === 1;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-16 lg:pl-0"
    >
      <div
        className={`absolute left-0 top-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-neutral-900 lg:left-1/2 lg:-translate-x-1/2 ${
          item.current ? "ring-2 ring-emerald-400/40" : ""
        }`}
      >
        <Icon size={16} className="text-white/85" />
      </div>

      <div
        className={`lg:grid lg:grid-cols-2 lg:gap-10 ${
          alignRight ? "" : ""
        }`}
      >
        <div className={alignRight ? "lg:col-start-2" : "lg:col-start-1"}>
          <div
            className={`card-panel p-5 sm:p-6 ${
              alignRight ? "lg:ml-8" : "lg:mr-8"
            }`}
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/40" />
              {item.date}
            </div>
            <h3 className="mt-3 text-xl font-light">{item.title}</h3>
            <p className="mt-1 text-sm text-white/70">
              <span className="text-white/40">•</span> {item.company}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {item.summary}
            </p>
            {item.detail && (
              <>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {item.detail}
                  </p>
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
