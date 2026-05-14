import { technologyCategories } from "../data/technologies";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";

function Tecnologies(): JSX.Element {
  return (
    <SectionShell id="stack" tone="ink">
      <SectionHeading
        eyebrow="technical range"
        title="Stack para construir, escalar e operar produtos com IA."
        description="Base forte de front, backend e cloud, combinada com agentes, RAG, bancos vetoriais e engenharia de produto."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {technologyCategories.map((category, index) => (
          <article
            key={category.title}
            className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
          >
            <div className="absolute right-4 top-4 text-5xl font-black text-white/[0.03]">
              0{index + 1}
            </div>
            <div className="mb-5 max-w-lg">
              <h3 className="text-xl font-black text-cyan-100">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {category.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 border border-purple-300/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-200 transition group-hover:border-white/20 hover:border-[#d7ff4d]/55 hover:text-[#d7ff4d]"
                  >
                    <Icon className="h-5 w-5 text-cyan-200" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Tecnologies;
