import { Mail, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppLink, buildMailtoLink } from "@/lib/site-config";
import { Logo } from "./Logo";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Our Courses" },
  { href: "#teachers", label: "Our Teachers" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-dark text-cream-warm">
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C6A45C 0 1px, transparent 1px 18px), repeating-linear-gradient(-45deg, #C6A45C 0 1px, transparent 1px 18px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 max-w-md">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-cream-warm/75">
              {siteConfig.tagline}. {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-elegant">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-cream-warm/80 hover:text-gold-elegant transition"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-elegant">
              Courses
            </p>
            <ul className="mt-5 space-y-3">
              {siteConfig.courses.map((c) => (
                <li key={c.id}>
                  <a
                    href="#courses"
                    className="text-sm text-cream-warm/80 hover:text-gold-elegant transition"
                  >
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-cream-warm/15 bg-emerald-deep/60 px-4 py-3 text-sm font-medium text-cream-warm hover:border-gold-elegant/40"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            WhatsApp: {siteConfig.whatsapp.display}
          </a>
          <a
            href={buildMailtoLink()}
            className="flex items-center gap-3 rounded-xl border border-cream-warm/15 bg-emerald-deep/60 px-4 py-3 text-sm font-medium text-cream-warm hover:border-gold-elegant/40"
          >
            <Mail size={18} className="text-gold-elegant" />
            Email: {siteConfig.email.display}
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cream-warm/15 pt-6 text-xs text-cream-warm/60">
          <p>© 2026 Noor-ul-Quran Academy. All rights reserved.</p>
          <p>Guiding Hearts Through the Light of the Quran</p>
        </div>
      </div>
    </footer>
  );
}
