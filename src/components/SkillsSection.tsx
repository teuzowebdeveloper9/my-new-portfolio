import { capabilityHighlights, technologyCategories } from "../data/technologies";
import type { PortfolioContent } from "../data/i18n";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";

const accentClasses = {
  cyan: {
    border: "border-cyan-300/25",
    bg: "bg-cyan-300/10",
    text: "text-cyan-200",
  },
  lime: {
    border: "border-lime-300/25",
    bg: "bg-lime-300/10",
    text: "text-lime-200",
  },
  magenta: {
    border: "border-fuchsia-300/25",
    bg: "bg-fuchsia-300/10",
    text: "text-fuchsia-200",
  },
  blue: {
    border: "border-blue-300/25",
    bg: "bg-blue-300/10",
    text: "text-blue-200",
  },
} as const;

type SkillsSectionProps = {
  content: PortfolioContent["skills"];
};

function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <SectionShell id="skills" tone="ink" innerClassName="max-w-7xl space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <SectionHeading
          align="left"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {capabilityHighlights.map((item, index) => {
            const Icon = item.icon;
            const translated = content.capabilities[index];

            return (
              <div
                data-reveal
                key={translated.title}
                className="reveal-on-scroll min-h-40 rounded-lg border border-white/10 bg-white/[0.04] p-4"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <Icon className="mb-3 text-xl text-cyan-200" aria-hidden="true" />
                <h3 className="text-base font-black text-white">
                  {translated.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {translated.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {technologyCategories.map((category, index) => {
          const Icon = category.icon;
          const accent = accentClasses[category.accent];
          const translated = content.categories[index];

          return (
            <article
              data-reveal
              key={translated.title}
              className={`reveal-on-scroll rounded-lg border ${accent.border} bg-white/[0.035] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:bg-white/[0.055]`}
              style={{ transitionDelay: `${index * 85}ms` }}
            >
              <div
                className={`mb-5 grid size-11 place-items-center rounded-md ${accent.bg} ${accent.text}`}
              >
                <Icon className="text-xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black text-white">
                {translated.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 lg:min-h-24">
                {translated.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-[#07080d] px-2.5 py-1.5 text-xs font-bold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

export default SkillsSection;
