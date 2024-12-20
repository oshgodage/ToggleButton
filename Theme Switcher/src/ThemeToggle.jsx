import  { useContext } from "react";
import { ThemeCreate } from "./ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeCreate);

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={toggleTheme}
        className={`relative w-24 h-12 flex items-center rounded-full transition-colors duration-300 ${
          theme === "light" ? "bg-yellow-300" : "bg-gray-700"
        }`}
      >
        {/* Sun Icon (Light Mode) */}
        <span
          className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
            theme === "light"
              ? "transform translate-x-1 text-yellow-500"
              : "hidden"
          }`}
        >
          <SunIcon className="w-8 h-8" />
        </span>

        {/* Moon Icon (Dark Mode) */}
        <span
          className={`absolute w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
            theme === "light" ? "hidden" : "transform translate-x-9 text-white"
          }`}
        >
          <MoonIcon className="w-8 h-8" />
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
