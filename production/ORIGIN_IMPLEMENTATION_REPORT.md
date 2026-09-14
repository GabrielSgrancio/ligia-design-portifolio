# Origin — Implementation Report

Data: 2026-09-13  
Escopo concluído: Hero preservada + seção Origin implementada e corrigida.  
Escopo não iniciado: Creative Archive, Escrivaninha, Penteadeira, Método e Projetos.

## Direção consolidada

Origin é o segundo espaço editorial da experiência: a Hero funciona como espelho; Origin funciona como uma janela para o mundo de Mirantão. A cena foi recomposta a partir da referência aprovada `production/ORIGIN_REFERENCE_BASE.png` e do manifesto de assets do Drive, sem usar a composição antiga como background do runtime.

## Hero preservada

Hero LIVE: `src/components/hero-v2/HeroReplica.tsx`, com seus assets em `public/assets/hero-v2/`. A Hero LIVE permanece visualmente preservada; seu fundo agora é fornecido pelo wrapper físico compartilhado para eliminar a emenda.

## Assets aprovados utilizados

- `public/assets/hero-v2/01_wall_texture_sunlit.png` — única parede física compartilhada pelo wrapper Hero + Origin.
- `public/assets/origin/01_origin-window-shell-v2.png` — fonte V2; o runtime usa o recorte transparente local `01_origin-window-shell-v2-cutout.png`.
- `public/assets/origin/02_origin-curtain-left-v2.png` — cortina independente em camada transparente.
- `public/assets/origin/03_origin-child-16-taped.png` — memória infantil real, usada em pequena escala e no modal.
- `public/assets/origin/04_origin-child-princess-taped.png` — segunda memória infantil real, usada em pequena escala e no modal.
- `public/assets/origin/03_origin-chair-v2.png` — detalhe discreto de cadeira no canto inferior esquerdo.
- `public/assets/origin/06_mirantao-primary.jpeg` — fotografia principal do álbum.
- `public/assets/origin/07_mirantao-secondary.jpeg` — fotografia secundária do álbum.
- `public/assets/origin/08_mirantao-sunset.jpeg` — paisagem de Mirantão ao entardecer.
- `public/assets/origin/09_mirantao-mist.jpeg` — paisagem de Mirantão coberta pela névoa.

As fotografias documentais de Mirantão e as memórias da Lígia não foram geradas ou recriadas. As duas memórias usadas nesta rodada são os PNGs anexados, já com moldura e fita. Os quatro assets V2 foram sincronizados de LIGIA / origin-assets; as versões antigas não são referenciadas pelo runtime.

## Arquivos modificados/adicionados

- `src/App.tsx`: monta Hero LIVE e Origin sobre uma única parede física contínua.
- `src/components/Navigation.tsx`: navegação restrita às áreas disponíveis, com comportamento mobile preservado.
- `src/components/origin/OriginSection.tsx`: composição, álbum, memórias e modal; assets V2 conectados.
- `index.html`: idioma `pt-BR`.
- `public/assets/origin/**`: assets aprovados e fontes preservadas.
- `production/ORIGIN_REFERENCE_BASE.png`: referência achatada recebida para comparação.
- `production/ORIGIN_ASSET_PLAN.md`, `production/ORIGIN_VISUAL_QA.md` e este relatório.

## Interações implementadas

- Álbum data-driven com quatro fotos reais congeladas agora, contador `01 / 04`, anterior/próxima, teclado e swipe.
- Sem autoplay e sem rolagem horizontal.
- Transição suave apenas entre fotografias; `prefers-reduced-motion` remove movimento não essencial.
- Duas memórias infantis pequenas, ligeiramente rotacionadas e secundárias à janela; clique abre modal com imagem real.
- Modal fecha por botão, `Escape` ou backdrop e restaura o foco ao asset acionado.
- Navegação `Origem` usa scroll suave no desktop e menu móvel acessível.

## Responsividade

- Desktop: janela dominante ocupando aproximadamente 58–66% da composição, texto editorial em coluna de 30–36%, memórias no corredor de transição sem invadir o texto.
- Mobile: introdução/headline → janela grande → corpo de texto → memórias pequenas.
- Em 1440×1000, 1180×820 e 390×844 não foi observado overflow horizontal.

## Acessibilidade

- `lang="pt-BR"`, heading nomeado e região semântica.
- Botões com `aria-label`, contador `aria-live`, alt text factual e molduras decorativas ocultas da árvore acessível.
- Álbum operável por teclado; controles com alvo mínimo de 44 px.
- Modal com `role="dialog"`, `aria-modal`, foco inicial no fechamento, `Escape` e restauração de foco.

## Validação

- Lint/build: não reexecutados nesta rodada porque o WSL disponível não possui Node Linux; a página foi validada via Vite/HMR no navegador.
- Console: sem erro novo de renderização após o reload.
- Álbum por clique e teclado: PASS.
- Modal por clique e `Escape`, com restauração de foco: PASS.

## Pendências editoriais

- O álbum usa quatro fotografias reais aprovadas: (8), (7), (9) e (12). A estrutura aceita novas entradas quando a seleção editorial for congelada.
- Nenhuma outra área do portfólio foi iniciada nesta etapa.
