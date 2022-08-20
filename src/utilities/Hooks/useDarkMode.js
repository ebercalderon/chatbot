import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;

    const theme = isDarkMode ? "dark" : "light";
    html.classList.add(theme);

    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};
