"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — render nothing until client mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-8 h-8 border border-(--fontColor2)/15 bg-(--fontColor2)/5"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    const html = document.documentElement;
    html.setAttribute("data-theme-transitioning", "");
    setTheme(isDark ? "light" : "dark");
    setTimeout(() => html.removeAttribute("data-theme-transitioning"), 300);
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileTap={{ scale: 0.88 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-8 h-8 flex items-center justify-center border border-(--fontColor2)/15 hover:border-(--fontColor2)/40 bg-(--fontColor2)/5 hover:bg-(--fontColor2)/10 cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="absolute flex items-center justify-center"
          >
            <Moon className="w-3.75 h-3.75 text-(--fontColor)" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 45, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.6 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="absolute flex items-center justify-center"
          >
            <Sun className="w-3.75 h-3.75 text-(--fontColor)" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
