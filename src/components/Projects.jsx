function Projects() {
    return (
            <div className="w-full mx-auto min-h-screen border-b-4 border-[#6B21A8] bg-[#0D0D0D]  mb-10 flex flex-col items-center px-4 py-6">
                
               <h1 className="text-2xl md:text-3xl font-extrabold flex items-center text-[#6B21A8] text-center mb-4">
                 meus projetos relevantes </h1>
                  <div className="border-4 border-[#6B21A8] text-white max-w-2xl mb-5 w-full break-words mx-auto px-4 py-2">
                    <h1 className="flex flex-center justify-center mb-5 text-4xl font-extrabold text-[#6B21A8]"> 01 - reestruturação do portal IFCE</h1>
                    <p className="text-center font-bold text-[#6B21A8] text-sm md:text-base leading-relaxed">
                        Durante minha atuação como responsável técnico na reestruturação completa do Portal   Acadêmico do IFCE, utilizei uma stack composta por React (com Next.js), Node.js, MongoDB
                       e Webhooks para promover melhorias significativas em desempenho, escalabilidade e experiência 
                      do usuário. Todo o projeto envolveu uma revisão profunda da arquitetura existente, desde a base
                       de dados até a camada de apresentação, com foco em modernização tecnológica e resultados mensuráveis                            Uma das decisões mais impactantes foi a migração do banco de dados de PostgreSQL para MongoDB(e redis para cache aside pattern), o que
                         proporcionou maior flexibilidade no armazenamento e um aumento de 300% na capacidade de escalabilidade 
                         do sistema, permitindo um crescimento contínuo no número de usuários sem perda de performance. No front-end,
                          substituí o sistema legado em Vue.js por uma estrutura moderna baseada em React com Next.js, o que permitiu a 
                          adoção de Server-Side Rendering (SSR), resultando em melhores tempos de carregamento e aprimoramento do SEO. Para
                           tornar a experiência mais agradável e interativa, implementei animações com Lottie, contribuindo para uma interface fluida e envolvente
                           . Além disso, desenvolvi uma camada de cache inteligente(usando redis) acionada por Webhooks, que reduziu em 60% o tempo médio de carregamento das páginas, caindo de 3 
                           segundos para menos de 1 segundo. Como resultado de todas essas otimizações, o sistema passou de uma limitação de 500 usuários simultâneos para suportar mais de 3 mil
                             usuários ao mesmo tempo, com estabilidade e alta disponibilidade mesmo em períodos de pico.
                    </p>

                  </div>
                  <div className="border-4 border-[#6B21A8] text-white mb-5 max-w-2xl w-full break-words mx-auto px-4 py-2">
                    <h1 className="flex flex-center justify-center mb-5 text-4xl font-extrabold text-[#6B21A8]"> 02 - criação do recisão fácil</h1>
                    <p className="text-center font-bold text-[#6B21A8] text-sm md:text-base leading-relaxed">
                      Fui responsável por idealizar, desenvolver e manter a plataforma Rescisão Fácil, um simulador trabalhista
                       automatizado criado com o objetivo de simplificar os cálculos de rescisão contratual, seguro-desemprego e
                        verbas rescisórias, seguindo rigorosamente a legislação brasileira. A proposta da aplicação foi democratizar
                         o acesso à informação jurídica, permitindo que qualquer pessoa pudesse realizar simulações confiáveis de maneira
                          intuitiva, rápida e sem depender de intermediários. Para isso, desenvolvi uma API robusta em Node.js, capaz de
                           processar cálculos trabalhistas complexos com precisão e conformidade legal. Modelei o banco de dados em MongoDB,
                            otimizando o armazenamento dos históricos e garantindo consultas eficientes. No front-end, optei por Vue.js, construindo
                             uma interface leve, responsiva e acessível a usuários de diferentes perfis. Para viabilizar a sustentabilidade financeira
                              da plataforma, integrei o sistema ao Google AdSense, o que hoje garante a monetização do projeto e possibilita sua manutenção
                               contínua. A plataforma conta com mecanismos de segurança e validação para proteger os dados dos usuários, oferecendo um ambiente
                                seguro e confiável. Atualmente, o Rescisão Fácil recebe mais de 8 mil acessos mensais e se consolidou como uma referência prática
                                e acessível para trabalhadores em busca de informações sobre seus direitos. O projeto também foi fundamental para meu desenvolvimento 
                                técnico em modelagem de dados, construção de APIs RESTful e design de interfaces centradas na experiência do usuário.
                    </p>

                  </div>
                   <div className="border-4 border-[#6B21A8] text-white mb-5 max-w-2xl w-full break-words mx-auto px-4 py-2">
                    <h1 className="flex flex-center justify-center mb-5 text-4xl font-extrabold text-[#6B21A8]"> 03 - desenvolvimento do SAAS egoth</h1>
                    <p className="text-center font-bold text-[#6B21A8] text-sm md:text-base leading-relaxed">
                      Estou atualmente desenvolvendo o Egoth, uma plataforma SaaS inovadora voltada à comunidade gótica
                       e a grupos alternativos, com a proposta de oferecer um espaço seguro, personalizado e dinâmico para conexão,
                        compartilhamento de conteúdo e interações exclusivas, e vendas e trocas de acessorios. O projeto é construído com foco em segurança,
                         escalabilidade
                         e experiência do usuário, adotando tecnologias modernas tanto no front-end quanto no back-end. Tenho seguido uma abordagem 
                         de desenvolvimento iterativo, guiada por qualidade e aprendizado contínuo por meio de documentação oficial e resolução de problemas reais.
                          Atuo de forma full stack, utilizando React.js na construção de interfaces dinâmicas, responsivas e altamente reutilizáveis, enquanto no backend
                           desenvolvo APIs internas, gerencio rotas protegidas e integro serviços externos como o Stripe, responsável pelo sistema de pagamentos da plataforma.
                            Um dos diferenciais do Egoth é o uso de um algoritmo de recomendação baseado em árvores binárias, que proporciona uma personalização profunda do conteúdo
                             entregue aos usuários. A arquitetura inclui níveis de acesso e rotas privadas para garantir uma experiência segura e exclusiva, com papéis bem definidos entre usuários e administradores. 
                             No processo, tenho aplicado boas práticas de segurança, performance e versionamento de código com Git e GitHub, trabalhando com gestão de branches, issues e merges
                             . Este projeto representa não só uma aplicação real de minhas habilidades técnicas, mas também um compromisso em construir 
                             algo com propósito e impacto dentro de uma comunidade específica, unindo tecnologia com sensibilidade social.
                    </p>

                  </div>

            </div>
    )
}

export default Projects;