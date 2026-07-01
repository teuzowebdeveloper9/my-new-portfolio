export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    title: "Engenharia de Software",
    institution: "JALA University",
    period: "2025 - 2029",
    description:
      "Formação internacional em Commercial Software Engineering, com foco em design, arquitetura, prática desde o início do programa, projetos colaborativos e indústria global de software.",
    tags: [
      "Talento internacional",
      "Software Architecture",
      "Cloud Development",
      "Machine Learning",
      "Bilingual Education",
    ],
  },
  {
    title: "Técnico em Desenvolvimento Web",
    institution: "IFCE",
    period: "2023 - 2024",
    description:
      "Base técnica em desenvolvimento web, lógica de programação, infraestrutura, bancos de dados e construção de aplicações para internet.",
    tags: ["Web", "Banco de dados", "Infraestrutura", "Programação"],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "AI Fluency for Small Businesses",
    issuer: "Anthropic",
    description:
      "Formação voltada para uso prático de IA, produtividade e aplicação de modelos em problemas de negócio.",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    description:
      "Fundamentos de uso do Claude Code para desenvolvimento assistido por agentes, análise de código e automação de engenharia.",
  },
  {
    title: "FullCycle 3.0",
    issuer: "FullCycle",
    description:
      "Microsserviços, Docker, Kubernetes, arquitetura distribuída, CI/CD e práticas modernas de backend.",
  },
  {
    title: "Java Developer / React Developer",
    issuer: "DIO",
    description:
      "Formações complementares em desenvolvimento Java, Spring, React e construção de aplicações web.",
  },
];
