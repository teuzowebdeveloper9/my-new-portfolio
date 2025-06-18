import avantiBig from '../images/avantiBig.jpg'
import avantione from '../images/avantiOne.webp'
import avantiTwo from '../images/avantiTwo.jpg'

function Works() {
    return ( 
          <>
                <h1 className='flex justify-center items-center text-[#6B21A8] text-3xl font-extrabold mb-3'>Experiência Profissional</h1>
                
                
                <div className="flex flex-col lg:flex-row  mb-6 items-center gap-8 p-6">
          <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center">
            <img 
              src={avantiBig}
              alt="Principal" 
              className="rounded-2xl animate-float w-[300px] h-[300px] object-cover shadow-lg" 
            />
        
            <img 
              src={avantione}
              alt="Menor 1" 
              className="absolute top-[-20px] animate-float left-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md" 
            />
        
            <img 
              src={avantiTwo}
              alt="Menor 2" 
              className="absolute bottom-[-20px] animate-float right-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md" 
            />
          </div>
        
          <div className="w-full lg:w-1/2 text-white space-y-4">
            <h2 className="text-2xl font-bold text-[#6B21A8]">estagio de desenvolvimento full stack -avanti</h2>
            <p className="text-gray-300 mb-6">
             Durante meu estágio em desenvolvimento full stack na Avanti, uma empresa especializada na criação de e-commerces de alta performance, atuei diretamente no desenvolvimento de aplicações modernas com foco em Server-Side Rendering (SSR), utilizando tecnologias como React, Node.js e MongoDB. Integrado a squads ágeis e multidisciplinares, colaborei ativamente com designers, product owners e desenvolvedores, seguindo as metodologias Scrum e Kanban, sempre com foco em escalabilidade, usabilidade e entrega contínua de valor. Um dos momentos de maior destaque foi minha liderança na resolução de um problema crítico relacionado à experiência do usuário em uma interface SSR. Após relatos de dificuldades de navegação, conduzi uma investigação minuciosa que revelou um problema de compatibilidade em versões antigas do navegador Edge, causado por uma implementação de scroll personalizado. Com base nessa descoberta, propus ajustes estratégicos na renderização e nos estilos aplicados, o que resultou em uma melhoria significativa na compatibilidade entre navegadores e na usabilidade geral da aplicação. Essa experiência me proporcionou um grande desenvolvimento em áreas como diagnóstico técnico avançado, comunicação eficaz com stakeholders, liderança de iniciativas técnicas e colaboração com times de QA e front-end para garantir entregas com qualidade. Meu período na Avanti foi marcado por aprendizados sólidos e pela oportunidade de impactar positivamente produtos reais utilizados por milhares de usuários.









            </p>
          </div>
         
        </div>
         <div className=' flex flex-row items-center  justify-center h-[400px] w-[400px] mb-6'>
            <div className="border-4 border-[#6B21A8] text-white max-w-2xl w-full break-words mx-auto px-4 py-2 mb-6">
                <h1 className='flex justify-center text-[#6B21A8] text-3xl font-extrabold mb-4'>caso queira saber mais sobre a avanti :</h1>
                <iframe width="350" height="350" src="https://www.youtube.com/embed/J5Eik4jfHW0?si=B4zUlYobokSpbG3_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        
        
        </div>
          </>
     );
}

export default Works;