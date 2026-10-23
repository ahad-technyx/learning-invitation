import { buildWhatsAppLink } from "@/lib/site-config";
import { StarPattern } from "./IslamicOrnament";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest-dark via-emerald-deep to-forest-dark text-cream-warm">
      <StarPattern className="absolute -top-20 -left-20 h-80 w-80 opacity-15" />
      <StarPattern className="absolute -bottom-24 -right-16 h-96 w-96 opacity-15" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-20 sm:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-elegant/40 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-gold-elegant">
          Noor-ul-Quran Academy
        </span>

        <h2 className="mt-6 text-3xl sm:text-5xl font-bold tracking-tight">
          Begin Your Journey with the Holy{" "}
          <span className="text-gold-elegant">Quran</span> Today
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-cream-warm/80">
          Take the next step in your Quran learning journey with Noor-ul-Quran
          Academy. Contact us to discuss your learning goals and available
          classes.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gold-elegant px-7 py-3.5 text-sm font-semibold text-emerald-deep shadow-md transition hover:bg-gold-soft"
          >
            Start Learning on WhatsApp
          </a>
          <a
            href="#courses"
            className="inline-flex items-center justify-center rounded-full border border-cream-warm/40 px-7 py-3.5 text-sm font-semibold text-cream-warm transition hover:bg-cream-warm/10"
          >
            Explore Our Courses
          </a>
        </div>
      </div>
    </section>
  );
}
