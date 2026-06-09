import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-clean flex flex-col h-full group overflow-hidden bg-white">
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-3xl font-extrabold tracking-tight group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                title="Repositório"
              >
                <FaGithub className="text-2xl" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                title="Demo Online"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-500 mb-8 flex-grow leading-relaxed text-lg">
          {project.description}
        </p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span 
                key={tech} 
                className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-gray-50 text-gray-500 rounded-lg border border-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="pt-6 border-t border-gray-100 grid grid-cols-1 gap-2">
            {project.highlights?.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
