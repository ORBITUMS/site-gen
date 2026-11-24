import type { Template, UserConfig } from "../types";

// Вспомогательная функция для генерации ссылок навигации
const nav = (config: UserConfig) =>
  config.pages
    .map(
      (p) =>
        `<a href="${p.slug === "index" ? "index.html" : p.slug + ".html"}">${p.title}</a>`,
    )
    .join("\n        ");

export const headers: Template[] = [
  {
    id: "minimal",
    name: "Минималистичная",
    previewHtml: (config) => `
      <header style="display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;background:#fff;border-bottom:1px solid #eee;font-family:sans-serif">
        <span style="font-weight:700;color:${config.primaryColor}">${config.siteName}</span>
        <nav>${config.pages.map((p) => `<a style="margin-left:1rem;color:#333;text-decoration:none">${p.title}</a>`).join("")}</nav>
      </header>`,
    generate: (config) => ({
      "partials/header.html": `<header class="site-header">
  <a href="index.html" class="logo">${config.siteName}</a>
  <nav>
        ${nav(config)}
  </nav>
</header>`,
      "css/header.css": `
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.site-header .logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: ${config.primaryColor};
  text-decoration: none;
}
.site-header nav a {
  margin-left: 1.5rem;
  color: #333;
  text-decoration: none;
}
.site-header nav a:hover { color: ${config.primaryColor}; }
`,
    }),
  },
  {
    id: "centered",
    name: "Центрированная",
    previewHtml: (config) => `
      <header style="text-align:center;padding:1.5rem;background:#fff;border-bottom:1px solid #eee;font-family:sans-serif">
        <div style="font-weight:700;color:${config.primaryColor};font-size:1.5rem">${config.siteName}</div>
        <nav style="margin-top:.5rem">${config.pages.map((p) => `<a style="margin:0 .75rem;color:#333;text-decoration:none">${p.title}</a>`).join("")}</nav>
      </header>`,
    generate: (config) => ({
      "partials/header.html": `<header class="site-header centered">
  <a href="index.html" class="logo">${config.siteName}</a>
  <nav>
        ${nav(config)}
  </nav>
</header>`,
      "css/header.css": `
.site-header.centered { text-align: center; padding: 1.5rem; border-bottom: 1px solid #eee; background: #fff; }
.site-header.centered .logo { display: block; font-weight: 700; font-size: 1.5rem; color: ${config.primaryColor}; text-decoration: none; }
.site-header.centered nav { margin-top: .5rem; }
.site-header.centered nav a { margin: 0 .75rem; color: #333; text-decoration: none; }
`,
    }),
  },
];
