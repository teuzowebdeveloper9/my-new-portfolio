export type SectionId =
  | "home"
  | "mindset"
  | "skills"
  | "projects"
  | "experience"
  | "education"
  | "contact";

export type NavigationItem = {
  id: SectionId;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Início" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Projetos" },
  { id: "experience", label: "Experiência" },
  { id: "education", label: "Formação" },
  { id: "contact", label: "Contato" },
];
