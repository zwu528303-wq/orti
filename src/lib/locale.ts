import type { Route } from "next";

export type AppLocale = "zh" | "en";
export const LOCALE_PREFERENCE_COOKIE = "orti_locale";

export function withLocalePrefix(path: string, locale: AppLocale): Route {
  if (locale === "en") {
    return (path === "/" ? "/en" : `/en${path}`) as Route;
  }

  return path as Route;
}

export function detectPreferredLocale(
  acceptLanguage: string | null | undefined,
): AppLocale {
  if (!acceptLanguage) {
    return "zh";
  }

  const languages = acceptLanguage
    .toLowerCase()
    .split(",")
    .map((entry) => entry.trim());

  return languages.some((language) => language.startsWith("en")) ? "en" : "zh";
}

export function isAppLocale(value: string | null | undefined): value is AppLocale {
  return value === "zh" || value === "en";
}

export function saveLocalePreference(locale: AppLocale) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${LOCALE_PREFERENCE_COOKIE}=${locale}; Max-Age=31536000; Path=/; SameSite=Lax`;
}
