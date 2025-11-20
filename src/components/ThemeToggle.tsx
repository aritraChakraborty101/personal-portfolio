// src/components/ThemeToggle.tsx
import { useTheme } from "../hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
    >
      {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};