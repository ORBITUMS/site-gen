import { create } from "zustand";
import type { UserConfig, Page } from "./types";

// Генератор случайных ID для страниц
const uid = () => Math.random().toString(36).slice(2, 9);

export const useConfig = create<{
  config: UserConfig;
  set: (patch: Partial<UserConfig>) => void;
  updatePage: (id: string, patch: Partial<Page>) => void;
  addPage: () => void;
  removePage: (id: string) => void;
}>((set, get) => ({
  // Начальные настройки
  config: {
    siteName: "Мой сайт",
    headerId: "minimal",
    footerId: "simple",
    primaryColor: "#2563eb", // синий цвет по умолчанию
    pages: [
      { id: uid(), slug: "index", title: "Главная", mainId: "hero" },
      { id: uid(), slug: "about", title: "О нас", mainId: "empty" },
    ],
  },

  // Функция обновления общих настроек
  set: (patch) => set({ config: { ...get().config, ...patch } }),

  // Функция обновления конкретной страницы
  updatePage: (id, patch) =>
    set({
      config: {
        ...get().config,
        pages: get().config.pages.map((p) =>
          p.id === id ? { ...p, ...patch } : p,
        ),
      },
    }),

  // Функция добавления новой страницы
  addPage: () =>
    set({
      config: {
        ...get().config,
        pages: [
          ...get().config.pages,
          {
            id: uid(),
            slug: `page-${get().config.pages.length + 1}`,
            title: "Новая страница",
            mainId: "empty",
          },
        ],
      },
    }),

  // Функция удаления страницы
  removePage: (id) =>
    set({
      config: {
        ...get().config,
        pages: get().config.pages.filter((p) => p.id !== id),
      },
    }),
}));
