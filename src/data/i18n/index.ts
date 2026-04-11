import en from "@/data/i18n/en.json";
import zh from "@/data/i18n/zh.json";
import type { AppLocale } from "@/lib/locale";

const dictionaries = {
  zh,
  en,
} as const;

export type Dictionary = (typeof dictionaries)["zh"];

export function getDictionary(locale: AppLocale): Dictionary {
  return dictionaries[locale];
}
