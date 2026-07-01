import { FiCheckCircle } from "react-icons/fi";
import type { PortfolioContent } from "../data/i18n";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";

type ExperienceSectionProps = {
  content: PortfolioContent["experience"];
};

function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <SectionShell id="experience" tone="warm" innerClassName="max-w-7xl space-y-12">
      <SectionHeading
        align="left"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="relative grid gap-5">
        <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-lime-300 to-fuchsia-300 md:block" />
        {content.items.map((experience, index) => (
          <article
            data-reveal
            key={experience.company}
            className="reveal-on-scroll relative rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)] md:ml-12 md:p-6"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="absolute -left-[3.15rem] top-7 hidden size-4 rounded-md border border-[#080a0f] bg-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.12)] md:block" />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase text-lime-200">
                  {experience.company}
                </p>
                <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                  {experience.title}
                </h3>
              </div>
              <span className="w-fit rounded-md border border-white/10 bg-[#07080d] px-3 py-2 text-sm font-bold text-slate-300">
                {experience.period}
              </span>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <h4 className="text-sm font-black text-white">
                  {content.contextLabel}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {experience.context}
                </p>
                <h4 className="mt-5 text-sm font-black text-white">
                  {content.impactLabel}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-cyan-100">
                  {experience.impact}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-[#07080d] px-2.5 py-1.5 text-xs font-bold text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {experience.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <FiCheckCircle
                      className="mt-0.5 shrink-0 text-lime-200"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed text-slate-300">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default ExperienceSection;
