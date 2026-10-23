import {
  HeartHandshake,
  BookOpenCheck,
  Home,
  UserRound,
  Video,
  Target,
  Repeat,
  MessageCircle,
} from "lucide-react";
import { IslamicOrnament } from "./IslamicOrnament";

const BENEFITS = [
  {
    icon: HeartHandshake,
    title: "Personalized Quran Learning",
    body: "One-on-one attention tailored to each student's level and pace.",
  },
  {
    icon: BookOpenCheck,
    title: "Hifz, Nazra & Tajweed",
    body: "A full range of programs covering reading, recitation, and memorization.",
  },
  {
    icon: Home,
    title: "Learn from Home",
    body: "Online lessons that fit around your schedule, from anywhere.",
  },
  {
    icon: UserRound,
    title: "Dedicated Female Instruction",
    body: "A respected female teacher for women and girls who prefer the same.",
  },
  {
    icon: Video,
    title: "Video or Audio Options",
    body: "Choose the format that works best for the student and the family.",
  },
  {
    icon: Target,
    title: "Adapted to Your Level",
    body: "Lessons shaped around individual starting points and learning goals.",
  },
  {
    icon: Repeat,
    title: "Regular Practice & Revision",
    body: "Consistent routines that build fluency and long-term retention.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    body: "Easy, responsive contact with the academy through WhatsApp or email.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-cream-warm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
            Why Choose Noor-ul-Quran Academy?
          </h2>
          <p className="mt-4 text-forest-dark/75">
            Thoughtful teaching, a respectful environment, and real care for
            every student&apos;s journey with the Quran.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gold-elegant/20 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sage-muted text-emerald-deep transition group-hover:bg-emerald-deep group-hover:text-gold-elegant">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-emerald-deep">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-dark/75">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
