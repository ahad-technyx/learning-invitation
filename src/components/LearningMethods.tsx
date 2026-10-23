import { Video, Phone } from "lucide-react";
import { IslamicOrnament } from "./IslamicOrnament";
import { Reveal } from "./Reveal";

const METHODS = [
  {
    icon: Video,
    title: "Video Call Classes",
    body: "Students can learn through live video sessions, allowing direct interaction and real-time recitation feedback.",
  },
  {
    icon: Phone,
    title: "Audio or Voice Call Classes",
    body: "Students can learn through audio or voice calls, where available, without requiring video.",
  },
];

export function LearningMethods() {
  return (
    <section className="py-20 sm:py-24 bg-cream-warm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
              Learn the Quran Your Way
            </h2>
            <p className="mt-4 text-forest-dark/75">
              Choose the teaching method that suits you best. The preferred option
              can be discussed when you contact the academy.
            </p>
          </div>
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {METHODS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="reveal-on-scroll rounded-2xl border border-gold-elegant/25 bg-white p-7 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-elegant/20 text-emerald-deep anim-float">
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-emerald-deep">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-forest-dark/75">
                {body}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
