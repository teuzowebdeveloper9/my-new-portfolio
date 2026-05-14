import { experiences } from "../data/experience";
import SectionHeading from "./ui/SectionHeading";

function Works(): JSX.Element {
  return (
    <section className="w-full border-b border-white/10 bg-[#08080c] px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeading
          eyebrow="experience"
          title="Experiencia em produto, IA, cloud e engenharia de software."
          description="Atuacao em plataformas de IA, automacoes multiagentes, Web3, e-commerce e sistemas B2B com foco em arquitetura e confiabilidade."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500">{experience.period}</p>
                  <h3 className="text-xl font-black text-white">{experience.title}</h3>
                  <p className="text-lg text-cyan-100">{experience.company}</p>
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                  {experience.tag}
                </span>
              </div>

              <ul className="grid gap-2 text-sm leading-relaxed text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
