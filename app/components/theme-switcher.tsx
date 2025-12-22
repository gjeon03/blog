"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("system");

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else {
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const applyTheme = (selectedTheme: Theme) => {
    const isDark =
      selectedTheme === "dark" ||
      (selectedTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
  };

  const handleToggle = () => {
    let nextTheme: Theme;

    if (theme === "light") {
      nextTheme = "dark";
    } else if (theme === "dark") {
      nextTheme = "system";
    } else {
      nextTheme = "light";
    }

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const getLabel = () => {
    if (theme === "light") return "[light]";
    if (theme === "dark") return "[dark]";
    return "[system]";
  };

  return (
    <button
      aria-label="Toggle Theme Mode"
      type="button"
      onClick={handleToggle}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        textDecoration: 'underline'
      }}
    >
      {getLabel()}
    </button>
  );
};
