import type { IconType } from "react-icons";
import { FaCodeBranch, FaTerminal } from "react-icons/fa6";
import { SiClaude, SiGooglegemini, SiOpenai } from "react-icons/si";

export type CodingAgent = {
  name: string;
  role: string;
  emphasis: "primary" | "support";
  description: string;
  strengths: string[];
  accentClass: string;
  icon: IconType;
};

export const codingAgents: CodingAgent[] = [
  {
    name: "Claude Code",
    role: "Agente principal para refatoracao, leitura profunda e arquitetura",
    emphasis: "primary",
    description:
      "Uso como par de engenharia dentro do terminal: entende o repo, altera arquivos, roda validacoes e ajuda a manter contexto tecnico em tarefas grandes.",
    strengths: [
      "refatoracoes com contexto",
      "documentacao viva",
      "debug de fluxos longos",
      "revisao de arquitetura",
    ],
    accentClass: "from-orange-300/30 via-amber-200/10 to-transparent",
    icon: SiClaude,
  },
  {
    name: "Codex",
    role: "Agente principal para implementacao, revisao e entrega de codigo",
    emphasis: "primary",
    description:
      "Uso para transformar requisitos em mudancas rastreaveis: editar, testar, organizar commits e preservar qualidade de engenharia no caminho.",
    strengths: [
      "implementacao guiada",
      "testes e lint",
      "commits limpos",
      "analise de codebase",
    ],
    accentClass: "from-cyan-300/30 via-blue-300/10 to-transparent",
    icon: SiOpenai,
  },
  {
    name: "Cursor Agent",
    role: "Apoio rapido dentro do editor",
    emphasis: "support",
    description:
      "Uso para ajustes pontuais, navegacao pelo codigo e iteracoes pequenas quando ja estou trabalhando diretamente no editor.",
    strengths: ["edicao local", "busca por simbolos", "pequenos fixes"],
    accentClass: "from-violet-300/30 via-fuchsia-300/10 to-transparent",
    icon: FaCodeBranch,
  },
  {
    name: "Antigravity",
    role: "Apoio experimental para fluxos agenticos",
    emphasis: "support",
    description:
      "Uso como laboratorio para explorar novas formas de orquestrar agentes, browser, editor e terminal em tarefas de produto.",
    strengths: ["experimentos", "fluxos agenticos", "prototipagem"],
    accentClass: "from-[#d7ff4d]/30 via-emerald-300/10 to-transparent",
    icon: SiGooglegemini,
  },
  {
    name: "Terminal Workflow",
    role: "Disciplina que segura a qualidade",
    emphasis: "support",
    description:
      "Todo agente entra no mesmo fluxo: entender contexto, fazer mudanca pequena, validar, revisar diff e so entao entregar.",
    strengths: ["git diff", "lint/build", "escopo claro"],
    accentClass: "from-white/20 via-slate-300/10 to-transparent",
    icon: FaTerminal,
  },
];

export const agentWorkflow = [
  "Ler o repo e mapear o impacto antes de alterar.",
  "Gerar mudancas pequenas, tipadas e faceis de revisar.",
  "Rodar lint/build/test quando o projeto permitir.",
  "Registrar decisoes em README, CLAUDE.md ou AGENTS.md quando isso ajudar o proximo agente.",
] as const;
