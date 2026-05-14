export type SectionId =
  | "home"
  | "stack"
  | "agents"
  | "projects"
  | "experience"
  | "education"
  | "contact";

export type NavigationItem = {
  id: SectionId;
  label: string;
  shortLabel: string;
};

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Abertura", shortLabel: "01" },
  { id: "stack", label: "Stack", shortLabel: "02" },
  { id: "agents", label: "Agentes", shortLabel: "03" },
  { id: "projects", label: "Cases", shortLabel: "04" },
  { id: "experience", label: "Experiencia", shortLabel: "05" },
  { id: "education", label: "Base", shortLabel: "06" },
  { id: "contact", label: "Contato", shortLabel: "07" },
];
