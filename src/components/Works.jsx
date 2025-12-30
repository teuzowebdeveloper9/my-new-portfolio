function Works() {
  const experiences = [
    {
      company: "Lasy AI",
      title: "Full Stack / IA Engineer",
      period: "out/2025 – atual",
      highlights: [
        "Automação multiagente e pipelines de streaming integrando GPT/Claude/Mistral.",
        "Ferramentas custom (tools) com vetores, RAG e governança de dados.",
        "CI/CD com Docker e GCP, garantindo performance e observabilidade.",
      ],
      tag: "IA & Cloud",
    },
    {
      company: "High Scale",
      title: "Desenvolvedor Full Stack Pleno",
      period: "ago/2025 – atual",
      highlights: [
        "Soluções B2B em .NET/TypeScript com SLAs rígidos em GCP.",
        "APIs seguras, observabilidade e hardening de serviços.",
        "Decisões de arquitetura e escalabilidade com entregas contínuas.",
      ],
      tag: "Plataformas B2B",
    },
    {
      company: "Infinity Force",
      title: "Desenvolvedor Full Stack",
      period: "jun/2025 – ago/2025",
      highlights: [
        "Aplicações Web3 (Ethereum/Solana) com NestJS, PostgreSQL e MongoDB.",
        "Integrações com carteiras digitais e pipelines seguros.",
        "Ambientes escaláveis com Docker e práticas DevSecOps.",
      ],
      tag: "Web3",
    },
    {
      company: "Avanti",
      title: "Desenvolvedor Full Stack",
      period: "abr/2024 – mai/2025",
      highlights: [
        "E-commerces de alta performance com React, Node.js e MongoDB.",
        "SSR focado em SEO, experiência e compatibilidade entre navegadores.",
        "Trabalho em squads ágeis, liderando diagnósticos e melhorias críticas.",
      ],
      tag: "E-commerce",
    },
  ];

  return (
    <section className="w-full mx-auto border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-12 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="flex justify-center items-center text-[#6B21A8] text-3xl font-extrabold">
            Experiência Profissional
          </h1>
          <p className="text-center text-gray-200">
            Estruturei produtos complexos em IA, B2B, Web3 e e-commerce, sempre com foco em performance,
            segurança e entregas rápidas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="border border-[#6B21A8] rounded-2xl p-5 bg-[#0b0b12] shadow-[0_0_30px_rgba(107,33,168,0.2)] space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-gray-400">{experience.period}</p>
                  <h3 className="text-xl font-bold text-[#c084fc] leading-tight">
                    {experience.title}
                  </h3>
                  <p className="text-lg text-white">{experience.company}</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full border border-[#6B21A8] text-[#6B21A8] bg-[#1a1625]">
                  {experience.tag}
                </span>
              </div>

              <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;