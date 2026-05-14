import { FaArrowUpRightFromSquare, FaShieldHalved, FaWandMagicSparkles } from "react-icons/fa6";
import { agentWorkflow, codingAgents, type CodingAgent } from "../data/codingAgents";
import SectionHeading from "./ui/SectionHeading";
import SectionShell from "./ui/SectionShell";

function AgentCard({ agent }: { agent: CodingAgent }): JSX.Element {
  const Icon = agent.icon;
  const isPrimary = agent.emphasis === "primary";

  return (
    <article
      className={`group relative overflow-hidden border border-white/10 bg-black/35 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 ${
        isPrimary ? "min-h-[360px]" : "min-h-[260px]"
      }`}
    >
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${agent.accentClass}`} />
      <div className="absolute right-4 top-4 text-7xl font-black text-white/[0.035]">
        {isPrimary ? "MAIN" : "AUX"}
      </div>

      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="grid h-14 w-14 place-items-center border border-white/10 bg-white/[0.04] text-3xl text-white shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              <Icon />
            </div>
            <span
              className={`border px-3 py-1 text-xs font-black uppercase ${
                isPrimary
                  ? "border-[#d7ff4d]/45 bg-[#d7ff4d]/10 text-[#d7ff4d]"
                  : "border-white/10 bg-white/[0.04] text-slate-300"
              }`}
            >
              {isPrimary ? "foco" : "apoio"}
            </span>
          </div>

          <div>
            <h3 className={`${isPrimary ? "text-3xl" : "text-2xl"} font-black text-white`}>
              {agent.name}
            </h3>
            <p className="mt-2 text-sm font-semibold text-cyan-100">{agent.role}</p>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">{agent.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {agent.strengths.map((strength) => (
            <span
              key={strength}
              className="border border-white/10 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-slate-200 transition group-hover:border-white/20"
            >
              {strength}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function CodingAgents(): JSX.Element {
  const primaryAgents = codingAgents.filter((agent) => agent.emphasis === "primary");
  const supportAgents = codingAgents.filter((agent) => agent.emphasis === "support");

  return (
    <SectionShell id="agents" tone="warm" innerClassName="max-w-6xl space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow="agentic workflow"
          title="Agentes de codigo como parte real do meu processo."
          description="Eu uso agentes para acelerar engenharia sem terceirizar criterio. O foco fica em Claude Code e Codex; Cursor Agent e Antigravity entram como apoio para iteracoes rapidas e experimentos."
          align="left"
        />

        <div className="border border-white/10 bg-black/35 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
          <div className="mb-4 flex items-center gap-3 text-[#d7ff4d]">
            <FaShieldHalved />
            <p className="font-black">Regra de uso</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            Agente nenhum substitui ownership: eu defino escopo, reviso diff,
            testo o que mudou e mantenho a arquitetura simples o bastante para
            outro dev continuar.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {primaryAgents.map((agent) => (
          <AgentCard key={agent.name} agent={agent} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {supportAgents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>

        <div className="relative overflow-hidden border border-white/10 bg-[#07070b]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#ffb86b,#22d3ee,#d7ff4d)]" />
          <div className="mb-6 flex items-center gap-3 text-cyan-100">
            <FaWandMagicSparkles />
            <h3 className="text-2xl font-black text-white">Como isso aparece no trabalho</h3>
          </div>

          <div className="grid gap-3">
            {agentWorkflow.map((step, index) => (
              <div
                key={step}
                className="grid grid-cols-[3rem_1fr] items-start gap-3 border border-white/10 bg-white/[0.035] p-4"
              >
                <span className="grid h-9 w-9 place-items-center border border-cyan-300/25 bg-cyan-300/10 text-xs font-black text-cyan-100">
                  0{index + 1}
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{step}</p>
              </div>
            ))}
          </div>

          <a
            href="#projects"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 border border-[#d7ff4d]/45 bg-[#d7ff4d]/10 px-4 font-extrabold text-[#d7ff4d] transition hover:-translate-y-0.5 hover:bg-[#d7ff4d] hover:text-black"
          >
            Ver isso nos cases
            <FaArrowUpRightFromSquare className="text-sm" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

export default CodingAgents;
