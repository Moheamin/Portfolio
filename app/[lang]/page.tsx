import { getTranslations, LOCALES, Locale } from "@/app/translations";
import { HeroSection } from "@/app/_components/_sections/HeroSection";
import { AboutSection } from "@/app/_components/_sections/AboutSection";
import { ProjectsSection } from "@/app/_components/_sections/ProjectsSection";
import { SkillsSection } from "@/app/_components/_sections/SkillsSection";
import ContactSection from "@/app/_components/_sections/ContactSection";
import Navbar from "../_components/_layout/Navbar";
import Footer from "../_components/_layout/Footer";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function LangPage({ params }: PageProps) {
  const { lang } = await params;
  const locale: Locale = LOCALES.includes(lang as Locale)
    ? (lang as Locale)
    : "en";
  const t = getTranslations(locale);

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <div className="min-h-screen antialiased" lang={locale} dir={dir}>
      <Navbar t={t.nav} lang={locale} />
      <HeroSection t={t.hero} lang={locale} />
      <AboutSection t={t.about} />
      <ProjectsSection t={t.projects} lang={locale} />
      <SkillsSection t={t.skills} />
      <ContactSection t={t.contact} />
      <Footer t={t.footer} />
    </div>
  );
}
