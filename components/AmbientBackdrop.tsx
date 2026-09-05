"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function AmbientBackdrop() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const blobX = useTransform(smx, (v) => v - 260);
  const blobY = useTransform(smy, (v) => v - 260);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400"
        style={{ scaleX }}
      />

      <motion.div
        aria-hidden
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[520px] w-[520px] rounded-full mix-blend-screen blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.35),transparent_60%)]" />
      </motion.div>

      <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_60%)] blur-3xl"
          animate={{ x: [0, 60, -20, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_60%)] blur-3xl"
          animate={{ x: [0, -50, 30, 0], y: [0, -30, 40, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.10),transparent_60%)] blur-3xl"
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div aria-hidden className="pointer-events-none fixed inset-0 z-[2] opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/></svg>\")" }} />
    </>
  );
}
