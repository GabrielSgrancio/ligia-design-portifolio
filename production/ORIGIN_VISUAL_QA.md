# Origin — Visual QA

Data: 2026-09-13  
Página validada: `http://localhost:3000`  
Referência: `production/ORIGIN_REFERENCE_BASE.png` + manifesto aprovado de assets.

## Cobertura

- Desktop amplo: 1440 × 1000.
- Desktop compacto: 1180 × 820.
- Mobile: 390 × 844.
- Lint e build executados no WSL.
- Console do navegador sem warnings ou errors durante os fluxos testados.

## COMPARE → CORRECT → COMPARE

### Problemas corrigidos

- A composição anterior tratava a cena como uma janela ilustrada com objetos extras. A versão final remove livros, bowl, planta, vaso, citação, molduras ornamentais e demais props não aprovados.
- A janela foi ampliada e reconstruída com abertura transparente, fotografia real atrás, cortina separada e detalhe de cadeira discreto no canto inferior esquerdo.
- A memória infantil única foi substituída por duas fotografias reais pequenas, taped e levemente descentralizadas no corredor da janela, sem invadir o corpo do texto.
- O álbum passou a usar quatro fotografias reais de Mirantão, com contador `01 / 04` e sem autoplay.
- No mobile, a ordem foi corrigida para introdução/headline → janela → corpo → memórias.

### Segunda comparação

- 1440×1000: janela dominante, parede e luz coerentes com a Hero V2, texto legível e memórias secundárias próximas à transição.
- 1180×820: a janela mantém presença editorial; as duas memórias permanecem pequenas e fora do corpo do texto.
- 390×844: headline visível antes da janela, fotografia dominante, corpo legível e controles preservados.
- Overflow horizontal: 0 px nas três larguras.

## Interações verificadas

- Próxima/anterior alteram a fotografia e o contador `01 / 02`.
- Setas esquerda/direita operam o álbum quando o controle está focado.
- Swipe horizontal está implementado; botões e teclado permanecem como alternativas.
- Não há autoplay.
- Cada memória abre como `dialog` modal.
- Fechamento por botão e `Escape` remove o diálogo e devolve o foco ao asset acionado.
- Menu mobile abre, expõe `Origem` nesta etapa e fecha ao navegar.

## Evidência técnica

- DOM confirma os dois assets infantis reais e os quatro assets de Mirantão.
- Controles mantêm 44×44 px no mobile.
- Imagens decorativas da janela, cortina e cadeira não competem com a árvore acessível.
- `prefers-reduced-motion` foi considerado no componente.

## Resultado

PASS — Origin foi recomposta de acordo com a direção corrigida, com assets reais aprovados, hierarquia responsiva e estados interativos funcionais. A implementação para nesta seção, conforme o escopo.
