import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QuranVerseSection } from "@/components/QuranVerseSection";
import { CoursesSection } from "@/components/CoursesSection";
import { TeachersSection } from "@/components/TeachersSection";
import { LearningMethods } from "@/components/LearningMethods";
import { LearningSteps } from "@/components/LearningSteps";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WhoCanJoin } from "@/components/WhoCanJoin";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <QuranVerseSection />
        <CoursesSection />
        <TeachersSection />
        <LearningMethods />
        <LearningSteps />
        <WhyChooseUs />
        <WhoCanJoin />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
