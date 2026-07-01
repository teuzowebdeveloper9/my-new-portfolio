import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import type { LocalizedProject } from "../../data/i18n";

const accentClasses = {
  cyan: "from-cyan-300/20 text-cyan-200 border-cyan-300/25",
  lime: "from-lime-300/20 text-lime-200 border-lime-300/25",
  magenta: "from-fuchsia-300/20 text-fuchsia-200 border-fuchsia-300/25",
  blue: "from-blue-300/20 text-blue-200 border-blue-300/25",
} as const;

type ProjectCardProps = {
  project: LocalizedProject;
  index: number;
  labels: {
    challenge: string;
    solution: string;
    code: string;
    demo: string;
  };
};

function ProjectCard({ project, index, labels }: ProjectCardProps) {
  return (
    <article
      data-reveal
      className={`reveal-on-scroll group rounded-lg border bg-gradient-to-br ${accentClasses[project.accent]} to-transparent bg-white/[0.035] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.26)] transition hover:-translate-y-1 hover:bg-white/[0.06] md:p-6`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-sm font-black uppercase">{project.eyebrow}</span>
          <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
            {project.title}
          </h3>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-[#07080d] text-sm font-black text-slate-400">
          0{index + 1}
        </span>
      </div>

      <p className="mt-5 text-base leading-relaxed text-slate-300">
        {project.description}
      </p>

      <div className="mt-6 grid gap-5 border-y border-white/10 py-5 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-black text-white">{labels.challenge}</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {project.challenge}
          </p>
        </div>
        <div className="md:border-l md:border-white/10 md:pl-5">
          <h4 className="text-sm font-black text-white">{labels.solution}</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {project.solution}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-[#07080d] px-2.5 py-1.5 text-xs font-bold text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <FaGithub aria-hidden="true" />
            {labels.code}
            <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
          >
            <FiExternalLink aria-hidden="true" />
            {labels.demo}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
