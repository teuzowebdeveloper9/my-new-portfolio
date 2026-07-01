import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LanguageModal from "./components/LanguageModal";
import MindsetSection from "./components/MindsetSection";
import MouseSpotlight from "./components/MouseSpotlight";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import { localizedContent, type Locale } from "./data/i18n";

const localeStorageKey = "mateus-portfolio-locale";

function getInitialLocale(): Locale {
  const storedLocale = window.localStorage.getItem(localeStorageKey);

  if (storedLocale === "en" || storedLocale === "pt") {
    return storedLocale;
  }

  return "pt";
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(
    () => !window.localStorage.getItem(localeStorageKey),
  );
  const content = useMemo(() => localizedContent[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      revealElements.forEach((element) =>
        element.classList.add("reveal-visible"),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [locale]);

  function handleLocaleSelect(nextLocale: Locale) {
    setLocale(nextLocale);
  }

  return (
    <main className="min-h-screen w-full bg-[#07080d] text-white selection:bg-cyan-300 selection:text-slate-950">
      <MouseSpotlight />
      <Navbar
        content={content.nav}
        onOpenLanguageModal={() => setLanguageModalOpen(true)}
      />
      <Hero content={content.hero} />
      <MindsetSection content={content.mindset} />
      <SkillsSection content={content.skills} />
      <ProjectSection content={content.projects} />
      <ExperienceSection content={content.experience} />
      <EducationSection content={content.education} />
      <Contact content={content.contact} />
      <LanguageModal
        content={content.languageModal}
        isOpen={isLanguageModalOpen}
        locale={locale}
        onClose={() => setLanguageModalOpen(false)}
        onSelect={handleLocaleSelect}
      />
    </main>
  );
}

export default App;
