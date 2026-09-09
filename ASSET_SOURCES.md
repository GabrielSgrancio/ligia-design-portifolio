# Asset Sources

## Botanical Assets

| Asset | Description | Source | License |
|-------|-------------|--------|---------|
| `botanical-03.png` | Delicate dried gypsophila (baby's breath) stem specimen | AI-generated via Antigravity image tool | Project-owned |
| `botanical-02.png` | Pressed pink geranium flower | AI-generated via Antigravity image tool | Project-owned |
| `botanical-01.png` | Pressed purple pansy | AI-generated via Antigravity image tool | Project-owned |
| `tape-01.png` | Translucent masking tape strip (warm cream) | AI-generated via Antigravity image tool | Project-owned |
| `tape-02.png` | Translucent masking tape strip (alternate) | AI-generated via Antigravity image tool | Project-owned |

All botanical and tape assets were generated as high-resolution JPEGs, then processed through `process_bg.py` which:
1. Removes the background using `rembg`
2. Trims transparent dead space using `PIL.Image.getbbox()`
3. Adds ~5% transparent safety padding
4. Saves as optimized PNG with alpha channel
