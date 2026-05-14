export type Project = {
  title: string;
  tag: string;
  stack: string;
  impact: string;
  bullets: string[];
  metrics?: string[];
  primaryUrl: string;
  primaryLabel: string;
  secondaryUrl: string | null;
  secondaryLabel: string | null;
  videoSrc?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Carti Visual Archive",
    tag: "React + NestJS + Supabase + Mistral",
    stack:
      "React 19, TypeScript, NestJS, Supabase, Mistral Voxtral, Vercel, CSS experimental",
    impact:
      "Site conceito de fa em homenagem ao Playboi Carti, com tres eras visuais, letras sincronizadas, vinil interativo e backend que estrutura musicas via IA.",
    bullets: [
      "Backend em NestJS com Ports and Adapters, Supabase e script de transcricao/estruturação com Mistral.",
      "Frontend imersivo com eras Magnolia, Whole Lotta Red e I AM MUSIC, aura de cursor, colagens animadas e header lirico.",
      "Audio servido como asset estatico para suportar Range requests na Vercel e manter as letras sincronizadas pelo currentTime.",
    ],
    metrics: ["3 eras visuais", "30s por trecho", "lyrics sync", "deploy front/back"],
    primaryUrl: "https://carti-front.vercel.app/",
    primaryLabel: "Abrir experiencia",
    secondaryUrl: "https://github.com/teuzowebdeveloper9/carti-front",
    secondaryLabel: "Front repo",
    videoSrc: "/projects/carti-archive-demo.mp4",
  },
  {
    title: "anotEX.ai",
    tag: "IA aplicada em producao",
    stack:
      "NestJS, React 19, TypeScript, Supabase, Cloudflare R2, BullMQ, Upstash Redis, Groq, Railway",
    impact:
      "Plataforma que transforma aulas em resumo, flashcards, mapa mental, quiz e chat com RAG.",
    bullets: [
      "Processa gravacoes, uploads e links do YouTube para gerar materiais de estudo automaticamente.",
      "Arquitetura com backend em Clean Architecture e frontend em Feature-Sliced Design.",
      "Pipeline assincrono com fila para transcricao, geracao de materiais, revisao espacada e chat contextual.",
    ],
    metrics: ["RAG", "filas", "cloud storage", "IA educacional"],
    primaryUrl: "https://anoteexai.tight-resonance-42ff.workers.dev/",
    primaryLabel: "Abrir plataforma",
    secondaryUrl: null,
    secondaryLabel: null,
  },
];

export const publicProjects: Project[] = [
  {
    title: "API sem Framework",
    tag: "Arquitetura backend",
    stack: "Node.js, TypeScript, modulos nativos",
    impact:
      "API REST construida sem framework externo para demonstrar dominio de HTTP, organizacao em camadas e tipagem forte.",
    bullets: [
      "Separacao clara entre controladores, servicos, repositorios e utilitarios.",
      "Enums para padronizar status HTTP e respostas JSON consistentes.",
      "Projeto forte para mostrar base de backend sem abstracoes pesadas.",
    ],
    primaryUrl: "https://github.com/teuzowebdeveloper9/api-sem-framework",
    primaryLabel: "Ver repositorio",
    secondaryUrl: null,
    secondaryLabel: null,
  },
  {
    title: "Wallet with Mongo",
    tag: "Backend com auth",
    stack: "Node.js, Express, MongoDB, JWT",
    impact:
      "Backend de carteira digital com autenticacao, saldo e movimentacoes, pensado para futura integracao com frontend.",
    bullets: [
      "Rotas RESTful para cadastro, login, carteira e transacoes.",
      "Protecao via JWT e foco em integridade dos dados financeiros.",
      "Mostra modelagem de negocio, seguranca e organizacao de API.",
    ],
    primaryUrl: "https://github.com/teuzowebdeveloper9/wallet-with-mongo",
    primaryLabel: "Ver repositorio",
    secondaryUrl: null,
    secondaryLabel: null,
  },
  {
    title: "Teuzo-Web CRUD",
    tag: "Full stack com deploy",
    stack: "Frontend + backend CRUD com publicacao em producao",
    impact:
      "Aplicacao para cadastro e gerenciamento de alunos, com narrativa propria, fluxo completo e demonstracao online.",
    bullets: [
      "Entrega fluxo de criacao, listagem e remocao em uma interface publica navegavel.",
      "Projeto simples, mas util para demonstrar produto funcionando de ponta a ponta.",
      "Tem repositorio publico e demo publicada, o que ajuda em avaliacao tecnica.",
    ],
    primaryUrl: "https://crud-ueed.vercel.app/",
    primaryLabel: "Ver demo",
    secondaryUrl: "https://github.com/teuzowebdeveloper9/crud",
    secondaryLabel: "Ver codigo",
  },
];
