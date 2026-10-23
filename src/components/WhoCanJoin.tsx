import { CheckCircle2 } from "lucide-react";
import { IslamicOrnament } from "./IslamicOrnament";
import { FloatingCrescent } from "./AnimatedMotif";
import { Reveal } from "./Reveal";

const LEARNERS = [
  "Children beginning Quran education",
  "Adults learning Quran reading",
  "Students interested in Hifz",
  "Learners seeking to improve their Tajweed",
  "Beginners starting from the basics",
  "Women and girls who prefer a female Quran teacher",
];

export function WhoCanJoin() {
  return (
    <section className="relative py-20 sm:py-24 bg-sage-muted/40 overflow-hidden">
      <FloatingCrescent className="absolute -top-8 right-8 h-24 w-24 opacity-25 hidden md:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal from="left">
          <IslamicOrnament className="h-5 w-56 text-gold-elegant" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
            Who Can Join?
          </h2>
          <p className="mt-5 text-forest-dark/75 leading-relaxed">
            Noor-ul-Quran Academy welcomes learners at every stage. Whether
            you&apos;re taking your first steps or deepening a lifelong
            journey, there&apos;s a place for you here.
          </p>
        </Reveal>

        <Reveal from="right" stagger as="ul" className="grid sm:grid-cols-2 gap-3">
          {LEARNERS.map((item) => (
            <li
              key={item}
              className="reveal-on-scroll flex items-start gap-3 rounded-xl bg-white border border-gold-elegant/20 px-4 py-3.5 transition hover:-translate-y-0.5 hover:shadow-md hover:border-gold-elegant/60"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-gold-elegant"
                aria-hidden="true"
              />
              <span className="text-sm text-forest-dark/85">{item}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
