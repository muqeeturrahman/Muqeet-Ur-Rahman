"use client";

import { motion } from "framer-motion";

const UPWORK_URL = "https://www.upwork.com/freelancers/rohailsystems";

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
        href={UPWORK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-neutral-950/85 py-2 pl-3 pr-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md transition hover:border-white/25"
        aria-label="Hire Me on Upwork"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
          <UpworkGlyph />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-xs font-medium text-emerald-400">
            Hire Me on Upwork
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
            View profile &amp; reviews
          </span>
        </span>
        <span className="ml-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70 group-hover:bg-white/10 transition">
          <UpworkGlyph />
        </span>
      </a>
    </motion.div>
  );
}

function UpworkGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.6 6.6c-2 0-3.6 1.3-4.3 3.4-1.1-1.6-1.9-3.5-2.4-5.3H9.4v6.4a2.6 2.6 0 1 1-5.2 0V4.7H1.6v6.4a5.2 5.2 0 0 0 10.3.9c.7 1.3 1.7 2.6 2.9 3.6l-1.2 5.7h2.7l.9-4.1c.7.4 1.5.7 2.3.7 2.6 0 4.7-2.2 4.7-5.6 0-3.3-2.1-5.7-4.6-5.7Zm0 8.7c-.7 0-1.4-.3-2-.8l.2-1c0-.2.4-2.2 2-2.2 1.1 0 2 1.1 2 2.4 0 1.5-.9 2.6-2.2 2.6Z" />
    </svg>
  );
}
