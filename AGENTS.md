# AGENTS.md

Guia para agentes de codigo trabalhando neste repo.

## Agentes usados pelo dono do repo

- Claude Code: foco em contexto amplo, refatoracao, arquitetura e docs.
- Codex: foco em implementacao, testes, revisao de diff, commit e entrega.
- Cursor Agent: apoio para edicoes rapidas dentro do editor.
- Antigravity: apoio experimental para fluxos agenticos e prototipos.

Claude Code e Codex sao os agentes principais. Os outros entram como apoio.

## Estrutura do Projeto

```txt
src/
  components/      secoes visuais e componentes de experiencia
  components/ui/   primitivas reutilizaveis do portfolio
  data/            conteudo estruturado e tipado
  images/          imagens importadas pelo bundle
public/
  projects/        videos de cases
```

## Regras de Mudanca

1. Nunca misture refatoracao grande com ajuste visual pequeno sem necessidade.
2. Se adicionar uma nova secao, registre o `id` em `src/data/navigation.ts`.
3. Se adicionar conteudo repetivel, crie ou atualize um arquivo em `src/data`.
4. Se adicionar asset publico, use caminho estavel em `public/` e referencie
   pela URL publica.
5. Antes de finalizar, rode pelo menos `npm run lint`.

## Padrao Visual

- Dark premium, com contraste alto e acentos em cyan, lime e magenta.
- Cantos discretos: prefira `rounded-md` e `rounded-lg`.
- Evite texto explicativo demais dentro da UI; deixe o portfolio vender pelo
  layout, pelos cases e pela interacao.
- A experiencia deve valorizar produto, IA, cloud e agentes de codigo.

## Checklist de Entrega

- `npm run lint`
- `npm run build` quando a mudanca afetar bundle, assets ou configuracao
- `git status --short`
- revisar diff dos arquivos alterados
- commit claro quando o usuario pedir commit/push
