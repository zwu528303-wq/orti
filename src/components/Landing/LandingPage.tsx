"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/shared/Button";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { Wordmark } from "@/components/shared/Wordmark";
import { songsById } from "@/data/songs";
import zh from "@/data/i18n/zh.json";
import { buildResultHref } from "@/lib/resultUrl";
import {
  clearDraft,
  getDraft,
  getStoredResult,
  type QuizDraft,
  type StoredResult,
} from "@/lib/storage";

function buildProgressLabel(draft: QuizDraft) {
  const questionNumber = Math.min(draft.currentQuestion + 1, 17)
    .toString()
    .padStart(2, "0");

  return zh.landing.draftHint.replace("{num}", questionNumber);
}

export function LandingPage() {
  const router = useRouter();
  const draft: QuizDraft | null = getDraft();
  const storedResult: StoredResult | null = getStoredResult();
  const lastSong = storedResult ? songsById[storedResult.songId] ?? null : null;
  const lastResultHref = storedResult ? buildResultHref(storedResult) : null;

  return (
    <main className="app-shell flex flex-col gap-5">
      <section className="surface-card px-6 py-7 sm:px-8 sm:py-9">
        <div className="space-y-3">
          <p className="eyebrow">Olivia Rodrigo Type Indicator</p>
          <Wordmark />
        </div>

        <span className="soft-divider mt-7" />

        <div className="mt-7 space-y-4">
          <h1 className="max-w-[20rem] text-[1.75rem] leading-[1.22] text-text-primary sm:text-[2rem]">
            {zh.landing.title}
          </h1>
          <p className="text-sm italic leading-6 text-text-secondary">
            {zh.landing.subtitle}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          <span className="info-chip">17 questions</span>
          <span className="info-chip">3 min approx.</span>
        </div>

        <div className="mt-8">
          <Button className="w-full sm:w-auto" href="/quiz">
            {zh.landing.cta}
          </Button>
        </div>
      </section>

      <section className="grid gap-4">
        {draft ? (
          <div className="lavender-panel p-5 text-left sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <p className="eyebrow">Resume Draft</p>
                <p className="text-sm leading-7 text-text-secondary">
                  {buildProgressLabel(draft)}
                </p>
              </div>
              <span className="info-chip">session saved</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                className="min-h-10 px-4 py-2"
                href="/quiz"
                variant="ghost"
              >
                {zh.landing.resumeQuiz}
              </Button>
              <Button
                className="min-h-10 px-4 py-2"
                onClick={() => {
                  clearDraft();
                  router.push("/quiz");
                }}
                type="button"
                variant="ghost"
              >
                {zh.landing.discardDraft}
              </Button>
            </div>
          </div>
        ) : null}

        {!draft && lastSong && storedResult && lastResultHref ? (
          <div className="lavender-panel p-5 text-left sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <p className="eyebrow">Last Result</p>
                <p className="text-sm leading-7 text-text-secondary">
                  {zh.landing.lastResult.replace("{songName}", lastSong.titleEn)}
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
                {zh.landing.viewLast}
              </Button>
              <Button className="min-h-10 px-4 py-2" href="/quiz" variant="ghost">
                {zh.landing.restart}
              </Button>
            </div>
          </div>
        ) : null}
      </section>

      <section className="px-1 text-center">
        <p className="text-sm tracking-[0.08em] text-text-onDark/78">
          {zh.landing.meta} · 找到属于你的那首歌
        </p>
      </section>

      <Disclaimer />
    </main>
  );
}
