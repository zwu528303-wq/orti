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

  return (
    <main className="app-shell flex flex-col gap-10">
      <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <Wordmark />
        <p className="mt-4 text-sm italic tracking-[0.05em] text-text-secondary">
          Olivia Rodrigo Type Indicator
        </p>
        <span className="soft-divider my-6" />
        <h1 className="max-w-[18rem] text-[1.375rem] leading-[1.35] text-text-primary">
          {zh.landing.title}
        </h1>
      </section>

      <section className="surface-card px-7 py-8">
        <p className="text-base leading-8 text-text-secondary">
          一套写给 Olivia Rodrigo 听众的情绪测量装置。17 道题，三分钟左右，最后找到更像你那一首歌。
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Button href="/quiz">{zh.landing.cta}</Button>

          {draft ? (
            <div className="rounded-quote border border-border-soft bg-bg-tint p-5 text-left">
              <p className="text-sm text-text-secondary">
                {buildProgressLabel(draft)}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
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

          {!draft && lastSong && storedResult ? (
            <div className="rounded-quote border border-border-soft bg-bg-tint p-5 text-left">
              <p className="text-sm text-text-secondary">
                {zh.landing.lastResult.replace("{songName}", lastSong.titleEn)}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  className="min-h-10 px-4 py-2"
                  href={buildResultHref(storedResult)}
                  variant="ghost"
                >
                  {zh.landing.viewLast}
                </Button>
                <Button
                  className="min-h-10 px-4 py-2"
                  href="/quiz"
                  variant="ghost"
                >
                  {zh.landing.restart}
                </Button>
              </div>
            </div>
          ) : null}
        </div>

        <p className="mt-8 text-center text-sm text-text-secondary">
          {zh.landing.meta} · 找到属于你的那首歌
        </p>
      </section>

      <Disclaimer />
    </main>
  );
}
