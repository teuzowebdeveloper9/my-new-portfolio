import Lottie from "lottie-react";
import { FaGithub } from "react-icons/fa";
import { FaArrowDown, FaLocationDot } from "react-icons/fa6";
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

const heroStats = [
  { label: "Especialidade", value: "AI Products" },
  { label: "Stack", value: "React + Nest" },
  { label: "Entrega", value: "Deploy-ready" },
] as const;

const signalCards = [
  "RAG, agentes e automacoes",
  "APIs, filas e observabilidade",
  "Interfaces com personalidade",
] as const;

function downloadFile(path: string, fileName: string): void {
  const link = document.createElement("a");
  link.href = encodeURI(path);
  link.download = fileName;
  link.click();
}

function Welcome(): JSX.Element {
  const handleCvDownload = (): void => {
    downloadFile(
      "/mateus-dev-curriculo.pdf",
      "Mateus da Silva Oliveira - Curriculo.pdf",
    );
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
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border-b border-white/10 bg-[#07070b] px-4 py-12"
    >
      <HeroGlow />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#22d3ee,#d7ff4d,transparent)]" />

      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-cyan-100">
            <RiSparkling2Line className="text-xl" />
            <span>Lasy AI / Full Stack / AI Engineer</span>
          </div>

          <div className="space-y-3 text-purple-200">
            <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400">
              <FaLocationDot className="text-[#d7ff4d]" />
              {profile.location}
            </p>
            <h1 className="text-4xl font-black leading-[0.98] text-white md:text-6xl">
              {profile.name}
            </h1>
            <div className="flex items-center gap-3">
              <p className="max-w-xl text-2xl font-black text-[#d7ff4d] md:text-3xl">
                Full stack AI engineer para produto, cloud e interfaces com atmosfera.
              </p>
              <Lottie
                className="hidden h-[86px] shrink-0 md:block"
                animationData={animationHello}
                loop
              />
            </div>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {profile.focusAreas.map((badge) => (
              <span
                key={badge}
                className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200 md:text-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 bg-black/30 p-4 backdrop-blur-md"
              >
                <p className="text-xs font-semibold uppercase text-slate-500">{stat.label}</p>
                <p className="mt-1 text-lg font-black text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCvDownload}
              className="flex h-[50px] items-center justify-center gap-2 rounded-md border border-cyan-300 bg-cyan-300 px-4 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-transparent hover:text-cyan-100"
            >
              Baixar CV <TbFileCv className="text-2xl" />
            </button>
            <button
              type="button"
              onClick={handleCoverLetterDownload}
              className="flex h-[50px] items-center justify-center gap-2 rounded-md border border-purple-300/40 bg-purple-300/10 px-4 font-extrabold text-purple-100 transition hover:-translate-y-0.5 hover:bg-purple-300 hover:text-slate-950"
            >
              Carta de apresentação{" "}
              <HiOutlineDownload className="text-xl" />
            </button>
            <button
              type="button"
              onClick={handleGithubOpen}
              className="flex h-[50px] items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 font-extrabold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-100"
            >
              GitHub <FaGithub className="text-2xl" />
            </button>
            <a
              href="#projects"
              className="flex h-[50px] items-center justify-center gap-2 rounded-md border border-[#d7ff4d]/45 bg-[#d7ff4d]/10 px-4 font-extrabold text-[#d7ff4d] transition hover:-translate-y-0.5 hover:bg-[#d7ff4d] hover:text-black"
            >
              Ver cases <FaArrowDown />
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-lg mx-auto">
          <div className="relative h-[460px] border border-white/10 bg-black/25 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-md">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#22d3ee,#d7ff4d,#ff4d8d)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-full overflow-hidden opacity-20">
              <div className="animate-scanline h-1/2 bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent" />
            </div>
            <img
              src={photoStack[0].src}
              alt={photoStack[0].alt}
              className="absolute inset-0 m-auto h-[320px] w-[320px] border border-cyan-300/30 object-cover shadow-[0_0_80px_rgba(34,211,238,0.22)]"
            />
            <img
              src={photoStack[1].src}
              alt={photoStack[1].alt}
              className="absolute -left-2 top-7 h-[144px] w-[144px] animate-float border border-white/25 object-cover shadow-lg"
            />
            <img
              src={photoStack[2].src}
              alt={photoStack[2].alt}
              className="absolute bottom-6 -right-2 h-[144px] w-[144px] animate-float border border-white/25 object-cover shadow-lg"
            />

            <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:grid-cols-3">
              {signalCards.map((signal) => (
                <div
                  key={signal}
                  className="border border-white/10 bg-black/55 px-3 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md"
                >
                  {signal}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2 border border-white/10 bg-white/[0.035] p-4 text-slate-200">
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
