export const profile = {
  name: "Mateus da Silva Oliveira",
  role: "Desenvolvedor de Software",
  headline:
    "Construo produtos AI-first, arquiteturas cloud e automações que saem do protótipo e chegam em produção.",
  email: "mateussoftwaredveeloper@gmail.com",
  github: "https://github.com/teuzowebdeveloper9",
  linkedin:
    "https://www.linkedin.com/in/matheus-da-silva-%F0%9F%87%A7%F0%9F%87%B7-b96541380/",
  location: "Remoto — Brasil",
  availability: "Disponível para oportunidades cloud, IA e produto",
  cvUrl: "/mateus-cloud-storage-cv.pdf",
  summary:
    "Desenvolvedor de Software com experiência em arquiteturas cloud, microsserviços, automação e produtos com IA. Trabalho com Python, Golang, AWS, GCP, Kubernetes, Cloudflare e agentes de código para transformar requisitos complexos em sistemas escaláveis, observáveis e prontos para operação real.",
  englishLevel: {
    language: "Inglês",
    level: "Fluente",
    note: "Leitura técnica, documentação, comunicação e entrevistas em contexto de tecnologia.",
    progress: 92,
  },
  highlights: [
    {
      value: "+4 anos",
      label: "experiência em software",
    },
    {
      value: "10+",
      label: "microsserviços em produção",
    },
    {
      value: "99%",
      label: "sucesso em fluxos críticos",
    },
    {
      value: "5-10s",
      label: "latência em geração AI-first",
    },
  ],
  proofPoints: [
    "Cloud storage com Amazon S3, lifecycles, policies, inventory, logs e batch operations.",
    "Microsserviços em Python/Django e Golang com filas, retries, observabilidade e CI/CD.",
    "Produtos de IA com Claude, Codex, RAG, Qdrant, fine-tuning e agentes para WhatsApp.",
    "Infraestrutura com Kubernetes, Docker, GitHub Actions, Traefik, NGINX, GCP e AWS.",
  ],
} as const;

export const contactOptions = [
  {
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: "teuzowebdeveloper9",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "Mateus da Silva Oliveira",
    href: profile.linkedin,
  },
] as const;
