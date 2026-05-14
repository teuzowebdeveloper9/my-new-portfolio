import { technologyCategories } from "../data/technologies";
import SectionHeading from "./ui/SectionHeading";

function Tecnologies(): JSX.Element {
  return (
    <section className="relative w-full border-b border-white/10 bg-[#09090d] px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeading
          eyebrow="technical range"
          title="Stack para construir, escalar e operar produtos com IA."
          description="Base forte de front, backend e cloud, combinada com agentes, RAG, bancos vetoriais e engenharia de produto."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {technologyCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <h3 className="mb-4 text-lg font-black text-cyan-100">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-2xl border border-purple-300/20 bg-slate-950/80 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-100"
                    >
                      <Icon className="h-5 w-5 text-cyan-200" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tecnologies;
