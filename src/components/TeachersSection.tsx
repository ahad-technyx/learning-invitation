import { siteConfig } from "@/lib/site-config";
import { TeacherProfile } from "./TeacherProfile";
import { IslamicOrnament } from "./IslamicOrnament";

export function TeachersSection() {
  return (
    <section id="teachers" className="py-20 sm:py-28 bg-sage-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
            Learn with Dedicated Quran Teachers
          </h2>
          <p className="mt-4 text-forest-dark/75">
            Personal guidance and a supportive learning environment for every
            student&apos;s Quran journey.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 max-w-5xl mx-auto">
          {siteConfig.teachers.map((t) => (
            <TeacherProfile key={t.id} {...t} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-forest-dark/55 max-w-xl mx-auto">
          Teacher information shown as placeholders. Replace with verified
          credentials before publication.
        </p>
      </div>
    </section>
  );
}
