"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/muqeet-ur-rahman-141287167/";

export default function UpworkCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my LinkedIn profile"
        className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-sky-400/25 bg-neutral-950/85 py-2 pl-3 pr-4 shadow-[0_20px_60px_-15px_rgba(56,189,248,0.35)] backdrop-blur-md transition hover:border-sky-400/60 hover:shadow-[0_20px_60px_-10px_rgba(56,189,248,0.55)]"
      >
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-sky-500/15 via-blue-500/15 to-sky-500/15 opacity-0 transition duration-700 group-hover:translate-x-0 group-hover:opacity-100"
        />

        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/25">
          <Linkedin size={14} className="fill-sky-300" />
        </span>

        <span className="relative flex flex-col leading-tight">
          <span className="text-xs font-medium text-sky-300">
            Connect on LinkedIn
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">
            View profile &amp; experience
          </span>
        </span>

        <span className="relative ml-1 grid h-7 w-7 place-items-center rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-300 transition group-hover:bg-sky-500/20">
          <ArrowUpRight size={12} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </a>
    </motion.div>
  );
}
