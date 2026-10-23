import { Mail, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppLink, buildMailtoLink } from "@/lib/site-config";
import { ContactForm } from "./ContactForm";
import { IslamicOrnament } from "./IslamicOrnament";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-warm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
              Contact & Enrollment
            </h2>
            <p className="mt-4 text-forest-dark/75">
              Reach out to discuss your learning goals. We&apos;ll help you find
              the right course, teacher, and schedule.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal from="left" stagger className="space-y-6">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-on-scroll group flex items-center gap-4 rounded-2xl border border-gold-elegant/25 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white transition group-hover:scale-110">
                <MessageCircle size={22} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-deep/60">
                  WhatsApp
                </p>
                <p className="text-lg font-bold text-emerald-deep">
                  Chat on WhatsApp
                </p>
                <p className="mt-1 text-sm text-forest-dark/70">
                  {siteConfig.whatsapp.display}
                </p>
              </div>
            </a>

            <a
              href={buildMailtoLink()}
              className="reveal-on-scroll group flex items-center gap-4 rounded-2xl border border-gold-elegant/25 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-deep text-gold-elegant transition group-hover:scale-110">
                <Mail size={22} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-deep/60">
                  Email
                </p>
                <p className="text-lg font-bold text-emerald-deep">
                  Send Us an Email
                </p>
                <p className="mt-1 text-sm text-forest-dark/70">
                  {siteConfig.email.display}
                </p>
              </div>
            </a>

            <div className="reveal-on-scroll rounded-2xl bg-emerald-deep p-6 text-cream-warm">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-elegant">
                A gentle reminder
              </p>
              <p
                lang="ar"
                dir="rtl"
                className="font-arabic mt-3 text-xl leading-loose text-cream-warm"
              >
                {siteConfig.closingVerse.arabic}
              </p>
              <p className="mt-3 text-sm italic text-cream-warm/85">
                &ldquo;{siteConfig.closingVerse.translation}&rdquo;
              </p>
              <p className="mt-2 text-xs tracking-wide text-gold-elegant">
                {siteConfig.closingVerse.reference}
              </p>
            </div>
          </Reveal>

          <Reveal from="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
