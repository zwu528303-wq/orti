"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { SongCard } from "@/components/Result/SongCard";
import { Button } from "@/components/shared/Button";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { contentPolicy } from "@/config/content";
import { getDictionary } from "@/data/i18n";
import {
  songsById,
  type Song,
  type SpectrumStage,
} from "@/data/songs";
import { trackEvent } from "@/lib/analytics";
import type { AppLocale } from "@/lib/locale";
import { withLocalePrefix } from "@/lib/locale";
import { clearDraft, getStoredResult } from "@/lib/storage";
import { useQuizContext } from "@/contexts/QuizContext";

const spectrumStages: SpectrumStage[] = [
  "deep_sour",
  "between_sour_guts",
  "heart_of_guts",
  "between_guts_ysps",
  "ysps_edge",
];

function isSpectrumStage(value: string | null): value is SpectrumStage {
  return value !== null && spectrumStages.includes(value as SpectrumStage);
}

function resolveStage(
  stageParam: string | null,
  song: Song,
): SpectrumStage {
  if (isSpectrumStage(stageParam)) {
    return stageParam;
  }

  const storedResult = getStoredResult();

  if (storedResult?.songId === song.id) {
    return storedResult.spectrumStage;
  }

  return song.spectrumHint ?? "heart_of_guts";
}

type ResultExperienceProps = {
  locale?: AppLocale;
};

export function ResultExperience({ locale = "zh" }: ResultExperienceProps) {
  const params = useParams<{ songId: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { resetQuiz } = useQuizContext();
  const copy = getDictionary(locale);
  const showNeteaseButton = locale === "zh";
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [manualCopyVisible, setManualCopyVisible] = useState(false);
  const [neteaseStatus, setNeteaseStatus] = useState("");

  const song = songsById[params.songId];
  const resultUrl =
    typeof window === "undefined" ? "" : window.location.href;

  const stage = useMemo(() => {
    if (!song) {
      return "heart_of_guts" as SpectrumStage;
    }

    return resolveStage(searchParams.get("stage"), song);
  }, [searchParams, song]);

  useEffect(() => {
    resetQuiz();
  }, [resetQuiz]);

  if (!song) {
    return (
      <main className="app-shell flex items-center justify-center">
        <div className="surface-card w-full p-8 text-center">
          <p className="kicker">{copy.result.notFoundTitle}</p>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            {copy.result.notFoundBody}
          </p>
        </div>
      </main>
    );
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl);
      trackEvent("result_link_copied", { songId: song.id });
      setCopyStatus("success");
      setManualCopyVisible(false);
    } catch {
      setCopyStatus("error");
      setManualCopyVisible(true);
    }
  };

  const handleRetake = () => {
    clearDraft();
    resetQuiz();
    trackEvent("retake_clicked", { fromSongId: song.id });
    router.push(withLocalePrefix("/quiz", locale));
  };

  const handleOpenNetease = async () => {
    if (song.neteaseUrl === "#") {
      setNeteaseStatus(copy.result.neteasePending);
      return;
    }

    trackEvent("netease_clicked", { songId: song.id });
    const popup = window.open(song.neteaseUrl, "_blank", "noopener,noreferrer");

    if (popup) {
      setNeteaseStatus("");
      return;
    }

    try {
      await navigator.clipboard.writeText(song.neteaseUrl);
      setNeteaseStatus(copy.result.neteaseCopied);
    } catch {
      setNeteaseStatus(copy.result.neteaseManual);
    }
  };

  return (
    <main className="app-shell space-y-4">
      <SongCard locale={locale} song={song} stage={stage} />

      <section className="lavender-panel space-y-3.5 p-4 sm:p-5">
        <div className="flex flex-wrap gap-2.5">
          <Button onClick={handleCopyLink} type="button" variant="ghost">
            {copy.result.copyLink}
          </Button>
          {showNeteaseButton ? (
            <Button onClick={handleOpenNetease} type="button">
              {copy.result.neteaseButton}
            </Button>
          ) : null}
          <Button onClick={handleRetake} type="button" variant="ghost">
            {copy.result.retake}
          </Button>
        </div>

        {copyStatus === "success" ? (
          <p className="text-sm text-text-secondary">
            {copy.result.copyLinkSuccess}
          </p>
        ) : null}

        {copyStatus === "error" ? (
          <p className="text-sm text-text-secondary">
            {copy.result.copyLinkError}
          </p>
        ) : null}

        {manualCopyVisible ? (
          <input
            className="w-full rounded-soft border border-border-soft bg-bg-card px-4 py-3 text-sm text-text-secondary"
            readOnly
            value={resultUrl}
          />
        ) : null}

        {showNeteaseButton && neteaseStatus ? (
          <p className="text-sm text-text-secondary">{neteaseStatus}</p>
        ) : null}

        {contentPolicy.resultQuoteMode === "safe" ? (
          <p className="text-xs leading-6 text-text-tertiary">
            {copy.result.safeMode}
          </p>
        ) : null}
      </section>

      <Disclaimer locale={locale} />
    </main>
  );
}
