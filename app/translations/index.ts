import en from "./en";
import ar from "./ar";

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

const translations = { en, ar } as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

export type Translations = typeof en | typeof ar;
