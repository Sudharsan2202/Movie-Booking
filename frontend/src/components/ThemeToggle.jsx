// src/components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300
        ${isDark
          ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
          : "bg-white border-gray-200 text-gray-700 hover:bg-gray-100"}
      `}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="text-sm font-medium hidden sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}