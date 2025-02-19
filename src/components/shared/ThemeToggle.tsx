import { useLanguage } from "@/theme/LanguageProvider";
import { useThemeStore } from "@/theme/theme";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed flex justify-center gap-4 items-center text-2xl right-4 top-4 text-accent p-2 bg-transparent backdrop-blur-sm rounded-lg shadow-sm border border-white/10 z-10">
      {/* Language Switcher */}
      <div className="flex gap-1">
        <button
          className="bg-transparent px-2 py-1 rounded-md hover:bg-accent/10 transition-colors duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/50"
          onClick={() =>
            language === "en" ? setLanguage("fr") : setLanguage("en")
          }
        >
          {language === "en" ? "Français" : "English"}
        </button>
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-accent/20" />

      {/* Theme Toggle */}
      <div
        className="p-2 rounded-md hover:bg-accent/10 hover:scale-110 transition-all duration-300 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <IoMoon className="text-accent hover:rotate-[360deg] transition-transform duration-1000" />
        ) : (
          <IoSunny className="text-accent hover:rotate-180 transition-transform duration-1000" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
