"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.css";
import { Sun, Moon } from "lucide-react"; // Додай lucide-react (або іншу бібліотеку іконок)

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      className={styles.button}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Перемикач теми"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
