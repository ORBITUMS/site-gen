import type { Template } from "../types";

export const mains: Template[] = [
  {
    id: "empty",
    name: "Пустой (для своего кода)",
    previewHtml: () =>
      `<main style="padding:4rem 2rem;text-align:center;color:#999;font-family:sans-serif;height:200px;">Здесь будет ваш код</main>`,
    generate: () => ({
      "partials/main.html": `<main class="site-main">
  <!-- Ваш контент -->
</main>`,
      "css/main.css": `.site-main { min-height: 50vh; padding: 2rem; }`,
    }),
  },
  {
    id: "hero",
    name: "Главный экран (Hero + Кнопка)",
    previewHtml: (config) => `
      <main style="padding:5rem 2rem;text-align:center;font-family:sans-serif">
        <h1 style="font-size:2.5rem;margin:0 0 1rem">Добро пожаловать</h1>
        <p style="color:#666;margin:0 0 2rem">Короткое описание вашего проекта или услуги.</p>
        <a style="display:inline-block;padding:.75rem 2rem;background:${config.primaryColor};color:#fff;border-radius:6px;text-decoration:none">Начать</a>
      </main>`,
    generate: (config) => ({
      "partials/main.html": `<main class="site-main hero">
  <h1>Добро пожаловать</h1>
  <p>Короткое описание вашего проекта или услуги.</p>
  <a href="#" class="btn-primary">Начать</a>
</main>`,
      "css/main.css": `
.site-main.hero { padding: 5rem 2rem; text-align: center; }
.site-main.hero h1 { font-size: 2.5rem; margin: 0 0 1rem; color: #111; }
.site-main.hero p { color: #666; margin: 0 0 2rem; font-size: 1.1rem; }
.btn-primary { display: inline-block; padding: .75rem 2rem; background: ${config.primaryColor}; color: #fff; border-radius: 6px; text-decoration: none; font-weight: 500; }
.btn-primary:hover { opacity: 0.9; }
`,
    }),
  },
];
