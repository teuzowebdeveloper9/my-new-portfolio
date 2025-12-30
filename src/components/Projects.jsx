function Projects() {
  const projects = [
    {
      title: "Portal IFCE — reestruturação completa",
      tag: "SSR + Cache + Escala",
      stack: "Next.js, Node.js, MongoDB, Redis, Webhooks",
      impact: "300% de escala, páginas < 1s, 3k+ usuários simultâneos",
      bullets: [
        "Migração PostgreSQL → MongoDB + Redis (cache aside) para escalar.",
        "SSR com Next.js para SEO e carregamento rápido.",
        "Cache acionado por webhooks, cortando tempo de resposta e picos.",
      ],
    },
    {
      title: "Rescisão Fácil — simulador trabalhista",
      tag: "API + UX + Monetização",
      stack: "Node.js, MongoDB, Vue.js",
      impact: "8k+ acessos/mês, cálculos legais automatizados e monetização",
      bullets: [
        "API para cálculos de rescisão e seguro-desemprego com conformidade legal.",
        "Front em Vue.js focado em clareza, responsividade e acessibilidade.",
        "Monetização via AdSense garantindo sustentabilidade do produto.",
      ],
    },
    {
      title: "Egoth — plataforma SaaS",
      tag: "Recomendações + Pagamentos",
      stack: "React, Node.js, Stripe",
      impact: "Conteúdo personalizado e pagamentos seguros com roles privadas",
      bullets: [
        "Recomendações por árvore para entregar conteúdo certo para cada perfil.",
        "Rotas privadas, níveis de acesso e segurança aplicada.",
        "Stripe para pagamentos e assinaturas com governança.",
      ],
    },
  ];

  return (
    <section className="w-full mx-auto border-b-4 border-[#6B21A8] bg-[#0D0D0D] mb-10 px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#6B21A8]">Projetos relevantes</h1>
          <p className="text-gray-200">Performance, UX e negócio caminhando juntos.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-[#6B21A8] rounded-2xl p-5 bg-[#0b0b12] shadow-[0_0_30px_rgba(107,33,168,0.2)] space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#c084fc] leading-tight">{project.title}</h3>
                  <p className="text-sm text-gray-400">{project.stack}</p>
                  <p className="text-sm text-gray-300 mt-1">{project.impact}</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold rounded-full border border-[#6B21A8] text-[#6B21A8] bg-[#1a1625]">
                  {project.tag}
                </span>
              </div>

              <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                {project.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;