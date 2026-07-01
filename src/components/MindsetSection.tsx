import { FiArrowUpRight } from "react-icons/fi";
import type { PortfolioContent } from "../data/i18n";
import SectionShell from "./ui/SectionShell";

type MindsetSectionProps = {
  content: PortfolioContent["mindset"];
};

function MindsetSection({ content }: MindsetSectionProps) {
  return (
    <SectionShell id="mindset" tone="base" innerClassName="max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase text-lime-200">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            {content.title}
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-slate-300">
            {content.description}
          </p>
          <blockquote className="mt-6 border-l-4 border-cyan-300 pl-5 text-xl font-black leading-snug text-white">
            “{content.quote}”
          </blockquote>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {content.stats.map((item, index) => (
          <div
            data-reveal
            key={item.value}
            className="reveal-on-scroll group min-h-40 rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-lime-300/30 hover:bg-lime-300/10"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <strong className="text-3xl font-black text-white">
                {item.value}
              </strong>
              <FiArrowUpRight
                className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime-200"
                aria-hidden="true"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

export default MindsetSection;
