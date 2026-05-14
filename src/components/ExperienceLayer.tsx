import { useEffect, useState } from "react";
import { navigationItems, type SectionId } from "../data/navigation";

const initialSection: SectionId = "home";

function ExperienceLayer(): JSX.Element {
  const [activeSection, setActiveSection] = useState<SectionId>(initialSection);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const root = document.documentElement;

    const handlePointerMove = (event: PointerEvent): void => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (): void => {
      const page = document.documentElement;
      const maxScroll = page.scrollHeight - window.innerHeight;

      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!visibleEntry?.target.id) {
          return;
        }

        setActiveSection(visibleEntry.target.id as SectionId);
      },
      {
        rootMargin: "-22% 0px -48%",
        threshold: [0.2, 0.45, 0.7],
      },
    );

    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="portfolio-cursor-aura" aria-hidden="true" />

      <aside className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <nav className="pointer-events-auto flex flex-col gap-2 border border-white/10 bg-black/35 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-label={`Ir para ${item.label}`}
                className={`group grid h-12 w-12 place-items-center border text-[0.7rem] font-black transition duration-300 ${
                  isActive
                    ? "border-[#d7ff4d] bg-[#d7ff4d] text-black shadow-[0_0_28px_rgba(215,255,77,0.28)]"
                    : "border-white/10 bg-white/[0.035] text-slate-300 hover:border-cyan-300/50 hover:text-cyan-100"
                }`}
              >
                <span>{item.shortLabel}</span>
                <span className="pointer-events-none absolute right-[4.25rem] hidden whitespace-nowrap border border-white/10 bg-black/80 px-3 py-2 text-xs font-semibold text-white shadow-xl group-hover:block">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>

      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-[linear-gradient(90deg,#22d3ee,#d7ff4d,#ff4d8d)]"
          style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: "left" }}
        />
      </div>
    </>
  );
}

export default ExperienceLayer;
