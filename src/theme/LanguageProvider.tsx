"use client";
import { useEffect, useState } from "react";
import { getInitialLanguage, useLanguageStore } from "./language";

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures that the language is updated only on the client
    const savedLang = getInitialLanguage();
    if (savedLang !== language) {
      setLanguage(savedLang);
    }
  }, [setLanguage, language]);

  if (!isClient) {
    return { language: "fr", setLanguage }; // Default language for SSR
  }

  return { language, setLanguage }; // Correct language after client-side hydration
};
