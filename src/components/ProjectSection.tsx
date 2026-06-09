import { projects } from "../data/projects";
import ProjectCard from "./ui/ProjectCard";

function ProjectSection() {
  const fullstack = projects.filter(p => p.category === 'fullstack');
  const frontend = projects.filter(p => p.category === 'frontend');

  return (
    <div className="space-y-32 py-24 bg-gray-50/50">
      <section id="fullstack" className="animate-in">
        <div className="container-clean">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Full Stack / Backend</h2>
            <div className="h-1.5 w-24 bg-black mb-8"></div>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
              Soluções escaláveis, infraestrutura cloud e arquitetura de microserviços AI-first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {fullstack.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="frontend" className="animate-in">
        <div className="container-clean">
          <div className="mb-16 lg:text-right">
            <div className="flex lg:justify-end">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Front End</h2>
            </div>
            <div className="flex lg:justify-end">
              <div className="h-1.5 w-24 bg-black mb-8"></div>
            </div>
            <div className="flex lg:justify-end">
              <p className="text-gray-500 text-xl max-w-2xl leading-relaxed lg:text-right">
                Interfaces de alta fidelidade, animações fluidas e experiências imersivas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {frontend.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectSection;
