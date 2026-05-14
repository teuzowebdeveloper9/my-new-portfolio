import CodingAgents from "./components/CodingAgents";
import Contact from "./components/Contact";
import Education from "./components/Education";
import ExperienceLayer from "./components/ExperienceLayer";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import Welcome from "./components/Welcome";
import Works from "./components/Works";

function App(): JSX.Element {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#07070b] text-white">
      <ExperienceLayer />
      <Welcome />
      <Tecnologies />
      <CodingAgents />
      <Projects />
      <Works />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
