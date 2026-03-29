import estacioBig from "../images/estacioBig.webp";
import estacioOne from "../images/estacioOne.webp";
import estacioTwo from "../images/estacioTwo.png";

function TwoEducation(): JSX.Element {
  return (
    <>
      <div className="flex flex-col lg:flex-row mb-6 items-center gap-8 p-6">
        <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center">
          <img
            src={estacioBig}
            alt="Campus principal da Estácio"
            className="rounded-2xl animate-float w-[300px] h-[300px] object-cover shadow-lg"
          />

          <img
            src={estacioOne}
            alt="Ambiente acadêmico da Estácio"
            className="absolute top-[-20px] animate-float left-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md"
          />

          <img
            src={estacioTwo}
            alt="Outro registro da Estácio"
            className="absolute bottom-[-20px] animate-float right-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2 text-white space-y-4">
          <h2 className="text-2xl font-bold text-[#6B21A8]">
            Faço Análise e Desenvolvimento de Sistemas na Estácio
          </h2>
          <p className="text-gray-300 mb-6">
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas
            (ADS) na Estácio, um curso tecnólogo de alta relevância e duração
            relativamente curta. Este curso tem sido fundamental para o meu
            desenvolvimento como desenvolvedor, pois me permite aplicar na
            prática grande parte dos conhecimentos que já possuo em programação.
          </p>
          <p className="text-gray-300 mb-6">
            A Estácio oferece uma formação dinâmica, que alia teoria e prática,
            preparando-me para os desafios reais do mercado de tecnologia. A
            carga concentrada e o conteúdo direcionado fazem com que cada
            semestre seja aproveitado ao máximo.
          </p>
          <p className="text-gray-300">
            Estou certo de que essa jornada acadêmica será crucial para minha
            carreira, fortalecendo minha base técnica e minha capacidade de
            entregar soluções eficientes e inovadoras.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center min-h-[400px] w-full mb-6 px-4">
        <div className="border-4 border-[#6B21A8] text-white max-w-2xl w-full break-words mx-auto px-4 py-2 mb-6">
          <h1 className="flex justify-center text-[#6B21A8] text-3xl font-extrabold mb-4 text-center">
            Caso queira saber mais sobre estudar na Estácio:
          </h1>
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/GuAyZeN7fic?si=HcCnFoFJ-EXET3Yo"
              title="Vídeo institucional da Estácio"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoEducation;
