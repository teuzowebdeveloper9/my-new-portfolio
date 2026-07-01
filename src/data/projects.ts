export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  challenge: string;
  solution: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  accent: "cyan" | "lime" | "magenta" | "blue";
};

export const projects: Project[] = [
  {
    title: "DeployForge AI",
    eyebrow: "AI-first platform",
    description:
      "Plataforma para gerar, versionar e validar aplicações completas a partir de prompts, com monorepo multi-serviço e observabilidade.",
    challenge:
      "Unificar geração de código, validação, filas e artefatos em uma arquitetura que pudesse ser executada localmente e evoluir para produção.",
    solution:
      "Go para runner de CI, Python/FastAPI para agent-service, NestJS para API, Next.js no frontend, MinIO S3-compatible para artefatos e Prometheus/Loki/Grafana para observabilidade.",
    stack: [
      "Go",
      "FastAPI",
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "MinIO",
      "Docker",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/teuzowebdeveloper9/deployforge-ai",
    accent: "cyan",
  },
  {
    title: "Microservices K8s",
    eyebrow: "Cloud architecture",
    description:
      "Arquitetura de microsserviços com comunicação síncrona e assíncrona, deploy em Kubernetes e pipeline automatizado.",
    challenge:
      "Criar um ambiente distribuído com serviços independentes, filas resilientes, roteamento e deploy automatizado em cluster.",
    solution:
      "C# .NET, RabbitMQ, gRPC, Docker, manifests Kubernetes, NGINX Ingress, GKE e GitHub Actions para build, push e deploy.",
    stack: [
      "C# .NET",
      "RabbitMQ",
      "gRPC",
      "Kubernetes",
      "GKE",
      "Docker",
      "MySQL",
      "GitHub Actions",
      "NGINX",
    ],
    githubUrl: "https://github.com/teuzowebdeveloper9/microservices",
    accent: "lime",
  },
  {
    title: "RAG CV Creator",
    eyebrow: "AI automation",
    description:
      "Plataforma de geração inteligente de currículos com RAG, busca semântica, filas assíncronas e suporte multi-LLM.",
    challenge:
      "Transformar documentos e histórico profissional em currículos direcionados para vagas, mantendo contexto, consistência e exportação real.",
    solution:
      "Django, LangChain, LangGraph, Qdrant, Celery, Redis e MinIO para orquestrar documentos, embeddings, geração e armazenamento.",
    stack: [
      "Python",
      "Django",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "Celery",
      "Redis",
      "MinIO",
      "React",
    ],
    githubUrl: "https://github.com/teuzowebdeveloper9/cv-creator-with-rag",
    accent: "magenta",
  },
  {
    title: "Send Email SES",
    eyebrow: "AWS integration",
    description:
      "API REST para envio de emails via AWS SES, construída com Clean Architecture e separação clara entre domínio e infraestrutura.",
    challenge:
      "Integrar um serviço AWS real sem acoplar regras de negócio ao framework ou aos detalhes do provedor.",
    solution:
      "Java 17, Spring Boot, Maven e arquitetura hexagonal com fluxo Controller, Application Service, Use Case, Gateway e Infra.",
    stack: ["Java 17", "Spring Boot", "AWS SES", "Maven", "Clean Architecture"],
    githubUrl: "https://github.com/teuzowebdeveloper9/send-email-ses",
    accent: "blue",
  },
];
