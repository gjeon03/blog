"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { HiSun, HiMoon, HiComputerDesktop } from "react-icons/hi2";

type Theme = "light" | "dark" | "system";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>();

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (!storedTheme) {
      applyTheme("system");
    } else {
      applyTheme(storedTheme);
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

  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  const handleToggle = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    applyTheme(nextTheme);
  };

  return (
    theme && (
      <button
        aria-label="Toggle Theme"
        type="button"
        onClick={handleToggle}
        className="p-2 transition-colors duration-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        <ThemeIcon theme={theme} />
      </button>
    )
  );
};

type Props = {
  theme: Theme;
};

const ThemeIcon = ({ theme }: Props) => {
  switch (theme) {
    case "light":
      return (
        <HiSun className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
      );
    case "dark":
      return (
        <HiMoon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
      );
    case "system":
      return (
        <HiComputerDesktop className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
      );
  }
};
