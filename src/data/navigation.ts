export type SectionId =
  | "home"
  | "fullstack"
  | "frontend"
  | "contact";

export type NavigationItem = {
  id: SectionId;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Início" },
  { id: "fullstack", label: "Full Stack / Backend" },
  { id: "frontend", label: "Front End" },
  { id: "contact", label: "Contato" },
];
