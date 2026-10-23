import { Award, UserRound } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

type Props = {
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  specialization: string;
  biography: string;
  teaches: string;
  initials: string;
};

export function TeacherProfile({
  name,
  role,
  qualifications,
  experience,
  specialization,
  biography,
  teaches,
  initials,
}: Props) {
  const enquiry = `Assalamu Alaikum, I would like to enquire about classes with ${role} at Noor-ul-Quran Academy.`;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-gold-elegant/25 bg-white shadow-sm">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-emerald-deep to-forest-dark" />

      <div className="relative px-7 pt-7 pb-7">
        <div className="flex items-start gap-5">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-cream-warm ring-4 ring-cream-warm text-emerald-deep text-xl font-bold tracking-wide"
            aria-label="Teacher photo placeholder"
          >
            {initials}
          </div>
          <div className="pt-2 text-cream-warm">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-elegant">
              {role}
            </p>
            <h3 className="mt-1 text-xl font-bold">{name}</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 text-sm">
          <InfoRow icon={Award} label="Qualifications" value={qualifications} />
          <InfoRow icon={Award} label="Experience" value={experience} />
          <InfoRow
            icon={Award}
            label="Specialization"
            value={specialization}
          />
          <InfoRow icon={UserRound} label="Teaches" value={teaches} />
        </div>

        <div className="mt-5 rounded-xl bg-sage-muted/50 p-4 text-sm leading-relaxed text-forest-dark/80">
          {biography}
        </div>

        <a
          href={buildWhatsAppLink(enquiry)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-deep px-5 py-3 text-sm font-semibold text-cream-warm transition hover:bg-forest-dark"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

type IconProps = { icon: typeof Award; label: string; value: string };

function InfoRow({ icon: Icon, label, value }: IconProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sage-muted text-emerald-deep">
        <Icon size={14} />
      </span>
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-emerald-deep/60">
          {label}
        </p>
        <p className="mt-0.5 text-forest-dark/85">{value}</p>
      </div>
    </div>
  );
}
