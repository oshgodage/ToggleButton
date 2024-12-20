import  { createContext, useState, useEffect } from "react";

export const ThemeCreate = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeCreate.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCreate.Provider>
  );
};

