"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import { SongCard } from "@/components/Result/SongCard";
import { Button } from "@/components/shared/Button";
import { Disclaimer } from "@/components/shared/Disclaimer";
import { contentPolicy } from "@/config/content";
import {
  songsById,
  type Song,
  type SpectrumStage,
} from "@/data/songs";
import zh from "@/data/i18n/zh.json";
import { trackEvent } from "@/lib/analytics";
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

export function ResultExperience() {
  const params = useParams<{ songId: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { resetQuiz } = useQuizContext();
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

  if (!song) {
    return (
      <main className="app-shell flex items-center justify-center">
        <div className="surface-card w-full p-8 text-center">
          <p className="kicker">Result not found</p>
          <p className="mt-4 text-base leading-7 text-text-secondary">
            这个结果页还没有对应的歌曲数据。
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
    router.push("/quiz");
  };

  const handleOpenNetease = async () => {
    if (song.neteaseUrl === "#") {
      setNeteaseStatus("网易云链接待补充");
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
      setNeteaseStatus("链接已复制，请在浏览器打开");
    } catch {
      setNeteaseStatus("无法自动打开，请手动复制链接");
    }
  };

  return (
    <main className="app-shell space-y-6">
      <SongCard song={song} stage={stage} />

      <section className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleCopyLink} type="button" variant="ghost">
            {zh.result.copyLink}
          </Button>
          <Button onClick={handleOpenNetease} type="button">
            {zh.result.neteaseButton}
          </Button>
          <Button onClick={handleRetake} type="button" variant="ghost">
            {zh.result.retake}
          </Button>
        </div>

        {copyStatus === "success" ? (
          <p className="text-sm text-text-secondary">
            {zh.result.copyLinkSuccess}
          </p>
        ) : null}

        {copyStatus === "error" ? (
          <p className="text-sm text-text-secondary">
            {zh.result.copyLinkError}
          </p>
        ) : null}

        {manualCopyVisible ? (
          <input
            className="w-full rounded-soft border border-border-soft bg-bg-card px-4 py-3 text-sm text-text-secondary"
            readOnly
            value={resultUrl}
          />
        ) : null}

        {neteaseStatus ? (
          <p className="text-sm text-text-secondary">{neteaseStatus}</p>
        ) : null}

        {contentPolicy.resultQuoteMode === "safe" ? (
          <p className="text-xs leading-6 text-text-tertiary">
            当前结果页运行在 safe 模式，歌词区默认隐藏，方便先完成设计与版权降级版本。
          </p>
        ) : null}
      </section>

      <Disclaimer />
    </main>
  );
}
