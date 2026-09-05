export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h3 className="text-2xl font-light">
              Muqeet <span className="text-white/60">Ur Rahman</span>
            </h3>
            <p className="mt-2 text-sm text-white/55">
              Full-Stack Engineer &amp; AI Automation Architect
            </p>
            <a
              href="https://www.linkedin.com/in/muqeet-ur-rahman-141287167"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/85 hover:bg-white/[0.06] transition"
            >
              LinkedIn
              <span className="text-white/40">→</span>
            </a>
          </div>

          <div className="text-left lg:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available on Upwork
            </div>
            <p className="mt-4 text-xs text-white/45">
              Designed &amp; developed with care
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <p>Built with Next.js &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
