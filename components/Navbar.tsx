"use client";

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

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => jump("home")}
          className="text-sm tracking-wide text-white/90 hover:text-white transition"
          aria-label="Go to home"
        >
          <span className="font-medium">Rohail</span>{" "}
          <span className="text-white/60">Ahmed</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => jump(l.id)}
              aria-label={`Navigate to ${l.label}`}
              className={`relative px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                active === l.id
                  ? "text-white"
                  : "text-white/55 hover:text-white/85"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-white" />
              )}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => {
              const nextIndex =
                (links.findIndex((l) => l.id === active) + 1) % links.length;
              jump(links[nextIndex].id);
            }}
            className="text-xs uppercase tracking-[0.2em] text-white/70"
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
