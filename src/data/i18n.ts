export type Locale = "pt" | "en";

export const languageOptions = [
  {
    locale: "pt",
    label: "Português",
    shortLabel: "PT",
    description: "Conteúdo principal em português do Brasil.",
  },
  {
    locale: "en",
    label: "English",
    shortLabel: "EN",
    description: "Portfolio copy in fluent English.",
  },
] as const satisfies readonly {
  locale: Locale;
  label: string;
  shortLabel: string;
  description: string;
}[];

export const localizedContent = {
  pt: {
    nav: {
      home: "Início",
      mindset: "Entrega",
      skills: "Stack",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
      contact: "Contato",
      languageButton: "PT / EN",
      contactButton: "Contato",
    },
    languageModal: {
      eyebrow: "Idioma",
      title: "Escolha o idioma do portfolio",
      description:
        "Você pode alternar entre português e inglês a qualquer momento pelo botão no topo.",
      close: "Continuar",
      active: "Selecionado",
    },
    hero: {
      availability: "Disponível para oportunidades cloud, IA e produto",
      location: "Remoto - Brasil",
      kicker: "Cloud Storage · IA · Microsserviços · Agentes de Código",
      role: "Desenvolvedor de Software",
      headline:
        "Construo produtos AI-first, arquiteturas cloud e automações que saem do protótipo e chegam em produção.",
      summary:
        "Desenvolvedor de Software com experiência em arquiteturas cloud, microsserviços, automação e produtos com IA. Trabalho com Python, Golang, AWS, GCP, Kubernetes, Cloudflare e agentes de código para transformar requisitos complexos em sistemas escaláveis, observáveis e prontos para operação real.",
      ctaEmail: "Falar por e-mail",
      ctaCv: "Baixar CV",
      ctaProjects: "Ver projetos",
      portraitTitle: "Engenharia que conversa com produto.",
      portraitText: "Do prompt ao deploy, com cloud, agentes e operação real.",
      github: "GitHub",
      linkedin: "LinkedIn",
      metrics: [
        { value: "+4 anos", label: "experiência em software" },
        { value: "10+", label: "microsserviços em produção" },
        { value: "99%", label: "sucesso em fluxos críticos" },
        { value: "5-10s", label: "latência em geração AI-first" },
      ],
    },
    mindset: {
      eyebrow: "Mentalidade de entrega",
      title: "Aprendo rápido, projeto com critério e coloco em produção.",
      description:
        "Minha trajetória não é sobre empilhar frameworks. É sobre entender o problema, escolher uma arquitetura defensável e entregar software que continua funcionando depois do deploy.",
      quote:
        "Busco resolver problemas reais com soluções simples, escaláveis e operáveis.",
      stats: [
        {
          value: "Cloud",
          label: "storage, filas, IAM, KMS e automação de custos",
        },
        {
          value: "IA",
          label: "RAG, agentes, geração de código e observabilidade",
        },
        {
          value: "Ops",
          label: "CI/CD, rollback, health-checks e Kubernetes",
        },
      ],
    },
    skills: {
      eyebrow: "Diferenciais técnicos",
      title: "Stack para produto, cloud e IA em produção.",
      description:
        "O foco não é listar tecnologia por listar. É mostrar onde cada camada entra: armazenamento, backend, agentes, deploy, segurança e operação.",
      capabilities: [
        {
          title: "Arquitetura limpa",
          description:
            "Separação de domínio, aplicação e infraestrutura para manter evolução sem acoplamento desnecessário.",
        },
        {
          title: "Segurança cloud",
          description:
            "Uso de IAM, KMS, políticas de bucket, isolamento e revisão de fluxos sensíveis em produtos com IA.",
        },
        {
          title: "Observabilidade",
          description:
            "Métricas, logs, health-checks, CLIs internas e rollback rápido para operar software real.",
        },
        {
          title: "Código de produto",
          description:
            "Frontend, backend, filas e infraestrutura conectados em uma experiência que resolve problema real.",
        },
      ],
      categories: [
        {
          title: "Cloud Storage & AWS",
          description:
            "Projetos com foco em armazenamento, segurança, custo e automação na camada cloud.",
        },
        {
          title: "Microsserviços & Backend",
          description:
            "Serviços separados por domínio, comunicação assíncrona e APIs prontas para evolução.",
        },
        {
          title: "IA, RAG & Agentes",
          description:
            "Uso de LLMs para produto, automação interna, geração de código e agentes especializados.",
        },
        {
          title: "DevOps & Plataforma",
          description:
            "Entrega contínua, infraestrutura como código, observabilidade e ambientes containerizados.",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos de destaque",
      title: "Cases com arquitetura, IA e cloud de verdade.",
      description:
        "Cada projeto mostra uma parte do meu repertório: geração de código com IA, Kubernetes, RAG, mensageria, AWS e arquitetura limpa.",
      sideNote:
        "Projetos construídos com backend, infra, dados e automação conectados ao mesmo objetivo: reduzir atrito operacional e colocar software em produção com clareza técnica.",
      challengeLabel: "Desafio",
      solutionLabel: "Solução",
      codeLabel: "Código",
      demoLabel: "Demo",
      items: [
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
          stack: [
            "Java 17",
            "Spring Boot",
            "AWS SES",
            "Maven",
            "Clean Architecture",
          ],
          githubUrl: "https://github.com/teuzowebdeveloper9/send-email-ses",
          accent: "blue",
        },
      ],
    },
    experience: {
      eyebrow: "Experiência profissional",
      title: "Entrega em produtos AI-first, cloud e microsserviços.",
      description:
        "Trajetória concentrada em plataformas que precisam sair do protótipo, aguentar uso real e continuar evoluindo com segurança.",
      contextLabel: "Contexto",
      impactLabel: "Impacto",
      items: [
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
      ],
    },
    education: {
      eyebrow: "Formação e idiomas",
      title: "Base acadêmica internacional, IA aplicada e inglês fluente.",
      description:
        "A formação aparece como parte do posicionamento: engenharia de software, mercado internacional, Anthropic e prática com ferramentas modernas de IA.",
      english: {
        language: "Inglês",
        level: "Fluente",
        note: "Leitura técnica, documentação, comunicação e entrevistas em contexto de tecnologia.",
        progress: 92,
      },
      jalaTitle: "Talento internacional em formação",
      jalaDescription:
        "Engenharia de Software com foco em arquitetura, cloud e indústria global.",
      academicLabel: "Formação acadêmica",
      certificationsLabel: "Certificações",
      items: [
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
      ],
      certifications: [
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
      ],
    },
    contact: {
      eyebrow: "Vamos conversar",
      title: "Cloud, IA e produto com execução de ponta a ponta.",
      description:
        "Aberto para oportunidades remotas, projetos de produto AI-first, arquitetura cloud, backend distribuído e automações com agentes de código.",
      direct: "Contato direto",
      footer:
        "Portfolio focado em IA, cloud, agentes de código e engenharia de software.",
    },
  },
  en: {
    nav: {
      home: "Home",
      mindset: "Delivery",
      skills: "Stack",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      languageButton: "EN / PT",
      contactButton: "Contact",
    },
    languageModal: {
      eyebrow: "Language",
      title: "Choose the portfolio language",
      description:
        "You can switch between Portuguese and English anytime from the top bar.",
      close: "Continue",
      active: "Selected",
    },
    hero: {
      availability: "Open to cloud, AI and product opportunities",
      location: "Remote - Brazil",
      kicker: "Cloud Storage · AI · Microservices · Coding Agents",
      role: "Software Developer",
      headline:
        "I build AI-first products, cloud architectures and automations that move from prototype to production.",
      summary:
        "Software Developer with experience in cloud architecture, microservices, automation and AI products. I work with Python, Golang, AWS, GCP, Kubernetes, Cloudflare and coding agents to turn complex requirements into scalable, observable and production-ready systems.",
      ctaEmail: "Email me",
      ctaCv: "Download CV",
      ctaProjects: "View projects",
      portraitTitle: "Engineering that speaks product.",
      portraitText: "From prompt to deploy, with cloud, agents and real operations.",
      github: "GitHub",
      linkedin: "LinkedIn",
      metrics: [
        { value: "4+ years", label: "software experience" },
        { value: "10+", label: "production microservices" },
        { value: "99%", label: "success on critical flows" },
        { value: "5-10s", label: "AI-first generation latency" },
      ],
    },
    mindset: {
      eyebrow: "Delivery mindset",
      title: "I learn fast, design with discipline and ship to production.",
      description:
        "My work is not about stacking frameworks. It is about understanding the problem, choosing a defensible architecture and delivering software that still works after deployment.",
      quote:
        "I aim to solve real problems with simple, scalable and operable solutions.",
      stats: [
        {
          value: "Cloud",
          label: "storage, queues, IAM, KMS and cost automation",
        },
        {
          value: "AI",
          label: "RAG, agents, code generation and observability",
        },
        {
          value: "Ops",
          label: "CI/CD, rollback, health checks and Kubernetes",
        },
      ],
    },
    skills: {
      eyebrow: "Technical edge",
      title: "A stack built for product, cloud and production AI.",
      description:
        "This is not a generic technology list. It shows where each layer fits: storage, backend, agents, deployment, security and operations.",
      capabilities: [
        {
          title: "Clean architecture",
          description:
            "Domain, application and infrastructure boundaries that keep systems evolvable without unnecessary coupling.",
        },
        {
          title: "Cloud security",
          description:
            "IAM, KMS, bucket policies, isolation and review of sensitive flows in AI products.",
        },
        {
          title: "Observability",
          description:
            "Metrics, logs, health checks, internal CLIs and fast rollback for real software operations.",
        },
        {
          title: "Product code",
          description:
            "Frontend, backend, queues and infrastructure connected into one useful product experience.",
        },
      ],
      categories: [
        {
          title: "Cloud Storage & AWS",
          description:
            "Projects focused on storage, security, cost control and automation at the cloud layer.",
        },
        {
          title: "Microservices & Backend",
          description:
            "Domain-oriented services, asynchronous communication and APIs designed to evolve.",
        },
        {
          title: "AI, RAG & Agents",
          description:
            "LLMs applied to product, internal automation, code generation and specialized agents.",
        },
        {
          title: "DevOps & Platform",
          description:
            "Continuous delivery, infrastructure as code, observability and containerized environments.",
        },
      ],
    },
    projects: {
      eyebrow: "Featured projects",
      title: "Case studies with real architecture, AI and cloud.",
      description:
        "Each project shows a different part of my range: AI code generation, Kubernetes, RAG, messaging, AWS and clean architecture.",
      sideNote:
        "Projects built with backend, infrastructure, data and automation connected to the same goal: reducing operational friction and shipping software with technical clarity.",
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      codeLabel: "Code",
      demoLabel: "Demo",
      items: [
        {
          title: "DeployForge AI",
          eyebrow: "AI-first platform",
          description:
            "A platform to generate, version and validate full applications from prompts, backed by a multi-service monorepo and observability.",
          challenge:
            "Unify code generation, validation, queues and artifacts in an architecture that could run locally and evolve toward production.",
          solution:
            "Go for the CI runner, Python/FastAPI for the agent service, NestJS for the API, Next.js for the frontend, S3-compatible MinIO for artifacts and Prometheus/Loki/Grafana for observability.",
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
            "A microservices architecture with synchronous and asynchronous communication, Kubernetes deployment and an automated pipeline.",
          challenge:
            "Create a distributed environment with independent services, resilient queues, routing and automated cluster deployment.",
          solution:
            "C# .NET, RabbitMQ, gRPC, Docker, Kubernetes manifests, NGINX Ingress, GKE and GitHub Actions for build, push and deploy.",
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
            "An intelligent resume generation platform with RAG, semantic search, async queues and multi-LLM support.",
          challenge:
            "Turn documents and professional history into targeted resumes while preserving context, consistency and real export flows.",
          solution:
            "Django, LangChain, LangGraph, Qdrant, Celery, Redis and MinIO orchestrating documents, embeddings, generation and storage.",
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
            "A REST API for sending emails through AWS SES, built with Clean Architecture and clear domain/infrastructure boundaries.",
          challenge:
            "Integrate a real AWS service without coupling business rules to the framework or provider-specific details.",
          solution:
            "Java 17, Spring Boot, Maven and hexagonal architecture with Controller, Application Service, Use Case, Gateway and Infra layers.",
          stack: [
            "Java 17",
            "Spring Boot",
            "AWS SES",
            "Maven",
            "Clean Architecture",
          ],
          githubUrl: "https://github.com/teuzowebdeveloper9/send-email-ses",
          accent: "blue",
        },
      ],
    },
    experience: {
      eyebrow: "Professional experience",
      title: "Shipping AI-first products, cloud systems and microservices.",
      description:
        "A path focused on platforms that need to move past prototypes, handle real usage and keep evolving safely.",
      contextLabel: "Context",
      impactLabel: "Impact",
      items: [
        {
          company: "Lasy AI",
          title: "Software Developer",
          period: "Jul 2025 - Present",
          context:
            "An AI-first platform where users describe applications in natural language and AI generates full code with live preview.",
          impact:
            "Reduced latency from roughly 60s to 5-10s, increased success rate from 85% to 99% and automated cleanup of idle objects.",
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
            "Built a Python/Django microservice to orchestrate AI agents with async queues, retries and exponential backoff.",
            "Built a Golang microservice for upload, storage and exposure of AI-generated images in S3.",
            "Implemented lifecycle policies, Batch Operations, IAM roles and KMS for cost control and data security.",
            "Set up GitHub Actions for continuous deployment, health checks and sandbox keep-alive operations.",
          ],
        },
        {
          company: "High Scale",
          title: "Software Developer",
          period: "Oct 2022 - Jul 2025",
          context:
            "A SaaS product company with AI platforms running on Kubernetes in GCP, multiple microservices and a need for operational automation.",
          impact:
            "Delivered 3 SaaS products to production, rollback under 2 minutes and 10+ microservices running on Kubernetes.",
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
            "Built internal CLIs in Golang for deployment and observability of microservices on GKE.",
            "Created Kubernetes operators to automate application lifecycle and scaling.",
            "Built High Copy: an AI copywriting agent using fine-tuning and RAG with Qdrant.",
            "Built High Agents: an AI agents SaaS for WhatsApp with Meta API, async queues and AI observability.",
          ],
        },
      ],
    },
    education: {
      eyebrow: "Education and languages",
      title: "International academic base, applied AI and fluent English.",
      description:
        "Education strengthens the positioning: software engineering, international market readiness, Anthropic training and modern AI tooling.",
      english: {
        language: "English",
        level: "Fluent",
        note: "Technical reading, documentation, communication and interviews in technology contexts.",
        progress: 92,
      },
      jalaTitle: "International talent in training",
      jalaDescription:
        "Software Engineering focused on architecture, cloud and the global software industry.",
      academicLabel: "Academic education",
      certificationsLabel: "Certifications",
      items: [
        {
          title: "Software Engineering",
          institution: "JALA University",
          period: "2025 - 2029",
          description:
            "International Commercial Software Engineering education focused on design, architecture, early hands-on practice, collaborative projects and the global software industry.",
          tags: [
            "International talent",
            "Software Architecture",
            "Cloud Development",
            "Machine Learning",
            "Bilingual Education",
          ],
        },
        {
          title: "Web Development Technician",
          institution: "IFCE",
          period: "2023 - 2024",
          description:
            "Technical foundation in web development, programming logic, infrastructure, databases and internet application development.",
          tags: ["Web", "Databases", "Infrastructure", "Programming"],
        },
      ],
      certifications: [
        {
          title: "AI Fluency for Small Businesses",
          issuer: "Anthropic",
          description:
            "Training focused on practical AI usage, productivity and applying models to business problems.",
        },
        {
          title: "Claude Code 101",
          issuer: "Anthropic",
          description:
            "Foundations of Claude Code for agent-assisted development, code analysis and engineering automation.",
        },
        {
          title: "FullCycle 3.0",
          issuer: "FullCycle",
          description:
            "Microservices, Docker, Kubernetes, distributed architecture, CI/CD and modern backend practices.",
        },
        {
          title: "Java Developer / React Developer",
          issuer: "DIO",
          description:
            "Complementary training in Java, Spring, React and web application development.",
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Cloud, AI and product with end-to-end execution.",
      description:
        "Open to remote opportunities, AI-first product work, cloud architecture, distributed backend systems and coding-agent automation.",
      direct: "Direct contact",
      footer:
        "Portfolio focused on AI, cloud, coding agents and software engineering.",
    },
  },
} as const;

export type PortfolioContent = (typeof localizedContent)[Locale];
export type LocalizedProject = PortfolioContent["projects"]["items"][number];
