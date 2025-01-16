import { useState } from "react";
import Counter from "./components/Counter";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">
          React Counter with Theme Switcher
        </h1>
        <Counter />
        <div className="flex justify-center mt-8">
          <ThemeSwitcher
            isDarkMode={isDarkMode}
            toggleTheme={() => setIsDarkMode(!isDarkMode)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
