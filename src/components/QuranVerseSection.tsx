import { siteConfig } from "@/lib/site-config";
import { IslamicOrnament } from "./IslamicOrnament";
import { FloatingCrescent } from "./AnimatedMotif";
import { Reveal } from "./Reveal";

export function QuranVerseSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-sage-muted/40 overflow-hidden">
      <FloatingCrescent className="absolute -top-10 -left-10 h-32 w-32 opacity-30" />
      <FloatingCrescent className="absolute -bottom-16 -right-10 h-40 w-40 opacity-25" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
              Guidance from the Holy Quran
            </h2>
            <p className="mt-4 text-forest-dark/75">
              Verses that remind us of the beauty and importance of learning,
              reflecting on, and reciting the Book of Allah.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {siteConfig.verses.map((v, idx) => (
            <article
              key={idx}
              className="reveal-on-scroll group relative rounded-2xl bg-white border border-gold-elegant/20 p-7 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="absolute top-5 right-5 text-[0.7rem] font-semibold tracking-wider text-gold-elegant">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <p
                lang="ar"
                dir="rtl"
                className="font-arabic text-2xl sm:text-[1.65rem] text-emerald-deep leading-[2.2] text-right"
              >
                {v.arabic}
              </p>

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-gold-elegant/40 to-transparent" />

              <p className="text-sm leading-relaxed text-forest-dark/80 italic">
                &ldquo;{v.translation}&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-gold-elegant">
                {v.reference}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
