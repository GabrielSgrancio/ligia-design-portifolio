const fs = require('fs');
const { Jimp } = require('jimp');

const assets = [
  { name: 'antique-mirror-frame', type: 'mirror' },
  { name: 'botanical-01', type: 'object' },
  { name: 'botanical-02', type: 'object' },
  { name: 'botanical-03', type: 'object' },
  { name: 'tape-01', type: 'object' },
  { name: 'tape-02', type: 'object' }
];

const TOLERANCE = 25; // Color difference tolerance (0-255)

// Helper to check if a pixel color matches the target color within a tolerance
function colorMatch(color1, color2, tolerance) {
  const r1 = (color1 >> 24) & 0xFF;
  const g1 = (color1 >> 16) & 0xFF;
  const b1 = (color1 >> 8) & 0xFF;
  
  const r2 = (color2 >> 24) & 0xFF;
  const g2 = (color2 >> 16) & 0xFF;
  const b2 = (color2 >> 8) & 0xFF;
  
  return Math.abs(r1 - r2) <= tolerance && 
         Math.abs(g1 - g2) <= tolerance && 
         Math.abs(b1 - b2) <= tolerance;
}

// Flood fill algorithm to find all connected background pixels
function findFloodFillPixels(image, startX, startY, tolerance) {
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  const targetColor = image.getPixelColor(startX, startY);
  
  const pixelsToProcess = [[startX, startY]];
  const visited = new Set();
  const bgPixels = [];
  
  const toKey = (x, y) => `${x},${y}`;
  visited.add(toKey(startX, startY));
  
  while (pixelsToProcess.length > 0) {
    const [x, y] = pixelsToProcess.pop();
    bgPixels.push([x, y]);
    
    // Check adjacent pixels
    const neighbors = [
      [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
    ];
    
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const key = toKey(nx, ny);
        if (!visited.has(key)) {
          visited.add(key);
          const currentColor = image.getPixelColor(nx, ny);
          if (colorMatch(targetColor, currentColor, tolerance)) {
            pixelsToProcess.push([nx, ny]);
          }
        }
      }
    }
  }
  
  return bgPixels;
}

// Applies alpha (transparency) to specific pixels
function applyTransparency(image, pixels) {
  for (const [x, y] of pixels) {
    const color = image.getPixelColor(x, y);
    // Keep RGB, set Alpha to 0
    const transparentColor = ((color & 0xFFFFFF00) | 0x00) >>> 0; 
    image.setPixelColor(transparentColor, x, y);
  }
}

// For objects (flowers, tape), we can just remove all white-ish pixels
function removeLightBackground(image, threshold = 230) {
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 0xFF;
      const g = (color >> 16) & 0xFF;
      const b = (color >> 8) & 0xFF;
      
      // If it's light enough, make it transparent
      // We also do a smooth alpha transition for anti-aliasing
      if (r > threshold && g > threshold && b > threshold) {
        // Calculate how bright it is above the threshold
        const avg = (r + g + b) / 3;
        const alpha = Math.max(0, Math.floor(255 * (1 - (avg - threshold) / (255 - threshold))));
        
        if (alpha < 20) {
          image.setPixelColor(0x00000000 >>> 0, x, y); // Fully transparent
        } else {
          // Keep color, apply calculated alpha
          const newColor = ((color & 0xFFFFFF00) | alpha) >>> 0;
          image.setPixelColor(newColor, x, y);
        }
      }
    }
  }
}

async function processAssets() {
  for (const asset of assets) {
    const inputPath = `./public/assets/${asset.name}.jpg`;
    const outputPath = `./public/assets/${asset.name}.png`;
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${asset.name}, file not found.`);
      continue;
    }
    
    try {
      console.log(`Processing ${asset.name}...`);
      const image = await Jimp.read(inputPath);
      
      if (asset.type === 'mirror') {
        // 1. Remove outside background (flood fill from 0,0)
        const outerBg = findFloodFillPixels(image, 0, 0, 30);
        applyTransparency(image, outerBg);
        
        // 2. Remove inside background (flood fill from center)
        const centerX = Math.floor(image.bitmap.width / 2);
        const centerY = Math.floor(image.bitmap.height / 2);
        const innerBg = findFloodFillPixels(image, centerX, centerY, 30);
        applyTransparency(image, innerBg);
      } else {
        // Remove light background for flowers and tape
        removeLightBackground(image, 230);
      }
      
      await image.writeAsync(outputPath);
      console.log(`Saved ${outputPath}`);
    } catch (err) {
      console.error(`Error processing ${asset.name}:`, err);
    }
  }
  console.log('All done!');
}

processAssets();
