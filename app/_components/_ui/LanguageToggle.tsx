"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/app/translations";

interface LanguageToggleProps {
  lang: Locale;
}

export function LanguageToggle({ lang }: LanguageToggleProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

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

  const isAr = lang === "ar";
  const next: Locale = isAr ? "en" : "ar";

  const handleToggle = () => {
    const html = document.documentElement;
    html.setAttribute("data-theme-transitioning", "");
    router.push(`/${next}`);
    // Remove the attribute after navigation, but don't block navigation or UI
    setTimeout(() => {
      html.removeAttribute("data-theme-transitioning");
    }, 150);
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileTap={{ scale: 0.88 }}
      aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
      className="relative w-8 h-8 flex items-center justify-center border border-(--fontColor2)/15 hover:border-(--fontColor2)/40 bg-(--fontColor2)/5 hover:bg-(--fontColor2)/10 cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
          className="absolute text-[9px] font-bold tracking-widest text-(--fontColor) select-none"
          style={{ fontFeatureSettings: '"kern" 1' }}
        >
          {isAr ? "EN" : "AR"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
