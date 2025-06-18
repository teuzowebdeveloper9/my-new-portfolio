import { FaReact } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoVue } from "react-icons/io5";
import { SiNestjs } from "react-icons/si";
import { SiFastify } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiAmazons3 } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { DiRedis } from "react-icons/di";








function Tecnologies() {
    return (  
        <>
       
         <h1 className="text-4xl md:text-5xl font-extrabold flex justify-center items-center text-[#6B21A8] text-center mb-8">
        minhas tecnologias</h1>

      <div className="w-full max-w-md mx-auto min-h-screen text-[#6B21A8] border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-10 flex flex-wrap items-center justify-center gap-6 px-4 py-6">
      <FaReact className="w-[50px] h-[50px]" />
      <BiLogoSpringBoot className="w-[50px] h-[50px]" />
      <SiTypescript className="w-[50px] h-[50px]" />
      <FaJava className="w-[50px] h-[50px]"></FaJava>
      <IoLogoJavascript className="w-[50px] h-[50px]"></IoLogoJavascript>
      <IoLogoVue className="w-[50px] h-[50px]"></IoLogoVue>
      <SiNestjs className="w-[50px] h-[50px]"></SiNestjs>
      <SiFastify className="w-[50px] h-[50px]"></SiFastify>
      <SiExpress className="w-[50px] h-[50px]"></SiExpress>
      <BiLogoPostgresql className="w-[50px] h-[50px]"></BiLogoPostgresql>
      <FaDocker className="w-[50px] h-[50px]"></FaDocker>
      <SiMysql className="w-[50px] h-[50px]"></SiMysql>
      <SiMongodb className="w-[50px] h-[50px]"></SiMongodb>
      <SiAmazons3 className="w-[50px] h-[50px]"></SiAmazons3>
      <SiOracle className="w-[50px] h-[50px]"></SiOracle>
      <DiRedis className="[100px] h-[100px]"></DiRedis>
    </div>
     </>
    );
}

export default Tecnologies;