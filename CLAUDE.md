# CLAUDE.md

Guia para usar Claude Code neste portfolio.

## Papel do Claude Code

Claude Code deve atuar como agente principal para leitura profunda do repo,
refatoracao, documentacao e revisao de arquitetura. Use o agente para manter
contexto amplo antes de alterar componentes visuais ou dados do portfolio.

## Fluxo Obrigatorio

1. Leia `README.md`, `AGENTS.md` e os arquivos afetados antes de editar.
2. Preserve a estrutura atual: conteudo em `src/data`, secoes em
   `src/components` e componentes reutilizaveis em `src/components/ui`.
3. Prefira pequenas mudancas coesas. Evite reescrever uma secao inteira se o
   problema for local.
4. Rode `npm run lint` antes de entregar. Rode build quando mexer em Vite,
   assets publicos, imports pesados ou estrutura de bundle.
5. Revise `git diff` e explique apenas o que mudou de fato.

## Design

- O portfolio deve parecer um produto visual, nao um curriculo estatico.
- Mantenha a atmosfera dark com acentos em cyan, lime e magenta.
- Evite cards arredondados demais; use `rounded-md` ou `rounded-lg` na maior
  parte da interface.
- Movimento precisa ter funcao: orientar navegacao, destacar uma prova visual
  ou reforcar hierarquia.
- Respeite `prefers-reduced-motion` quando adicionar animacoes.

## Codigo

- Componentes devem ser pequenos e nomeados pelo papel visual.
- Dados editaveis ficam em `src/data/*`.
- Nao duplique listas hardcoded dentro de componentes quando elas podem virar
  dados tipados.
- Mantenha TypeScript estrito e evite `any`.
- Nao adicione dependencia nova sem necessidade clara.

## Assets

- Videos e PDFs publicos ficam em `public/`.
- Imagens importadas pelo bundle ficam em `src/images`.
- O botao de CV baixa `public/mateus-dev-curriculo.pdf`; se trocar o arquivo,
  preserve esse caminho para nao quebrar links.
