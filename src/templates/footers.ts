import type { Template } from "../types";

export const footers: Template[] = [
  {
    id: "simple",
    name: "Простой",
    previewHtml: (config) => `
      <footer style="padding:1.5rem;text-align:center;background:#fafafa;color:#666;font-family:sans-serif;font-size:.9rem">
        © ${new Date().getFullYear()} ${config.siteName}
      </footer>`,
    generate: (config) => ({
      "partials/footer.html": `<footer class="site-footer">
  <p>© ${new Date().getFullYear()} ${config.siteName}. Все права защищены.</p>
</footer>`,
      "css/footer.css": `
.site-footer { padding: 1.5rem; text-align: center; background: #fafafa; color: #666; font-size: .9rem; }
`,
    }),
  },
  {
    id: "dark",
    name: "Тёмный",
    previewHtml: (config) => `
      <footer style="padding:2rem;background:#111;color:#eee;font-family:sans-serif;text-align:center">
        <strong>${config.siteName}</strong>
        <div style="margin-top:.5rem;font-size:.85rem;color:#aaa">© ${new Date().getFullYear()} Все права защищены</div>
      </footer>`,
    generate: (config) => ({
      "partials/footer.html": `<footer class="site-footer dark">
  <div class="footer-inner">
    <strong>${config.siteName}</strong>
    <p>© ${new Date().getFullYear()} Все права защищены</p>
  </div>
</footer>`,
      "css/footer.css": `
.site-footer.dark { padding: 2rem; background: #111; color: #eee; text-align: center; }
.site-footer.dark .footer-inner { max-width: 1100px; margin: 0 auto; }
.site-footer.dark p { color: #aaa; font-size: .85rem; margin-top: .5rem; }
`,
    }),
  },
];
