import type { Route } from "next";

import type { AppLocale } from "@/lib/locale";
import { withLocalePrefix } from "@/lib/locale";
import type { StoredResult } from "@/lib/storage";

export function buildResultHref(
  result: StoredResult,
  locale: AppLocale = "zh",
): Route {
  const params = new URLSearchParams({
    stage: result.spectrumStage,
    d1: String(result.scores.d1),
    d2: String(result.scores.d2),
    d3: String(result.scores.d3),
    d4: String(result.scores.d4),
    d5: String(result.scores.d5),
    d6: String(result.scores.d6),
    d7: String(result.scores.d7),
  });

  return withLocalePrefix(`/result/${result.songId}?${params.toString()}`, locale);
}
