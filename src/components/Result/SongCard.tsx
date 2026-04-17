import { contentPolicy } from "@/config/content";
import { songPersonalityEn } from "@/data/song-copy";
import type { Song, SpectrumStage } from "@/data/songs";
import type { AppLocale } from "@/lib/locale";
import { getSpectrumCopy } from "@/lib/spectrum";

import { SpectrumRail } from "@/components/Result/SpectrumRail";
import { Wordmark } from "@/components/shared/Wordmark";

type SongCardProps = {
  song: Song;
  stage: SpectrumStage;
  locale?: AppLocale;
};

export function SongCard({ song, stage, locale = "zh" }: SongCardProps) {
  const spectrumCopy = getSpectrumCopy(stage);
  const shouldShowLyrics =
    contentPolicy.resultQuoteMode === "lyrics" && Boolean(song.lyricsEn);
  const personalityCopy =
    locale === "en" ? songPersonalityEn[song.id] ?? song.personalityZh : song.personalityZh;

  return (
    <section className="surface-card overflow-hidden px-4 py-4 sm:px-5 sm:py-5">
      <div className="space-y-1.5">
        <Wordmark size="watermark" tone="secondary" />
        <p className="eyebrow">Olivia type file</p>
      </div>

      <div className="mt-4 grid grid-cols-[4.95rem_minmax(0,1fr)] gap-4 sm:grid-cols-[5.65rem_minmax(0,1fr)] sm:gap-5">
        <SpectrumRail activeSlot={spectrumCopy.slot} />

        <div className="flex min-h-[29.5rem] flex-col sm:min-h-[31rem]">
          <div className="border-b-[1.5px] border-border-soft pb-4">
            {locale === "en" ? (
              <p className="text-sm leading-6.5 text-text-secondary">{spectrumCopy.en}</p>
            ) : (
              <>
                <p className="text-sm leading-6.5 text-text-secondary">{spectrumCopy.zh}</p>
                <p className="mt-1 text-[0.72rem] italic leading-5 text-text-tertiary">
                  {spectrumCopy.en}
                </p>
              </>
            )}
          </div>

          <div className="mt-5">
            <p className="text-[clamp(2rem,6.6vw,2.7rem)] leading-[1.02] text-text-primary">
              {song.titleEn}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm italic tracking-[0.05em] text-text-secondary">
              <span>Olivia Rodrigo</span>
              <span className="h-1.5 w-1.5 bg-accent-primary" />
              <span>{song.album}</span>
            </div>
          </div>

          {shouldShowLyrics ? (
            <div className="mt-5 rounded-quote border-[1.5px] border-border-soft bg-accent-bright px-4 py-3.5">
              <p className="text-[1.02rem] italic leading-6.5 text-text-primary">
                “{song.lyricsEn}”
              </p>
            </div>
          ) : null}

          <div className="lavender-panel mt-5 px-4 py-3.5">
            <p className="eyebrow">Why this song</p>
            <p className="mt-2.5 text-[0.95rem] leading-7 text-text-primary">
              {personalityCopy}
            </p>
          </div>

          <div className="mt-auto pt-6">
            <span className="soft-divider" />
            <p className="mt-4 max-w-[18rem] text-[1.03rem] italic leading-6.5 text-text-secondary">
              {song.philosophyEn}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
