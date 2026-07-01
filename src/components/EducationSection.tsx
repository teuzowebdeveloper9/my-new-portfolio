import { FiAward, FiBookOpen, FiGlobe } from "react-icons/fi";
import type { PortfolioContent } from "../data/i18n";
import jalaImage from "../images/JALABIG.webp";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";

type EducationSectionProps = {
  content: PortfolioContent["education"];
};

function EducationSection({ content }: EducationSectionProps) {
  return (
    <SectionShell id="education" tone="ink" innerClassName="max-w-7xl space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <SectionHeading
          align="left"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div
          data-reveal
          className="reveal-on-scroll rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5"
          style={{ transitionDelay: "90ms" }}
        >
          <div className="flex items-start gap-4">
            <FiGlobe className="mt-1 shrink-0 text-2xl text-cyan-200" />
            <div className="min-w-0">
              <p className="text-sm font-black uppercase text-cyan-200">
                {content.english.language}
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                {content.english.level}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {content.english.note}
              </p>
              <div className="mt-5 h-2 overflow-hidden rounded-md bg-[#07080d]">
                <div
                  className="h-full rounded-md bg-cyan-300"
                  style={{ width: `${content.english.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.82fr]">
        <article
          data-reveal
          className="reveal-on-scroll overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_18px_70px_rgba(0,0,0,0.24)]"
        >
          <div className="grid min-h-full lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72">
              <img
                src={jalaImage}
                alt="JALA University"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-[#07080d]/35 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-black text-lime-200">
                  {content.jalaTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {content.jalaDescription}
                </p>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3 text-cyan-200">
                <FiBookOpen className="text-2xl" aria-hidden="true" />
                <span className="text-sm font-black uppercase">
                  {content.academicLabel}
                </span>
              </div>

              <div className="space-y-6">
                {content.items.map((item) => (
                  <div key={`${item.institution}-${item.title}`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-bold text-lime-200">
                          {item.institution}
                        </p>
                      </div>
                      <span className="w-fit rounded-md border border-white/10 bg-[#07080d] px-3 py-1.5 text-sm font-bold text-slate-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-[#07080d] px-2.5 py-1.5 text-xs font-bold text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article
          data-reveal
          className="reveal-on-scroll rounded-lg border border-fuchsia-300/20 bg-white/[0.04] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)] md:p-6"
          style={{ transitionDelay: "110ms" }}
        >
          <div className="mb-6 flex items-center gap-3 text-fuchsia-200">
            <FiAward className="text-2xl" aria-hidden="true" />
            <span className="text-sm font-black uppercase">
              {content.certificationsLabel}
            </span>
          </div>
          <div className="space-y-5">
            {content.certifications.map((item) => (
              <div
                key={`${item.issuer}-${item.title}`}
                className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
              >
                <p className="text-sm font-bold text-fuchsia-200">
                  {item.issuer}
                </p>
                <h3 className="mt-1 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}

export default EducationSection;
