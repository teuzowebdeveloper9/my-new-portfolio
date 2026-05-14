export type Experience = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  tag: string;
};

export const experiences: Experience[] = [
  {
    company: "Lasy AI",
    title: "Full Stack / IA Engineer",
    period: "set/2025 - atual",
    highlights: [
      "Plataforma de criacao de aplicacoes web com IA, prompts, preview em tempo real e execucao segura de codigo gerado.",
      "Sandboxes em Cloudflare Workers, memoria por sessao e processamento assincrono com Cloudflare Queues.",
      "Monitoramento, retry automatico, recovery inteligente e melhorias que reduzem fluxos longos para poucos segundos.",
    ],
    tag: "IA & Cloud",
  },
  {
    company: "High Scale",
    title: "Desenvolvedor Full Stack",
    period: "mai/2025 - ago/2025",
    highlights: [
      "Construcao inicial de produtos de IA como High Copy e High Agents.",
      "Agentes autonomos para WhatsApp com API da Meta, RAG, contexto e bancos vetoriais.",
      "Cuidados com prompt injection, controle de contexto e seguranca em integracoes de IA.",
    ],
    tag: "AI Products",
  },
  {
    company: "Infinity Force",
    title: "Desenvolvedor Full Stack",
    period: "jun/2025 - ago/2025",
    highlights: [
      "Aplicacoes Web3 com NestJS, PostgreSQL, MongoDB e integracoes com carteiras digitais.",
      "Pipelines seguros e organizacao de APIs para produtos com regras de negocio sensiveis.",
      "Ambientes escalaveis com Docker e praticas DevSecOps.",
    ],
    tag: "Web3",
  },
  {
    company: "Avanti",
    title: "Desenvolvedor Full Stack",
    period: "abr/2024 - mai/2025",
    highlights: [
      "E-commerces de alta performance com React, Node.js e MongoDB.",
      "SSR com foco em SEO, experiencia e compatibilidade entre navegadores.",
      "Atuacao em squads ageis, diagnosticos e melhorias criticas.",
    ],
    tag: "E-commerce",
  },
];
