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
      <div className="flex items-center justify-between gap-4">
        <Wordmark size="watermark" tone="secondary" />
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary">
          your type
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-5 sm:grid-cols-[6rem_minmax(0,1fr)]">
        <SpectrumRail activeSlot={spectrumCopy.slot} />

        <div className="flex min-h-[28rem] flex-col">
          <div>
            <p className="text-sm leading-6 text-text-secondary">{spectrumCopy.zh}</p>
            <p className="mt-1 text-xs italic leading-5 text-text-tertiary">
              {spectrumCopy.en}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-[clamp(2.5rem,8vw,3rem)] leading-[1.12] text-text-primary">
              {song.titleEn}
            </p>
            <p className="mt-3 text-sm italic tracking-[0.05em] text-text-secondary">
              Olivia Rodrigo · {song.album}
            </p>
          </div>

          {shouldShowLyrics ? (
            <div className="mt-7 rounded-quote bg-bg-quote px-4 py-4">
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

          <p className="mt-7 text-base leading-8 text-text-primary">
            {song.personalityZh}
          </p>

          <p className="mt-auto pt-8 text-lg italic leading-7 text-accent-primary">
            {song.philosophyEn}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <span className="text-xs tracking-[0.06em] text-text-tertiary">
          orti.vercel.app
        </span>
      </div>
    </section>
  );
}
