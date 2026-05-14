import jalabig from "../images/JALABIG.webp";
import jalaone from "../images/jalaone.jpg";
import jalatwo from "../images/jalatwo.jpg";
import SectionHeading from "./ui/SectionHeading";

const highlights = [
  "Bolsa integral de 4 anos (Jalasoft) — Talentos 2025.",
  "Foco em Java, POO, DDD, MVC, Design Patterns e SOLID.",
  "Projetos reais com ênfase em performance, escalabilidade e segurança.",
  "Trilha prática com SSR, arquiteturas limpas e oportunidades de estágio internacional.",
] as const;

function Education(): JSX.Element {
  return (
    <section className="mx-auto w-full border-b border-white/10 bg-[#09090d] px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeading
          eyebrow="education"
          title="Base academica forte para engenharia de software real."
          description="Jala University une pratica intensa, fundamentos de engenharia e visao global, com bolsa integral de quatro anos patrocinada pela Jalasoft."
        />

        <div className="flex flex-col items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 lg:flex-row">
          <div className="relative flex h-[400px] w-full items-center justify-center lg:w-1/2">
            <img
              src={jalabig}
              alt="Jala University"
              className="h-[300px] w-[300px] animate-float rounded-3xl border border-cyan-300/20 object-cover shadow-[0_0_70px_rgba(34,211,238,0.18)]"
            />

            <img
              src={jalaone}
              alt="Campus Jala University"
              className="absolute top-[-20px] left-[30px] h-[120px] w-[120px] animate-float rounded-2xl border border-white/25 object-cover shadow-md"
            />

            <img
              src={jalatwo}
              alt="Equipe Jala University"
              className="absolute bottom-[-20px] right-[30px] h-[120px] w-[120px] animate-float rounded-2xl border border-white/25 object-cover shadow-md"
            />
          </div>

          <div className="w-full space-y-5 text-white lg:w-1/2">
            <h2 className="text-2xl font-black text-cyan-100">
              Sou um jovem talento na Jala University
            </h2>
            <p className="leading-relaxed text-slate-300">
              Engenharia de Software com grade prática, alinhada ao mercado
              global. Aprovado em programa altamente concorrido, com bolsa
              integral de quatro anos patrocinada pela Jalasoft.
            </p>
            <ul className="grid gap-2 text-sm text-slate-200">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto w-full max-w-3xl break-words rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white">
            <h3 className="mb-4 flex justify-center text-2xl font-black text-cyan-100">
              Quer conhecer mais sobre a Jala?
            </h3>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/Y3Ion67oDMQ?si=MgyDPbZchdB8AEMN"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
