import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type Project = {
  title: string;
  tag: string;
  stack: string;
  impact: string;
  bullets: string[];
  primaryUrl: string;
  primaryLabel: string;
  secondaryUrl: string | null;
  secondaryLabel: string | null;
};

type TabId = "featured" | "public";

type Tab = {
  id: TabId;
  label: string;
};

const tabs: Tab[] = [
  { id: "featured", label: "Case principal" },
  { id: "public", label: "Projetos públicos" },
];

const featuredProject: Project = {
  title: "anotEX.ai",
  tag: "IA aplicada em produção",
  stack:
    "NestJS, React 19, TypeScript, Supabase, Cloudflare R2, BullMQ, Upstash Redis, Groq, Railway",
  impact:
    "Plataforma que transforma aulas em resumo, flashcards, mapa mental, quiz e chat com RAG.",
  bullets: [
    "Processa gravações, uploads e links do YouTube para gerar materiais de estudo automaticamente.",
    "Arquitetura com backend em Clean Architecture e frontend em Feature-Sliced Design.",
    "Pipeline assíncrono com fila para transcrição, geração de materiais, revisão espaçada e chat contextual.",
  ],
  primaryUrl: "https://anoteexai.tight-resonance-42ff.workers.dev/",
  primaryLabel: "Abrir plataforma",
  secondaryUrl: null,
  secondaryLabel: null,
};

const publicProjects: Project[] = [
  {
    title: "API sem Framework",
    tag: "Arquitetura backend",
    stack: "Node.js, TypeScript, módulos nativos",
    impact:
      "API REST construída sem framework externo para demonstrar domínio de HTTP, organização em camadas e tipagem forte.",
    bullets: [
      "Separação clara entre controladores, serviços, repositórios e utilitários.",
      "Enums para padronizar status HTTP e respostas JSON consistentes.",
      "Projeto forte para mostrar base de backend sem abstrações pesadas.",
    ],
    primaryUrl: "https://github.com/teuzowebdeveloper9/api-sem-framework",
    primaryLabel: "Ver repositório",
    secondaryUrl: null,
    secondaryLabel: null,
  },
  {
    title: "Wallet with Mongo",
    tag: "Backend com auth",
    stack: "Node.js, Express, MongoDB, JWT",
    impact:
      "Backend de carteira digital com autenticação, saldo e movimentações, pensado para futura integração com frontend.",
    bullets: [
      "Rotas RESTful para cadastro, login, carteira e transações.",
      "Proteção via JWT e foco em integridade dos dados financeiros.",
      "Mostra modelagem de negócio, segurança e organização de API.",
    ],
    primaryUrl: "https://github.com/teuzowebdeveloper9/wallet-with-mongo",
    primaryLabel: "Ver repositório",
    secondaryUrl: null,
    secondaryLabel: null,
  },
  {
    title: "Teuzo-Web CRUD",
    tag: "Full stack com deploy",
    stack: "Frontend + backend CRUD com publicação em produção",
    impact:
      "Aplicação para cadastro e gerenciamento de alunos, com narrativa própria, fluxo completo e demonstração online.",
    bullets: [
      "Entrega fluxo de criação, listagem e remoção em uma interface pública navegável.",
      "Projeto simples, mas útil para demonstrar produto funcionando de ponta a ponta.",
      "Tem repositório público e demo publicada, o que ajuda muito em avaliação técnica.",
    ],
    primaryUrl: "https://crud-ueed.vercel.app/",
    primaryLabel: "Ver demo",
    secondaryUrl: "https://github.com/teuzowebdeveloper9/crud",
    secondaryLabel: "Ver código",
  },
];

function Projects(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabId>("featured");

  const visibleProjects =
    activeTab === "featured" ? [featuredProject] : publicProjects;

  return (
    <section className="w-full mx-auto border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-10 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#6B21A8]">
            Projetos em destaque
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto">
            Curadoria baseada no que melhor representa meu trabalho hoje:
            produto com IA em produção, backend bem estruturado e projetos
            públicos que mostram execução real.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? "border-[#6B21A8] bg-[#6B21A8] text-[#0D0D0D]"
                  : "border-[#6B21A8] bg-transparent text-[#c084fc] hover:bg-[#1a1625]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={`grid gap-6 ${
            activeTab === "featured" ? "grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="border border-[#6B21A8] rounded-2xl p-5 bg-[#0b0b12] shadow-[0_0_30px_rgba(107,33,168,0.2)] space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl font-bold text-[#c084fc] leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.stack}</p>
                  </div>
                  <p className="text-sm text-gray-300">{project.impact}</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full border border-[#6B21A8] text-[#6B21A8] bg-[#1a1625] whitespace-nowrap">
                  {project.tag}
                </span>
              </div>

              <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.primaryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#6B21A8] hover:bg-transparent hover:text-[#6B21A8] border-2 border-[#6B21A8] min-h-[46px] px-4 text-[#0D0D0D] font-extrabold rounded transition-colors"
                >
                  <FaArrowUpRightFromSquare className="text-sm" />
                  {project.primaryLabel}
                </a>

                {project.secondaryUrl && project.secondaryLabel ? (
                  <a
                    href={project.secondaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-[#6B21A8] text-[#6B21A8] hover:bg-[#6B21A8] hover:text-[#0D0D0D] min-h-[46px] px-4 font-extrabold rounded transition-colors"
                  >
                    <FaGithub className="text-base" />
                    {project.secondaryLabel}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
