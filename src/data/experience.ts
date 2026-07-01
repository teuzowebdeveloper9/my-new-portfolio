export type Experience = {
  company: string;
  title: string;
  period: string;
  context: string;
  impact: string;
  stack: string[];
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Lasy AI",
    title: "Desenvolvedor de Software",
    period: "jul 2025 - atualmente",
    context:
      "Plataforma AI-first onde usuários descrevem aplicações em linguagem natural e a IA gera código completo com preview ao vivo.",
    impact:
      "Reduziu latência de aproximadamente 60s para 5-10s, elevou taxa de sucesso de 85% para 99% e automatizou expurgo de objetos ociosos.",
    stack: [
      "AWS",
      "Python",
      "Django",
      "Golang",
      "Amazon S3",
      "Bedrock",
      "Lambda",
      "SQS",
      "Cloudflare",
      "Traefik",
    ],
    highlights: [
      "Microsserviço em Python/Django para orquestrar agentes de IA com filas assíncronas, retries e backoff exponencial.",
      "Microsserviço em Golang para upload, armazenamento e exposição de imagens geradas em S3.",
      "Lifecycle policies, Batch Operations, IAM roles e KMS para controle de custo e segurança de dados.",
      "Pipeline com GitHub Actions para deploy contínuo e operação com health-check e keep-alive de sandboxes.",
    ],
  },
  {
    company: "High Scale",
    title: "Desenvolvedor de Software",
    period: "out 2022 - jul 2025",
    context:
      "Empresa de produtos SaaS com plataformas de IA rodando em Kubernetes no GCP, múltiplos microsserviços e necessidade de automação operacional.",
    impact:
      "Entregou 3 produtos SaaS em produção, rollback em menos de 2 minutos e mais de 10 microsserviços operando em Kubernetes.",
    stack: [
      "GCP",
      "GKE",
      "Golang",
      "Python",
      "Django",
      "Kubernetes",
      "Qdrant",
      "RabbitMQ",
      "GitHub Actions",
      "NGINX",
    ],
    highlights: [
      "CLIs internas em Golang para deploy e observabilidade de microsserviços no GKE.",
      "Operadores Kubernetes para automatizar ciclo de vida de aplicações e escalonamento.",
      "High Copy: agente de IA para copywriting publicitário com fine-tuning e RAG em Qdrant.",
      "High Agents: SaaS de agentes de IA para WhatsApp com API Meta, filas assíncronas e observabilidade.",
    ],
  },
];
