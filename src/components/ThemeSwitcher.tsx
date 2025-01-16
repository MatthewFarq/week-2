interface ThemeSwitcherProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

function ThemeSwitcher({ isDarkMode, toggleTheme }: ThemeSwitcherProps) {
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors ${
        isDarkMode
          ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300 focus:ring-yellow-500"
          : "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500"
      }`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeSwitcher;
