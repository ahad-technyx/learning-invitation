import { IslamicOrnament } from "./IslamicOrnament";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Contact Us",
    body: "Reach out through WhatsApp or email and tell us about your Quran learning goals.",
  },
  {
    title: "Discuss Your Requirements",
    body: "Share the student's age, current reading level, preferred course, and suitable timings.",
  },
  {
    title: "Choose Your Learning Method",
    body: "Discuss whether video or audio lessons are preferred and whether a male or female teacher is appropriate.",
  },
  {
    title: "Begin Your Quran Journey",
    body: "Start learning through personalized lessons, guided practice, and revision.",
  },
];

export function LearningSteps() {
  return (
    <section className="py-20 sm:py-24 bg-sage-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
              How It Works
            </h2>
            <p className="mt-4 text-forest-dark/75">
              Four simple steps to begin learning with Noor-ul-Quran Academy.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-px border-t border-dashed border-gold-elegant/40"
            aria-hidden="true"
          />
          {STEPS.map((s, idx) => (
            <article
              key={s.title}
              className="reveal-on-scroll relative rounded-2xl bg-white border border-gold-elegant/20 p-6 shadow-sm text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-deep text-gold-elegant text-lg font-bold anim-glow-slow">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-bold text-emerald-deep">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-dark/75">
                {s.body}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
