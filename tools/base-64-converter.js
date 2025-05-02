/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

// 📁 Pasta com suas imagens
const folderPath = path.join(__dirname, "../src/mocks/images");

// Lista extensões suportadas
const supportedExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];

// Armazenará os resultados
const imagesBase64 = {};

fs.readdirSync(folderPath).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (!supportedExtensions.includes(ext)) return;

  const filePath = path.join(folderPath, file);
  const mimeType = `image/${
    ext.replace(".", "") === "jpg" ? "jpeg" : ext.replace(".", "")
  }`;

  const base64 = fs.readFileSync(filePath).toString("base64");
  const dataUri = `data:${mimeType};base64,${base64}`;

  imagesBase64[file] = dataUri;
});

// Salva em um arquivo JSON
const outputPath = path.join(__dirname, "base64-images.json");
fs.writeFileSync(outputPath, JSON.stringify(imagesBase64, null, 2));

console.log(
  `✅ ${Object.keys(imagesBase64).length} imagens convertidas para base64.`
);
console.log(`📄 Resultado salvo em: ${outputPath}`);
