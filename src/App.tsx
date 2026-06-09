import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <ProjectSection />
      <Contact />
    </main>
  );
}

export default App;
