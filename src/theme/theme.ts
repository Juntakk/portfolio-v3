import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the type for the theme state
type ThemeState = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create the store with localStorage persistence
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      // Initial state
      theme: "dark",

      // Action to toggle the theme
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage", // Name for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);
