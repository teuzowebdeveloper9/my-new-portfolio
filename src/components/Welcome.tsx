import Lottie from "lottie-react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSparkling2Line } from "react-icons/ri";
import { SiGooglecloud } from "react-icons/si";
import { TbFileCv } from "react-icons/tb";
import animationHello from "../animations/Animation - 1749818775025.json";
import { profile } from "../data/profile";
import portraitMain from "../images/portrait-main.png";
import portraitSecondary from "../images/portrait-secondary.png";
import teuzoDev from "../images/teuzo.png";
import HeroGlow from "./HeroGlow";

type Photo = {
  src: string;
  alt: string;
};

const photoStack: Photo[] = [
  { src: portraitMain, alt: "Foto principal do Mateus" },
  { src: teuzoDev, alt: "Retrato do Mateus" },
  { src: portraitSecondary, alt: "Foto complementar do Mateus" },
];

function downloadFile(path: string, fileName: string): void {
  const link = document.createElement("a");
  link.href = encodeURI(path);
  link.download = fileName;
  link.click();
}

function Welcome(): JSX.Element {
  const handleCvDownload = (): void => {
    downloadFile("/mateus-dev-curriculo.pdf", "mateus-dev-curriculo.pdf");
  };

  const handleCoverLetterDownload = (): void => {
    downloadFile(
      "/Carta de Apresentação - Mateus da Silva Oliveira.pdf",
      "Carta de Apresentação - Mateus da Silva Oliveira.pdf",
    );
  };

  const handleGithubOpen = (): void => {
    window.open(profile.github, "_blank", "noreferrer");
  };

  return (
    <section className="relative mx-auto flex min-h-screen w-full flex-col items-center overflow-hidden border-b border-white/10 bg-[#07070b] px-4 py-10">
      <HeroGlow />
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-cyan-100">
            <RiSparkling2Line className="text-xl" />
            <span>Lasy AI — Full Stack / AI Engineer</span>
          </div>

          <div className="flex items-center gap-3 text-purple-200">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              {profile.name}
            </h1>
            <Lottie
              className="h-[78px] md:h-[110px]"
              animationData={animationHello}
              loop
            />
          </div>

          <p className="text-lg leading-relaxed text-slate-200 md:text-xl">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {profile.focusAreas.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200 md:text-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCvDownload}
              className="flex h-[50px] items-center justify-center gap-2 rounded-xl border border-cyan-300 bg-cyan-300 px-4 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-transparent hover:text-cyan-100"
            >
              Baixar CV <TbFileCv className="text-2xl" />
            </button>
            <button
              type="button"
              onClick={handleCoverLetterDownload}
              className="flex h-[50px] items-center justify-center gap-2 rounded-xl border border-purple-300/40 bg-purple-300/10 px-4 font-extrabold text-purple-100 transition hover:-translate-y-0.5 hover:bg-purple-300 hover:text-slate-950"
            >
              Carta de apresentação{" "}
              <HiOutlineDownload className="text-xl" />
            </button>
            <button
              type="button"
              onClick={handleGithubOpen}
              className="flex h-[50px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 font-extrabold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-100"
            >
              GitHub <FaGithub className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-lg mx-auto">
          <div className="relative h-[420px]">
            <img
              src={photoStack[0].src}
              alt={photoStack[0].alt}
              className="absolute inset-0 m-auto h-[320px] w-[320px] rounded-3xl border border-cyan-300/30 object-cover shadow-[0_0_80px_rgba(34,211,238,0.22)]"
            />
            <img
              src={photoStack[1].src}
              alt={photoStack[1].alt}
              className="absolute -left-4 -top-6 h-[140px] w-[140px] animate-float rounded-2xl border border-white/25 object-cover shadow-lg"
            />
            <img
              src={photoStack[2].src}
              alt={photoStack[2].alt}
              className="absolute -bottom-6 -right-4 h-[140px] w-[140px] animate-float rounded-2xl border border-white/25 object-cover shadow-lg"
            />
          </div>

          <div className="mt-6 space-y-2 rounded-3xl border border-white/10 bg-white/[0.035] p-4 text-slate-200">
            <div className="flex items-center gap-2 font-semibold text-cyan-100">
              <SiGooglecloud />
              <span>Cloud & IA em produção</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Pipelines de streaming, RAG com bases vetoriais, agentes
              autônomos e observabilidade são o meu dia a dia. Escalo com
              Docker, CI/CD e GCP, mantendo segurança, governança e tempo de
              resposta baixos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
