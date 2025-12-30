import Educacion from "./components/Education"
import Projects from "./components/Projects"
import Tecnologies from "./components/Tecnologies"
import EducacionTwo from "./components/TwoEducation"
import Welcome from "./components/Welcome"
import Works from "./components/Works"
import Contact from "./components/Contact"


function App() {
  

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D] overflow-auto gap-6 text-[#6B21A8] overflow-x-hidden overflow-y-hidden">
       <Welcome></Welcome>
       <Tecnologies></Tecnologies>
       <Projects></Projects>
       <Works></Works>
       <Educacion></Educacion>
       <EducacionTwo></EducacionTwo>
       <Contact></Contact>
    
    </div>
    
    
  )
}

export default App
