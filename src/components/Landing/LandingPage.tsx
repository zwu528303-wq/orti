"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/shared/Button";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Wordmark } from "@/components/shared/Wordmark";
import { getDictionary } from "@/data/i18n";
import { songsById } from "@/data/songs";
import type { AppLocale } from "@/lib/locale";
import { saveLocalePreference, withLocalePrefix } from "@/lib/locale";
import { buildResultHref } from "@/lib/resultUrl";
import {
  clearDraft,
  getDraft,
  getStoredResult,
  saveQuizLanguage,
  type QuizDraft,
  type StoredResult,
} from "@/lib/storage";

function buildProgressLabel(draft: QuizDraft, locale: AppLocale) {
  const copy = getDictionary(locale);
  const questionNumber = Math.min(draft.currentQuestion + 1, 17)
    .toString()
    .padStart(2, "0");

  return copy.landing.draftHint.replace("{num}", questionNumber);
}

type LandingPageProps = {
  locale?: AppLocale;
};

export function LandingPage({ locale = "zh" }: LandingPageProps) {
  const router = useRouter();
  const copy = getDictionary(locale);
  const [draft, setDraft] = useState<QuizDraft | null>(null);
  const [storedResult, setStoredResult] = useState<StoredResult | null>(null);
  const lastSong = storedResult ? songsById[storedResult.songId] ?? null : null;
  const lastResultHref = storedResult ? buildResultHref(storedResult, locale) : null;
  const quizHref = withLocalePrefix("/quiz", locale);
  const alternateLocale = locale === "zh" ? "en" : "zh";
  const alternateHomeHref = withLocalePrefix("/", alternateLocale);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDraft(getDraft());
      setStoredResult(getStoredResult());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleLocaleSwitch = () => {
    saveLocalePreference(alternateLocale);
    saveQuizLanguage(alternateLocale);
    router.push(alternateHomeHref);
  };

  return (
    <main className="app-shell flex flex-col gap-5">
      <section className="surface-card px-6 py-7 sm:px-8 sm:py-9">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <p className="eyebrow">Olivia Rodrigo Type Indicator</p>
            <Wordmark />
          </div>

          <button
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-border-soft bg-bg-tint px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] text-text-secondary transition-colors duration-200 hover:border-accent-primary hover:text-accent-primary"
            onClick={handleLocaleSwitch}
            type="button"
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
        </div>

        <span className="soft-divider mt-7" />

        <div className="mt-7 space-y-4">
          <h1 className="max-w-[20rem] text-[1.75rem] leading-[1.22] text-text-primary sm:text-[2rem]">
            {copy.landing.title}
          </h1>
          <p className="text-sm italic leading-6 text-text-secondary">
            {copy.landing.subtitle}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          <span className="info-chip">{copy.landing.questionsChip}</span>
          <span className="info-chip">{copy.landing.durationChip}</span>
        </div>

        <div className="mt-8">
          <Button className="w-full sm:w-auto" href={quizHref}>
            {copy.landing.cta}
          </Button>
        </div>
      </section>

      <section className="grid gap-4">
        {draft ? (
          <div className="lavender-panel p-5 text-left sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <p className="eyebrow">{copy.landing.resumeLabel}</p>
                <p className="text-sm leading-7 text-text-secondary">
                  {buildProgressLabel(draft, locale)}
                </p>
              </div>
              <span className="info-chip">{copy.landing.sessionSaved}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                className="min-h-10 px-4 py-2"
                href={quizHref}
                variant="ghost"
              >
                {copy.landing.resumeQuiz}
              </Button>
              <Button
                className="min-h-10 px-4 py-2"
                onClick={() => {
                  clearDraft();
                  router.push(quizHref);
                }}
                type="button"
                variant="ghost"
              >
                {copy.landing.discardDraft}
              </Button>
            </div>
          </div>
        ) : null}

        {!draft && lastSong && storedResult && lastResultHref ? (
          <div className="lavender-panel p-5 text-left sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <p className="eyebrow">{copy.landing.lastResultLabel}</p>
                <p className="text-sm leading-7 text-text-secondary">
                  {copy.landing.lastResult.replace("{songName}", lastSong.titleEn)}
                </p>
              </div>
              <span className="info-chip">{lastSong.album}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                className="min-h-10 px-4 py-2"
                href={lastResultHref}
                variant="ghost"
              >
                {copy.landing.viewLast}
              </Button>
              <Button className="min-h-10 px-4 py-2" href={quizHref} variant="ghost">
                {copy.landing.restart}
              </Button>
            </div>
          </div>
        ) : null}
      </section>

      <section className="px-1 text-center">
        <p className="text-sm tracking-[0.08em] text-text-onDark/78">
          {copy.landing.meta} · {copy.landing.footerTagline}
        </p>
      </section>

      <Disclaimer locale={locale} />
    </main>
  );
}
