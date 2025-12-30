import jalabig from '../images/JALABIG.webp';
import jalaone from '../images/jalaone.jpg';
import jalatwo from '../images/jalatwo.jpg';

function Educacion() {
  const highlights = [
    "Bolsa integral de 4 anos (Jalasoft) — Talentos 2025.",
    "Foco em Java, POO, DDD, MVC, Design Patterns e SOLID.",
    "Projetos reais com ênfase em performance, escalabilidade e segurança.",
    "Trilha prática com SSR, arquiteturas limpas e oportunidades de estágio internacional.",
  ];

  return (
    <>
      <div className="w-full mx-auto border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-10 px-4 py-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="flex justify-center items-center text-[#6B21A8] text-3xl font-extrabold">
              Trajetória Universitária
            </h1>
            <p className="text-gray-200">
              Jala University me dá base sólida de engenharia de software, unindo prática intensa, fundamentos fortes e visão global.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
            <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center">
              <img
                src={jalabig}
                alt="Jala University"
                className="rounded-2xl animate-float w-[300px] h-[300px] object-cover shadow-[0_0_40px_rgba(107,33,168,0.35)]"
              />

              <img
                src={jalaone}
                alt="Campus Jala University"
                className="absolute top-[-20px] animate-float left-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md"
              />

              <img
                src={jalatwo}
                alt="Equipe Jala University"
                className="absolute bottom-[-20px] animate-float right-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md"
              />
            </div>

            <div className="w-full lg:w-1/2 text-white space-y-5">
              <h2 className="text-2xl font-bold text-[#c084fc]">Sou um jovem talento na Jala University</h2>
              <p className="text-gray-300 leading-relaxed">
                Engenharia de Software com grade prática, alinhada ao mercado global. Aprovado em programa altamente
                concorrido, com bolsa integral de quatro anos patrocinada pela Jalasoft.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="border-4 border-[#6B21A8] text-white max-w-3xl w-full break-words mx-auto px-4 py-4 rounded-2xl bg-[#0b0b12]">
              <h3 className="flex justify-center text-[#6B21A8] text-2xl font-extrabold mb-4">
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
      </div>
    </>
  );
}

export default Educacion;