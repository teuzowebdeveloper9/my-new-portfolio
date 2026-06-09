export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'fullstack' | 'frontend';
  metrics?: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "DeployForge AI",
    description: "Plataforma de código AI-first distribuída em microserviços. Focada em automação de deploy e geração de código via prompts.",
    stack: ["Next.js", "Go", "FastAPI", "NestJS", "PostgreSQL", "LangChain", "Redis", "Docker", "CI/CD"],
    githubUrl: "https://github.com/teuzowebdeveloper9/deployforge-ai",
    category: "fullstack",
    highlights: ["Arquitetura de Microserviços", "Pipeline CI/CD", "IA Generativa", "GitFlow"],
  },
  {
    title: "Chess Ledger",
    description: "Sistema de xadrez online com motor de ledger para integridade de jogadas e partidas em tempo real.",
    stack: ["NestJS", "DynamoDB", "React", "Vite", "Socket.io", "TypeScript", "Clean Architecture"],
    category: "fullstack",
    highlights: ["WebSockets", "Ledger System", "Real-time", "Clean Architecture"],
  },
  {
    title: "anotEX.ai (SaaS)",
    description: "Plataforma IA que transforma conteúdos educacionais em materiais de estudo estruturados como flashcards e mapas mentais.",
    stack: ["NestJS", "React", "Supabase", "Upstash", "Redis", "BullMQ", "Cloudflare R2"],
    liveUrl: "https://anoteexai.tight-resonance-42ff.workers.dev/",
    category: "fullstack",
    highlights: ["SaaS Real", "RAG", "Processamento Assíncrono"],
  },
  {
    title: "API Fury",
    description: "Simulador de alta performance para integração com Meta Ads API, focado em resiliência e processamento de filas.",
    stack: ["Node.js", "Clean Arch", "Redis", "BullMQ", "Render"],
    githubUrl: "https://github.com/teuzowebdeveloper9/api-fury",
    category: "fullstack",
    highlights: ["Meta Ads API", "High Availability", "Queue Management"],
  },
  {
    title: "Carti Music Experience",
    description: "Uma imersão visual e sonora dedicada ao artista Playboi Carti, explorando diferentes eras artísticas.",
    stack: ["React", "NestJS", "Supabase", "Mistral AI", "CSS Experimental"],
    githubUrl: "https://github.com/teuzowebdeveloper9/carti-music",
    liveUrl: "https://carti-front.vercel.app/",
    category: "frontend",
    highlights: ["Experiência Imersiva", "Sincronização de Lyrics", "UI/UX Experimental"],
  },
  {
    title: "Djavan: A Vida em Arte",
    description: "Site experimental e narrativo que percorre a trajetória e a discografia do cantor Djavan.",
    stack: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/teuzowebdeveloper9/djavan-site",
    liveUrl: "https://djavan-site.vercel.app/",
    category: "frontend",
    highlights: ["Storytelling", "Animações Fluidas", "Design Minimalista"],
  }
];
