import fs from "fs";
import path from "path";
import { noticias } from "../src/data/noticias";

const DOMAIN = "https://sertaomaker.com.br";

const outputDir = path.resolve("public/share");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sanitize = (text: string) => {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

const buildPublicUrl = (src: string) => {
  if (!src) return "";

  // se já for link absoluto
  if (src.startsWith("http")) return src;

  // se for caminho local tipo "/news/arquivo.png"
  // garante que sempre vai ficar https://dominio + /news/arquivo.png
  if (src.startsWith("/")) return `${DOMAIN}${src}`;

  // se vier sem barra (ex: "news/arquivo.png")
  return `${DOMAIN}/${src}`;
};

Object.values(noticias).forEach((noticia: any) => {
  if (!noticia.slug) return;

  const slug = noticia.slug;

  const title = sanitize(noticia.title);
  const description = sanitize(
    noticia.description ||
      "Confira essa notícia no site da Incubadora Sertão Maker."
  );

  const heroUrl = buildPublicUrl(noticia.hero);
  const url = `${DOMAIN}/noticia/${slug}`;

  const html = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${title}</title>

  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${heroUrl}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${heroUrl}" />

  <meta http-equiv="refresh" content="0; url=/noticia/${slug}" />
</head>
<body></body>
</html>`;

  fs.writeFileSync(path.join(outputDir, `${slug}.html`), html, "utf8");
});

console.log("✅ Páginas de compartilhamento geradas em /public/share");