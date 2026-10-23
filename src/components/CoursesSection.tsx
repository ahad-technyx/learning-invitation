import { siteConfig } from "@/lib/site-config";
import { CourseCard } from "./CourseCard";
import { IslamicOrnament } from "./IslamicOrnament";

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 sm:py-28 bg-cream-warm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <IslamicOrnament className="h-5 w-56 mx-auto text-gold-elegant" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-emerald-deep">
            Explore Our Quran Learning Programs
          </h2>
          <p className="mt-4 text-forest-dark/75">
            A personalized path to reading, understanding the rules of
            recitation, and memorizing the Holy Quran.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.courses.map((c) => (
            <CourseCard
              key={c.id}
              title={c.title}
              description={c.description}
              features={c.features}
              iconKey={c.icon}
              enquiry={c.enquiry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
