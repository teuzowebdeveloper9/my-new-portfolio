import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Tecnologies from "./components/Tecnologies";
import Welcome from "./components/Welcome";
import Works from "./components/Works";

function App(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-[#0D0D0D] overflow-auto gap-6 text-[#6B21A8] overflow-x-hidden overflow-y-hidden">
      <Welcome />
      <Tecnologies />
      <Projects />
      <Works />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
