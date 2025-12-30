import animationHello from '../animations/Animation - 1749818775025.json';
import Lottie from 'lottie-react';
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { RiSparkling2Line } from "react-icons/ri";
import { SiGooglecloud } from "react-icons/si";
import teuzoDev from '../images/teuzo.png';
import portraitMain from '../images/portrait-main.png';
import portraitSecondary from '../images/portrait-secondary.png';
import HeroGlow from "./HeroGlow";

function Welcome() {
  const downloadFile = (path, fileName) => {
    const link = document.createElement("a");
    link.href = encodeURI(path);
    link.download = fileName;
    link.click();
  };

  const handleCvDownload = () => downloadFile("/mateus-dev-curriculo.pdf", "mateus-dev-curriculo.pdf");
  const handleCoverLetterDownload = () =>
    downloadFile("/Carta de Apresentação - Mateus da Silva Oliveira.pdf", "Carta de Apresentação - Mateus da Silva Oliveira.pdf");

  const photoStack = [
    { src: portraitMain, alt: "Foto principal do Mateus" },
    { src: teuzoDev, alt: "Retrato do Mateus" },
    { src: portraitSecondary, alt: "Foto complementar do Mateus" },
  ];

  const badges = [
    "Full Stack | IA Engineer",
    "React / Next.js / NestJS",
    "Java / Spring Boot",
    "RAG · Vetores · Multiagentes",
    "GCP · Docker · CI/CD",
  ];

  return (
    <div className="relative w-full mx-auto min-h-screen border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-10 flex flex-col items-center px-4 py-10 overflow-hidden">
      <HeroGlow />
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f102f] text-[#a855f7] border border-[#6B21A8]">
            <RiSparkling2Line className="text-xl" />
            <span>Lasy AI — Full Stack / IA Engineer</span>
          </div>

          <div className="flex items-center gap-3 text-[#6B21A8]">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Mateus da Silva Oliveira
            </h1>
            <Lottie className="h-[80px] md:h-[110px]" animationData={animationHello} loop={true} />
          </div>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Construo produtos de ponta a ponta com foco em IA aplicada, performance e cloud-first.
            Hoje na Lasy AI, lidero fluxos multiagentes e pipelines de streaming, integrando GPT/Claude/Mistral
            com bases vetoriais e automações robustas. Experiência sólida em arquiteturas escaláveis,
            SSR, segurança e entregas contínuas.
          </p>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="px-3 py-1 rounded-full border border-[#6B21A8] text-xs md:text-sm text-[#c084fc] bg-[#1a1625]">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleCvDownload}
              className="bg-[#6B21A8] hover:bg-transparent hover:text-[#6B21A8] border-2 border-[#6B21A8] h-[50px] px-4 gap-2 flex items-center justify-center text-[#0D0D0D] font-extrabold rounded transition-colors"
            >
              Baixar CV <TbFileCv className="text-2xl" />
            </button>
            <button
              onClick={handleCoverLetterDownload}
              className="bg-transparent border-2 border-[#6B21A8] text-[#6B21A8] hover:bg-[#6B21A8] hover:text-[#0D0D0D] h-[50px] px-4 gap-2 flex items-center justify-center font-extrabold rounded transition-colors"
            >
              Carta de apresentação <HiOutlineDownload className="text-xl" />
            </button>
            <button
              onClick={() => window.open('https://github.com/teuzowebdeveloper9')}
              className="bg-[#0D0D0D] border-2 border-[#6B21A8] hover:bg-[#6B21A8] hover:text-[#0D0D0D] h-[50px] px-4 gap-2 flex items-center justify-center text-[#6B21A8] font-extrabold rounded transition-colors"
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
              className="rounded-2xl w-[320px] h-[320px] object-cover shadow-[0_0_40px_rgba(107,33,168,0.4)] absolute inset-0 m-auto border-4 border-[#6B21A8]"
            />
            <img
              src={photoStack[1].src}
              alt={photoStack[1].alt}
              className="rounded-xl w-[140px] h-[140px] object-cover shadow-lg border-4 border-white animate-float absolute -top-6 -left-4"
            />
            <img
              src={photoStack[2].src}
              alt={photoStack[2].alt}
              className="rounded-xl w-[140px] h-[140px] object-cover shadow-lg border-4 border-white animate-float absolute -bottom-6 -right-4"
            />
          </div>

          <div className="mt-6 p-4 border border-[#6B21A8] rounded-2xl bg-[#0b0b12] text-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-[#6B21A8] font-semibold">
              <SiGooglecloud />
              <span>Cloud & IA em produção</span>
            </div>
            <p className="text-sm leading-relaxed">
              Pipelines de streaming, RAG com bases vetoriais, agentes autônomos e observabilidade são o meu dia a dia.
              Escalo com Docker, CI/CD e GCP, mantendo segurança, governança e tempo de resposta baixos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;