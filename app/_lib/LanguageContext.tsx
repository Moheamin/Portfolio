"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, Lang, Translations } from "@/app/_data/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "ar") {
      applyLang(stored);
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    applyLang(l);
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang] as Translations,
        isAr: lang === "ar",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

function applyLang(l: Lang) {
  const html = document.documentElement;
  html.setAttribute("lang", l);
  html.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
