import { BookOpen, Home, UserRound } from "lucide-react";
import { MosqueArch, StarPattern } from "./IslamicOrnament";
import { buildWhatsAppLink } from "@/lib/site-config";

const HIGHLIGHTS = [
  { icon: BookOpen, label: "Hifz & Nazra Programs" },
  { icon: Home, label: "Learn from the Comfort of Home" },
  { icon: UserRound, label: "Female Quran Teacher Available" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 bg-cream-warm"
    >
      <div className="absolute inset-0 geo-pattern opacity-40" aria-hidden="true" />

      <StarPattern className="absolute -top-10 -right-10 h-72 w-72 opacity-40" />
      <StarPattern className="absolute bottom-10 -left-16 h-60 w-60 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-muted px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-elegant" />
            Online Quran Academy
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-emerald-deep">
            Let the Light of the{" "}
            <span className="text-gold-elegant">Quran</span> Illuminate Your
            Life
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-forest-dark/80">
            Begin your journey with Noor-ul-Quran Academy. Learn Nazra, master
            Tajweed, and memorize the Holy Quran through personalized online
            classes for children and adults, with dedicated female instruction
            available.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-deep px-7 py-3.5 text-sm font-semibold text-cream-warm shadow-md transition hover:bg-forest-dark hover:shadow-lg"
            >
              Start Your Quran Journey
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-deep/30 bg-cream-warm px-7 py-3.5 text-sm font-semibold text-emerald-deep transition hover:border-emerald-deep hover:bg-sage-muted"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M19.11 17.21c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.19-.56.07-.26-.13-1.1-.4-2.1-1.29-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.44.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.55 1.08 2.73.13.17 1.87 2.86 4.53 4.01.63.27 1.13.43 1.52.55.64.2 1.22.17 1.68.1.51-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.44 5.33L5 27l5.78-1.51a10.65 10.65 0 005.24 1.37h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 00-7.58-3.26z" />
              </svg>
              Contact Us on WhatsApp
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-gold-elegant/20 bg-white/60 backdrop-blur px-4 py-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-gold-elegant">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-emerald-deep">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative mx-auto h-[480px] w-[360px]">
            <div className="absolute inset-0 arch-mask bg-gradient-to-b from-emerald-deep to-forest-dark" />
            <MosqueArch className="absolute inset-0 h-full w-full" />

            <div className="absolute inset-x-10 top-24 bottom-24 arch-mask bg-cream-warm/95 shadow-inner flex flex-col items-center justify-center text-center px-6">
              <div className="h-px w-16 bg-gold-elegant/60 mb-5" />
              <p
                className="font-arabic text-3xl text-emerald-deep leading-loose"
                lang="ar"
                dir="rtl"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <div className="h-px w-16 bg-gold-elegant/60 my-5" />
              <p className="text-xs font-medium tracking-widest text-gold-elegant">
                IN THE NAME OF ALLAH
              </p>
              <p className="mt-1 text-[0.7rem] text-forest-dark/70">
                The Most Gracious, The Most Merciful
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
