"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-title mt-6 text-4xl sm:text-5xl lg:text-6xl"
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="bg-gradient-to-br from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
              {accent}
            </span>
          </>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-white/60"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
