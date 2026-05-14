# Mateus da Silva Oliveira — Portfolio

Portfolio pessoal de Mateus da Silva Oliveira, Full Stack Developer / AI Engineer com foco em React, Next.js, NestJS, agentes de IA, RAG, cloud e DevOps.

## Objetivo

O projeto apresenta uma narrativa tecnica e visual mais madura do meu trabalho:

- desenvolvimento full stack com TypeScript;
- IA aplicada, agentes, RAG e integracoes com LLMs;
- cloud, Docker, CI/CD, Supabase, Cloudflare Workers e GCP;
- projetos reais com deploy e demonstracao;
- case visual do Carti Visual Archive com video de apresentacao.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Icons
- React Three Fiber / Drei / Postprocessing
- Lottie React

## Estrutura

```txt
src/
  components/          # secoes e componentes visuais
  components/ui/       # componentes reutilizaveis
  data/                # conteudo estruturado do portfolio
  images/              # imagens importadas pelo bundle
  index.css            # estilos globais e animacoes
public/
  projects/            # videos e assets publicos de projetos
```

## Experiencia e Agentes

O portfolio agora possui uma camada de experiencia global com aura de cursor,
barra de progresso, navegacao por secoes e uma secao dedicada ao workflow com
agentes de codigo.

Agentes destacados:

- Claude Code, para leitura profunda, refatoracao, arquitetura e docs;
- Codex, para implementacao, validacao, revisao de diff e entrega;
- Cursor Agent e Antigravity como apoio para iteracoes e experimentos.

Consulte `CLAUDE.md` e `AGENTS.md` antes de usar agentes neste repo.

## Case Carti Visual Archive

O portfolio inclui o projeto Carti Visual Archive, um site de fa em homenagem ao Playboi Carti:

- frontend React/TypeScript;
- backend NestJS/TypeScript;
- Supabase para letras e metadados;
- Mistral para transcricao/estruturação;
- experiencia visual com eras Magnolia, Whole Lotta Red e I AM MUSIC;
- video em `public/projects/carti-archive-demo.mp4`.

Links do projeto:

- Front: https://github.com/teuzowebdeveloper9/carti-front
- Back: https://github.com/teuzowebdeveloper9/carti-back

## Rodar Local

```bash
npm install
npm run dev
```

## Validacao

```bash
npm run lint
npm run build
```

Se o `dist` local estiver com permissoes antigas, valide com:

```bash
npm run build -- --configLoader runner --outDir /tmp/my-new-portfolio-dist --emptyOutDir true
```

## Contato

- Email: mateussoftwaredeveloper@gmail.com
- GitHub: https://github.com/teuzowebdeveloper9
- LinkedIn: https://www.linkedin.com/in/matheus-da-silva-%F0%9F%87%A7%F0%9F%87%B7-b96541380/
