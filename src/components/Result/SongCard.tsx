import { contentPolicy } from "@/config/content";
import type { Song, SpectrumStage } from "@/data/songs";
import { getSpectrumCopy } from "@/lib/spectrum";

import { SpectrumRail } from "@/components/Result/SpectrumRail";
import { Wordmark } from "@/components/shared/Wordmark";

type SongCardProps = {
  song: Song;
  stage: SpectrumStage;
};

export function SongCard({ song, stage }: SongCardProps) {
  const spectrumCopy = getSpectrumCopy(stage);
  const shouldShowLyrics =
    contentPolicy.resultQuoteMode === "lyrics" && Boolean(song.lyricsEn);

  return (
    <section className="surface-card overflow-hidden px-5 py-5 sm:px-6 sm:py-6">
      <div className="space-y-2">
        <Wordmark size="watermark" tone="secondary" />
        <p className="eyebrow">Olivia type file</p>
      </div>

      <div className="mt-6 grid grid-cols-[5.35rem_minmax(0,1fr)] gap-5 sm:grid-cols-[6.1rem_minmax(0,1fr)] sm:gap-6">
        <SpectrumRail activeSlot={spectrumCopy.slot} />

        <div className="flex min-h-[34rem] flex-col">
          <div className="border-b border-border-soft pb-5">
            <p className="text-sm leading-7 text-text-secondary">{spectrumCopy.zh}</p>
            <p className="mt-1 text-xs italic leading-6 text-text-tertiary">
              {spectrumCopy.en}
            </p>
          </div>

          <div className="mt-7">
            <p className="text-[clamp(2.2rem,7.2vw,3rem)] leading-[1.02] text-text-primary">
              {song.titleEn}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-sm italic tracking-[0.05em] text-text-secondary">
              <span>Olivia Rodrigo</span>
              <span className="h-1 w-1 rounded-full bg-accent-light" />
              <span>{song.album}</span>
            </div>
          </div>

          {shouldShowLyrics ? (
            <div className="mt-7 rounded-quote border border-border-soft bg-bg-quote px-4 py-4">
              <p className="text-lg italic leading-7 text-text-primary">
                {song.lyricsEn}
              </p>
              {song.lyricsZh ? (
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {song.lyricsZh}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="lavender-panel mt-7 px-4 py-4">
            <p className="eyebrow">Why this song</p>
            <p className="mt-3 text-[0.98rem] leading-8 text-text-primary">
              {song.personalityZh}
            </p>
          </div>

          <div className="mt-auto pt-9">
            <span className="soft-divider" />
            <p className="mt-5 max-w-[18rem] text-lg italic leading-7 text-accent-primary">
              {song.philosophyEn}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-border-soft pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-text-tertiary">
          screenshot-friendly layout
        </p>
        <span className="text-xs tracking-[0.06em] text-text-tertiary">
          orti.vercel.app
        </span>
      </div>
    </section>
  );
}
