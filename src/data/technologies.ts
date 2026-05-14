import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { FaJava, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import type { IconType } from "react-icons";
import {
  SiCloudflare,
  SiDotnet,
  SiGooglecloud,
  SiJest,
  SiJunit5,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPrisma,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

export type TechnologyItem = {
  icon: IconType;
  label: string;
};

export type TechnologyCategory = {
  title: string;
  description: string;
  items: TechnologyItem[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces responsivas, performaticas e com cuidado de produto.",
    items: [
      { icon: FaReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js / SSR" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: IoLogoJavascript, label: "JavaScript" },
    ],
  },
  {
    title: "Back-end & APIs",
    description: "Servicos tipados, modulares e prontos para integracoes reais.",
    items: [
      { icon: SiNestjs, label: "NestJS" },
      { icon: FaNodeJs, label: "Node.js" },
      { icon: BiLogoSpringBoot, label: "Spring Boot" },
      { icon: SiDotnet, label: ".NET / C#" },
      { icon: FaJava, label: "Java" },
    ],
  },
  {
    title: "IA, Agentes & Dados",
    description: "LLMs, bancos relacionais, cache e dados para experiencias inteligentes.",
    items: [
      { icon: SiOpenai, label: "GPT / Claude / Mistral" },
      { icon: BiLogoPostgresql, label: "PostgreSQL" },
      { icon: SiSupabase, label: "Supabase" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiMysql, label: "MySQL" },
      { icon: DiRedis, label: "Redis" },
      { icon: SiPrisma, label: "Prisma" },
    ],
  },
  {
    title: "Cloud, DevOps & Qualidade",
    description: "Deploy, observabilidade e testes para manter produto em pe.",
    items: [
      { icon: FaDocker, label: "Docker" },
      { icon: SiGooglecloud, label: "GCP" },
      { icon: SiCloudflare, label: "Cloudflare Workers" },
      { icon: SiKubernetes, label: "Kubernetes" },
      { icon: SiJest, label: "Jest" },
      { icon: SiJunit5, label: "JUnit" },
    ],
  },
];
