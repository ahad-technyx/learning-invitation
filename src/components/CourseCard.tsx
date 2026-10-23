import { BookOpen, GraduationCap, Mic, Sparkles, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Sparkles,
  Mic,
  GraduationCap,
};

type Props = {
  title: string;
  description: string;
  features: string[];
  iconKey: string;
  enquiry: string;
};

export function CourseCard({
  title,
  description,
  features,
  iconKey,
  enquiry,
}: Props) {
  const Icon = ICONS[iconKey] ?? BookOpen;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white border border-emerald-deep/10 p-7 shadow-sm transition hover:shadow-lg hover:-translate-y-1 hover:border-gold-elegant/40">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-deep text-gold-elegant transition group-hover:bg-forest-dark">
        <Icon size={26} />
      </div>

      <h3 className="mt-5 text-xl font-bold text-emerald-deep">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-forest-dark/75">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-forest-dark/85">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-gold-elegant"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={buildWhatsAppLink(enquiry)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center justify-center rounded-full border border-emerald-deep/20 bg-sage-muted/60 px-5 py-2.5 text-sm font-semibold text-emerald-deep transition hover:bg-emerald-deep hover:text-cream-warm"
      >
        Enquire on WhatsApp
      </a>
    </article>
  );
}
