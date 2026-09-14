# Origin — Asset Plan

Status: implementado conforme a correção Origin / Mirantão.  
Referência de composição: `production/ORIGIN_REFERENCE_BASE.png`.

## Sistema visual

Origin é uma janela arquitetônica dentro do mesmo mundo material da Hero V2. A parede usa exatamente o asset `public/assets/hero-v2/01_wall_texture_sunlit.png`; a janela, a cortina e a cadeira são camadas independentes; a fotografia entra atrás da abertura transparente. Nada da referência achatada é usado como background único no runtime.

## Inventário congelado

| Asset | Função | Uso |
|---|---|---|
| `hero-v2/01_wall_texture_sunlit.png` | parede/luz | fundo da seção |
| `origin/01_origin-window-shell.png` | arquitetura da janela | camada transparente sobre a foto |
| `origin/02_origin-curtain-left.png` | cortina | camada independente à esquerda |
| `origin/03_origin-child-16-exact.png` | memória infantil real | pequena, taped, modal |
| `origin/04_origin-child-princess-exact.png` | segunda memória infantil real | pequena, taped, modal |
| `origin/05_origin-chair-detail.png` | detalhe de cadeira | canto inferior esquerdo, discreto |
| `origin/06_mirantao-primary.jpeg` | Mirantão primary | item 01 do álbum |
| `origin/07_mirantao-secondary.jpeg` | Mirantão secondary | item 02 do álbum |
| `origin/08_mirantao-sunset.jpeg` | Mirantão ao entardecer | item 03 do álbum |
| `origin/09_mirantao-mist.jpeg` | Mirantão sob névoa | item 04 do álbum |

## Regras de composição

- Janela dominante, aproximadamente 58–66% da largura visual no desktop.
- Texto editorial em coluna de aproximadamente 30–36%, com headline legível e sem escala publicitária.
- Memórias pequenas no corredor de transição, com rotações sutis e sem sobreposição do corpo de texto.
- Sem livros, bowl, planta, vaso, citação, scrapbook, grid, cards ou molduras ornamentais.
- A fotografia documental fica atrás da abertura; não vira card nem é recriada.
- No mobile, a ordem é introdução/headline → janela → corpo → memórias.

## Álbum

O componente recebe os itens por dados e mostra o total real disponível. O estado congelado atual tem quatro imagens, `01 / 04`, com navegação por botões, teclado e swipe, sem autoplay. Novas fotografias só entram após seleção editorial explícita.

## Rastreabilidade

As fontes brutas utilizadas para as fotografias e memórias ficam em `public/assets/origin/source/`. O manifesto completo e os assets aprovados permanecem no Drive em `LIGIA / origin-assets`.
