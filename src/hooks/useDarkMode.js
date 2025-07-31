import { useEffect, useState } from "react";

export default function useDarkMode() {
  const getInitialTheme = () => {
    // Use system preference if no localStorage theme is set
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) return storedTheme;

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) return "dark";
    }
    return "light"; // Default
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return [theme, toggleTheme];
}
