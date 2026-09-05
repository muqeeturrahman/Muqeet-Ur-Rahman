import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923002203919";
const EMAIL = "muqeeturrehman234@gmail.com";
const GITHUB_URL = "https://github.com/muqeeturrahman";
const LINKEDIN_URL = "https://www.linkedin.com/in/muqeet-ur-rahman-141287167/";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h3 className="text-2xl font-light">
              Muqeet <span className="text-white/60">Ur Rahman</span>
            </h3>
            <p className="mt-2 text-sm text-white/55">
              Senior Backend &amp; AI Full-Stack Engineer
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-500/15"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:bg-white/[0.06]"
                aria-label="Send email"
              >
                <Mail size={14} />
                Email
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/85 transition hover:bg-white/[0.06]"
              >
                <Github size={14} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/85 transition hover:bg-white/[0.06]"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-white/55">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for engagements
            </div>
            <p className="mt-4 text-xs text-white/45">
              Karachi, Pakistan · Remote-friendly
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Muqeet Ur Rahman. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
