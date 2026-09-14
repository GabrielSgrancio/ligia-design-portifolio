# Repository audit — Origin pipeline

Data: 2026-09-13
Repositório: `git@github.com:GabrielSgrancio/ligia-design-portifolio.git`
Branch auditada: `main`
Commit base: `3a43c65`

## Estado encontrado

- Worktree limpo e alinhado com `origin/main`.
- Sem commits locais, alterações não rastreadas ou divergência de branch antes do trabalho.
- Aplicação React 19 + TypeScript + Vite 6 + Tailwind CSS 4.
- Entrypoint: `src/main.tsx` → `src/App.tsx`.
- Scripts: `dev`, `build`, `preview`, `lint`; não há suíte de testes configurada.
- Motion ativo via `motion/react`; a Hero V1 ainda importa `framer-motion`, resolvido como dependência transitiva e não declarado diretamente.
- Fontes carregadas por Google Fonts no `index.html`; `La Belle Aurore` também é importada em `src/index.css`.
- Breakpoints são os padrões responsivos do Tailwind (`sm`, `md`, `lg`, `xl`, `2xl`) com valores fluidos e arbitrários.
- Acessibilidade global existente: foco visível e `prefers-reduced-motion` em `src/index.css`.

## Contrato narrativo adotado

O repositório é material técnico, não fonte narrativa. A arquitetura válida vem de `portfolio-work/canonical` e obedece ao mundo físico editorial:

`espelho → janela → escrivaninha → penteadeira → caderno → monitor → gaveta/pasta → arquivo → espelho final`

Nesta missão, somente a passagem `espelho → janela` e a seção Origin serão implementadas.

## Classificação de áreas

| Área | Classificação | Decisão |
|---|---|---|
| `src/components/hero-v2/HeroReplica.tsx` | LIVE | Hero canônica montada pelo App; preservar direção visual e assets. |
| `src/components/hero-v2/*` | LIVE | Contrato visual/técnico vigente para temperatura, luz, materialidade, composição híbrida e escala. |
| `public/assets/hero-v2/*` | LIVE | Assets materiais vigentes da Hero V2; não substituir nem simplificar em CSS. |
| `src/components/Navigation.tsx` | ADAPT | Navegação funcional, mas os destinos ainda refletem a arquitetura antiga. Nesta missão, manter sem expandir escopo. |
| `src/components/sections/ChildhoodSection.tsx` | REPLACE | Placeholder em grid de cards; será substituído pela nova `OriginSection`. |
| `src/components/sections/MakeupSection.tsx` | REMOVE_LATER | Arquitetura anterior; não pertence à entrega Origin atual. |
| `src/components/sections/NatureSection.tsx` | REMOVE_LATER | Duplica Mirantão como seção separada, contrariando o Origin canônico. |
| `src/components/sections/ThreePhasesSection.tsx` | REMOVE_LATER | Estrutura “três fases” foi superada pela arquitetura canônica. |
| `src/components/sections/TrampolimSection.tsx` | REPLACE | Placeholder/card antigo; case será reconstruído em missão posterior. |
| `src/components/sections/LigiaBeautySection.tsx` | REPLACE | Placeholder/card antigo; case será reconstruído em missão posterior. |
| `src/components/sections/ContactSection.tsx` | REPLACE | Arquitetura e links provisórios; não implementar nesta missão. |
| `src/components/sections/FinalMirrorSection.tsx` | REPLACE | Retorno ao espelho antigo; não implementar nesta missão. |
| `src/components/CaseStudyDrawer.tsx` | REMOVE_LATER | Drawer genérico com placeholders; conflita com cases editoriais futuros. |
| `src/data/projects.ts` e `src/types.ts` | REMOVE_LATER | Dados/shape da arquitetura antiga; não necessários para Origin. |
| `src/components/PhotoCard.tsx` | REUSE | Comportamento genérico pode informar padrões; não herdar estética dominante de card/fita. |
| `src/components/Tape.tsx` | REUSE | Utilitário potencial; Origin usará materialidade de assets, não fita CSS obrigatória. |
| `src/components/BotanicalElement.tsx` | REUSE | Motion/reduced-motion útil, mas não repetir flores da Hero em Origin. |
| `src/components/sections/HeroMirror.tsx` | LEGACY | Hero V1 não montada. Não orientar a nova seção. |
| `src/components/hero/*` | LEGACY | Composição mural anterior; comportamento genérico pode ser consultado, direção visual não. |
| `src/components/mirror/*` | LEGACY | Espelho V1 e parallax anterior; não montados. |
| `public/assets/antique-mirror-*`, `ligia-reflection.jpg`, `wall-texture.jpg`, botânicos/tapes raiz | LEGACY | Assets ligados à Hero V1 e componentes anteriores; manter sem uso novo. |
| `src/index.css` | ADAPT | Tokens, tipografia, foco e reduced motion são úteis; acrescentar apenas estilos necessários ao Origin. |
| `src/App.tsx` | ADAPT | Manter Hero V2 e substituir a arquitetura montada por Hero + Origin nesta missão. |

## Hero LIVE

`src/App.tsx` importa e monta `src/components/hero-v2/HeroReplica.tsx`. A árvore `hero-v2` combina HTML para estrutura e legibilidade com PNGs para materialidade complexa. O espelho central usa `ligia-foto-espelho-moldura.png`; parede, flores, papéis e faixa fotográfica são assets separados. A direção tem luz quente lateral, sombras suaves, textura de parede, profundidade restrita e tipografia editorial sobre o espelho.

## Hero LEGACY

`src/components/sections/HeroMirror.tsx` monta a árvore antiga `src/components/hero/*` + `src/components/mirror/*`, mas não é importada pelo App atual. Essa geração depende de moldura antiga, reflexão separada, paredes e botânicos raiz. Pode oferecer referências técnicas isoladas de reduced motion e pointer tracking; não deve contaminar o Origin visualmente.

## Colisões e riscos

1. `App.tsx` mistura Hero V2 com a arquitetura narrativa V1 logo abaixo dela.
2. `ChildhoodSection` e `NatureSection` dividem artificialmente infância e Mirantão; o canônico une ambos no Origin/janela.
3. `PhotoCard` e várias seções incentivam cards, fita e scrapbook, proibidos como gramática dominante do Origin.
4. `ThreePhasesSection` preserva o conceito antigo de três fases.
5. `CaseStudyDrawer` e os cases atuais são placeholders, não os cases canônicos.
6. `framer-motion` aparece em arquivos legados sem dependência direta; código LIVE usa `motion/react`.
7. `Navigation` aponta para `projetos` e `contato`, seções que não serão montadas nesta entrega; deve permanecer funcional sem criar conteúdo fora do escopo.
8. Assets existentes somam aproximadamente 38 MB; o conjunto `hero-v2` soma cerca de 24 MB. Origin deve usar formatos responsivos e não aumentar o preload da Hero.
9. `index.html` declara `lang="en"` apesar de conteúdo em português; correção é segura e pertence à implementação base.
10. Não há testes automatizados; validação mínima será lint, build e QA visual em três viewports.

## Estratégia de implementação autorizada

- Preservar `HeroReplica` e seus assets.
- Criar `src/components/origin/OriginSection.tsx` e estilos/recursos próprios.
- Criar `public/assets/origin/` com fontes documentais reais e assets materiais derivados do Visual Contract.
- Montar apenas `HeroReplica` + `OriginSection` no App durante este checkpoint.
- Manter código legado no repositório, sem deleção massiva.
- Implementar álbum estável, contador, botões, teclado, swipe, expansão da memória, foco visível e reduced motion.
- Validar desktop amplo, desktop/laptop menor e mobile no navegador.
