import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { featuredProjects, publicProjects, type Project } from "../data/projects";
import SectionHeading from "./ui/SectionHeading";

type TabId = "featured" | "public";

type Tab = {
  id: TabId;
  label: string;
};

const tabs: Tab[] = [
  { id: "featured", label: "Cases principais" },
  { id: "public", label: "Projetos publicos" },
];

function ProjectVideo({ project }: { project: Project }): JSX.Element | null {
  if (!project.videoSrc) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-black shadow-[0_24px_80px_rgba(34,211,238,0.14)]">
      <video
        className="aspect-video w-full object-cover"
        src={project.videoSrc}
        controls
        muted
        playsInline
        preload="metadata"
        poster=""
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-300/10 to-transparent" />
    </div>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured: boolean }): JSX.Element {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.38)] ring-1 ring-purple-400/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 ${
        featured ? "grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" : "space-y-5"
      }`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(500px_at_20%_0%,rgba(168,85,247,0.22),transparent_60%),radial-gradient(420px_at_100%_20%,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="space-y-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-2">
            <span className="inline-flex rounded-full border border-purple-300/25 bg-purple-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-purple-200">
              {project.tag}
            </span>
            <h3 className="text-2xl font-black tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">{project.stack}</p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-slate-200">{project.impact}</p>

        {project.metrics ? (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
              >
                {metric}
              </span>
            ))}
          </div>
        ) : null}

        <ul className="grid gap-2 text-sm leading-relaxed text-slate-300">
          {project.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.primaryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-300 bg-cyan-300 px-4 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-transparent hover:text-cyan-200"
          >
            <FaArrowUpRightFromSquare className="text-sm" />
            {project.primaryLabel}
          </a>

          {project.secondaryUrl && project.secondaryLabel ? (
            <a
              href={project.secondaryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-purple-300/40 bg-purple-300/10 px-4 font-extrabold text-purple-100 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-300 hover:text-slate-950"
            >
              <FaGithub className="text-base" />
              {project.secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>

      {featured ? <ProjectVideo project={project} /> : null}
    </article>
  );
}

function Projects(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabId>("featured");
  const visibleProjects = activeTab === "featured" ? featuredProjects : publicProjects;

  return (
    <section className="relative w-full border-b border-white/10 bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <SectionHeading
          eyebrow="selected work"
          title="Projetos que mostram produto, arquitetura e gosto visual."
          description="Curadoria focada em entregas reais: IA aplicada, backend bem estruturado, deploy e experiencias que vao alem de CRUD."
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
                activeTab === tab.id
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={`grid gap-6 ${activeTab === "featured" ? "grid-cols-1" : "md:grid-cols-2"}`}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              featured={activeTab === "featured"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
