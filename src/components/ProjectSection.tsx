import type { PortfolioContent } from "../data/i18n";
import ProjectCard from "./ui/ProjectCard";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";

type ProjectSectionProps = {
  content: PortfolioContent["projects"];
};

function ProjectSection({ content }: ProjectSectionProps) {
  return (
    <SectionShell id="projects" tone="base" innerClassName="max-w-7xl space-y-12">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          align="left"
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <p className="max-w-2xl text-base leading-relaxed text-slate-400 lg:justify-self-end">
          {content.sideNote}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {content.items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            labels={{
              challenge: content.challengeLabel,
              solution: content.solutionLabel,
              code: content.codeLabel,
              demo: content.demoLabel,
            }}
            index={index}
          />
        ))}
      </div>
    </SectionShell>
  );
}

export default ProjectSection;
