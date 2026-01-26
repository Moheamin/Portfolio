import { AboutSection } from "./_components/_sections/AboutSection";
import ContactSection from "./_components/_sections/ContactSection";
import { HeroSection } from "./_components/_sections/HeroSection";
import { ProjectsSection } from "./_components/_sections/ProjectsSection";
import { SkillsSection } from "./_components/_sections/SkillsSection";
import "./styles/globals.css";
export default function page() {
  return (
    <div className="min-h-screen antialiased">
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
