import jalabig from '../images/JALABIG.webp'
import jalaone from '../images/jalaone.jpg'
import jalatwo from '../images/jalatwo.jpg'

function Educacion() {
    return (  
        <>
        <h1 className='flex justify-center items-center text-[#6B21A8] text-3xl font-extrabold mb-3'> Trajetória Universitária</h1>
        
        
        <div className="flex flex-col lg:flex-row mb-6 items-center gap-8 p-6">
  <div className="relative w-full lg:w-1/2 h-[400px] flex justify-center items-center">
    <img 
      src={jalabig}
      alt="Principal" 
      className="rounded-2xl animate-float w-[300px] h-[300px] object-cover shadow-lg" 
    />

    <img 
      src={jalaone}
      alt="Menor 1" 
      className="absolute top-[-20px] animate-float left-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md" 
    />

    <img 
      src={jalatwo}
      alt="Menor 2" 
      className="absolute bottom-[-20px] animate-float right-[30px] w-[120px] h-[120px] rounded-xl object-cover border-4 border-white shadow-md" 
    />
  </div>

  <div className="w-full lg:w-1/2 text-white space-y-4">
    <h2 className="text-2xl font-bold text-[#6B21A8]">Sou um jovem talento na jala university</h2>
    <p className="text-gray-300 mb-6">
      Atualmente estou cursando Engenharia de Software pela Jala University, uma instituição norte-americana voltada para a formação de profissionais altamente qualificados em tecnologia. Fui aprovado em um concorrido programa de talentos, sendo contemplado com uma bolsa integral de quatro anos oferecida pela Jalasoft, uma renomada multinacional que patrocina os melhores talentos da região.

Ao longo da minha formação, tenho vivenciado uma jornada intensa e completa, que vai desde os fundamentos da engenharia de software até tópicos avançados da área. O curso é extremamente prático e alinhado com as demandas do mercado global, o que tem me permitido desenvolver projetos reais enquanto aprofundo meus conhecimentos técnicos.

Graças ao foco do programa, venho me especializando em Programação Orientada a Objetos (POO) e Java, além de me apaixonar cada vez mais por conceitos como Domain-Driven Design (DDD), arquitetura MVC, Design Patterns, e os princípios SOLID, que são essenciais para construir sistemas robustos e escaláveis.
Ao final da graduação, terei a oportunidade de estagiar na própria Jalasoft ou em uma de suas empresas parceiras, o que representa uma grande porta de entrada para o mercado internacional de tecnologia. Me orgulho muito de fazer parte dessa formação, pois ela tem moldado não apenas minhas habilidades técnicas, mas também minha visão como futuro engenheiro de software.


    </p>
  </div>
 
</div>
 <div className=' flex flex-row items-center  justify-center h-[400px] w-[400px] mb-6'>
    <div className="border-4 border-[#6B21A8] text-white max-w-2xl w-full break-words mx-auto px-4 py-2 mb-6">
        <h1 className='flex justify-center text-[#6B21A8] text-3xl font-extrabold mb-4'>caso queira saber mais sobre a jala :</h1>
         <iframe width="350" height="350" src="https://www.youtube.com/embed/Y3Ion67oDMQ?si=MgyDPbZchdB8AEMN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>


</div>
  </>
    );
}

export default Educacion;