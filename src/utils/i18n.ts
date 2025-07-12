// src/utils/i18n.ts

export const translations = {
  tr: {
    welcome: "Hoşgeldiniz",
    contact: "İletişim",
    // Diğer çeviriler...
  },
  ku: {
    welcome: "Bi xêr hatin",
    contact: "Têkilî",
    // Diğer çeviriler...
  },
};

export function translate(lang: "tr" | "ku", key: string): string {
  return translations[lang][key] || key;
}
