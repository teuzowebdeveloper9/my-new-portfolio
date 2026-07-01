import type { IconType } from "react-icons";
import {
  FiActivity,
  FiCloud,
  FiCode,
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiLock,
  FiServer,
} from "react-icons/fi";

export type TechnologyCategory = {
  title: string;
  description: string;
  items: string[];
  icon: IconType;
  accent: "cyan" | "lime" | "magenta" | "blue";
};

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Cloud Storage & AWS",
    description:
      "Projetos com foco em armazenamento, segurança, custo e automação na camada cloud.",
    items: [
      "Amazon S3",
      "S3 Lifecycles",
      "Bucket Policies",
      "Batch Operations",
      "S3 Inventory",
      "Server Access Logging",
      "Lambda",
      "API Gateway",
      "Step Functions",
      "SQS/SNS",
      "IAM",
      "KMS",
      "DynamoDB",
      "CloudWatch",
      "Bedrock",
    ],
    icon: FiCloud,
    accent: "cyan",
  },
  {
    title: "Microsserviços & Backend",
    description:
      "Serviços separados por domínio, comunicação assíncrona e APIs prontas para evolução.",
    items: [
      "Python",
      "Django",
      "FastAPI",
      "Golang",
      "Node.js",
      "NestJS",
      "C# .NET",
      "Java Spring Boot",
      "REST APIs",
      "gRPC",
      "RabbitMQ",
      "BullMQ",
    ],
    icon: FiServer,
    accent: "lime",
  },
  {
    title: "IA, RAG & Agentes",
    description:
      "Uso de LLMs para produto, automação interna, geração de código e agentes especializados.",
    items: [
      "Claude Code",
      "OpenAI Codex",
      "GPT",
      "Claude",
      "Mistral",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "RAG",
      "Fine-tuning",
      "Prompt Engineering",
      "Agentes WhatsApp",
    ],
    icon: FiCpu,
    accent: "magenta",
  },
  {
    title: "DevOps & Plataforma",
    description:
      "Entrega contínua, infraestrutura como código, observabilidade e ambientes containerizados.",
    items: [
      "Terraform",
      "CloudFormation",
      "Kubernetes",
      "GCP GKE",
      "Docker",
      "GitHub Actions",
      "Cloudflare Workers",
      "Traefik",
      "NGINX",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    icon: FiGitBranch,
    accent: "blue",
  },
];

export const capabilityHighlights = [
  {
    title: "Arquitetura limpa",
    description:
      "Separação de domínio, aplicação e infraestrutura para manter evolução sem acoplamento desnecessário.",
    icon: FiLayers,
  },
  {
    title: "Segurança cloud",
    description:
      "Uso de IAM, KMS, políticas de bucket, isolamento e revisão de fluxos sensíveis em produtos com IA.",
    icon: FiLock,
  },
  {
    title: "Observabilidade",
    description:
      "Métricas, logs, health-checks, CLIs internas e rollback rápido para operar software real.",
    icon: FiActivity,
  },
  {
    title: "Código de produto",
    description:
      "Frontend, backend, filas e infraestrutura conectados em uma experiência que resolve problema real.",
    icon: FiCode,
  },
];
