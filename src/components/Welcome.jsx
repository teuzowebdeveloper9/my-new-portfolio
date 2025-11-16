import animationHello from '../animations/Animation - 1749818775025.json';
import Lottie from 'lottie-react';
import { TbFileCv } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import teuzoDev from '../images/teuzo.png';

function Welcome() {
  const handledownload = () => {
    const link = document.createElement("a");
    link.href = "/Mateus da Silva Oliveira-CV.pdf";
    link.download = "Mateus da Silva Oliveira-CV.pdf";
    link.click();
  };

  

  return (
    <div className="w-full mx-auto min-h-screen border-b-4 border-[#6B21A8] bg-[#0D0D0D]  mb-10 flex flex-col items-center px-4 py-6">

      <h1 className="text-2xl md:text-3xl font-bold flex items-center text-[#6B21A8] text-center mb-4">
        oi, bem vindo ao meu portfolio
        <Lottie className="h-[100px] md:h-[150px]" animationData={animationHello} loop={true} />
      </h1>

      <img
        src={teuzoDev}
        alt="Teuzo Dev"
        className="rounded-full w-[120px] h-[120px] object-cover mb-6 border-4 border-[#6B21A8] animate-float"
      />

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <button
          onClick={handledownload}
          className="bg-[#6B21A8] hover:bg-[#0D0D0D] hover:text-[#6B21A8] cursor-pointer
 h-[50px] px-4 gap-2 flex items-center justify-center text-[#0D0D0D] font-extrabold rounded"
        >
          baixe meu CV <TbFileCv className="text-2xl" />
        </button>

        <button
          onClick={() => window.open('https://github.com/teuzowebdeveloper9')}
          className="bg-[#6B21A8] hover:bg-[#0D0D0D] hover:text-[#6B21A8] h-[50px] cursor-pointer
 px-4 gap-2 flex items-center justify-center text-[#0D0D0D] font-extrabold rounded"
        >
          veja meus projetos <FaGithub className="text-2xl" />
        </button>
      </div>

      <div className="border-4 border-[#6B21A8] text-white max-w-2xl w-full break-words mx-auto px-4 py-2">
        <p className="text-center text-[#6B21A8] text-sm md:text-base leading-relaxed">
          Sou Mateus da Silva Oliveira, desenvolvedor full stack em formação sólida pela Jala University
          (sou um dos jovens talentos de 2025), onde estou me aprofundando na arquitetura de software com
          foco em escalabilidade, clareza e boas práticas. No backend, venho me especializando em Java com
          Spring Boot e explorando o NestJS com TypeScript. No front end, trabalho com React e Tailwind CSS,
          sempre com foco em produtividade, responsividade e mobile first. Tenho experiência prática com
          projetos que exigiram performance real, reestruturação de sistemas, cache inteligente e SSR. Estudo
          com disciplina todos os dias, sempre buscando melhorar tecnicamente e como profissional. Este
          portfólio mostra parte do que venho construindo.
        </p>
      </div>
    </div>
  );
}

export default Welcome;