import { useThemeStore } from "@/theme/theme";
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      className="fixed text-2xl lg:right-5 lg:top-5 right-2 top-2 text-accent hover:cursor-pointer hover:[transform:rotate(360deg)] transition-transform duration-500"
      onClick={toggleTheme}
    >
      {theme === "light" ? <IoMoon /> : <IoSunny />}
    </div>
  );
};

export default ThemeToggle;
