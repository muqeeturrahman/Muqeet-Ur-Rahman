"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Case Studies" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const opts = { rootMargin: "-40% 0px -55% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, opts);
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-black/60 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
          <button
            onClick={() => jump("home")}
            className="text-sm tracking-wide text-white/90 hover:text-white transition"
            aria-label="Go to home"
          >
            <span className="font-medium">Muqeet</span>{" "}
            <span className="text-white/60">Ur Rahman</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => jump(l.id)}
                aria-label={`Navigate to ${l.label}`}
                className={`relative px-3 lg:px-4 py-2 text-[11px] lg:text-xs uppercase tracking-[0.18em] lg:tracking-[0.2em] transition ${
                  active === l.id
                    ? "text-white"
                    : "text-white/55 hover:text-white/85"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute left-3 right-3 lg:left-4 lg:right-4 -bottom-0.5 h-px bg-white" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-24 flex max-w-sm flex-col items-center gap-2 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  onClick={() => jump(l.id)}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
                    active === l.id
                      ? "border-white/25 bg-white/10 text-white"
                      : "border-white/8 bg-white/[0.03] text-white/70"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    0{i + 1}
                  </div>
                  <div className="mt-1 text-lg font-light">{l.label}</div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
