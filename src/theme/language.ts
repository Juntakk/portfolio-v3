import { create } from "zustand";

interface LanguageStore {
  language: string;
  setLanguage: (lang: string) => void;
}

export const getInitialLanguage = (): string => {
  // This will be used only if localStorage is available
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("language");
    if (savedLang === "fr" || savedLang === "en") {
      return savedLang;
    }
  }
  // If no saved language, use navigator.language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("en")) {
    return "en";
  }
  // Default to "fr" for all other languages
  return "fr";
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: "fr", // Default language for SSR, will be updated on the client
  setLanguage: (lang: string) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));
