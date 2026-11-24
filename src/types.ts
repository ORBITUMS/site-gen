export type Page = {
  id: string;
  slug: string; // название файла (например, "index" или "about")
  title: string; // заголовок страницы
  mainId: string; // какая центральная часть выбрана
};

export type UserConfig = {
  siteName: string;
  headerId: string;
  footerId: string;
  primaryColor: string;
  pages: Page[];
};

export type GeneratedFiles = Record<string, string>; // здесь будем хранить файлы для ZIP-архива

export type Template = {
  id: string;
  name: string;
  previewHtml: (config: UserConfig) => string; // функция для отрисовки превью
  generate: (config: UserConfig, page: Page) => GeneratedFiles; // функция для генерации кода
};
