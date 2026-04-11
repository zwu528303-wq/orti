import { eras } from "@/data/eras";
import { cn } from "@/lib/cn";

type SpectrumRailProps = {
  activeSlot: 1 | 2 | 3 | 4 | 5;
};

const slots: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

export function SpectrumRail({ activeSlot }: SpectrumRailProps) {
  return (
    <div className="relative grid h-full min-h-[34rem] grid-rows-5 items-center">
      <div className="absolute left-[2.2rem] top-10 bottom-10 w-px bg-accent-light/70" />

      {slots.map((slot) => {
        const era = eras.find((item) => item.anchorSlot === slot);
        const isActive = activeSlot === slot;

        return (
          <div className="relative flex min-h-[5.3rem] items-center" key={slot}>
            <span
              className={cn(
                "absolute left-[1.79rem] h-4 w-4 rounded-full border border-accent-primary/45 bg-bg-primary shadow-[0_0_0_7px_rgba(217,204,237,0.72)] transition-all duration-500 ease-out",
                isActive
                  ? "scale-100 bg-accent-bright opacity-100"
                  : "scale-75 opacity-0",
              )}
            />

            {era ? (
              <div className="ml-0 w-[4.5rem] rounded-[1.1rem] border border-border-soft bg-bg-tint p-1.5 shadow-card">
                <div className="flex aspect-square items-center justify-center rounded-[0.95rem] bg-accent-bright/65 px-1 text-center text-[0.82rem] uppercase tracking-[0.16em] text-text-primary">
                  {era.label}
                </div>
                {era.releaseLabel ? (
                  <p className="mt-2 text-center text-[0.68rem] tracking-[0.12em] text-text-tertiary">
                    {era.releaseLabel}
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="ml-[1.95rem] h-px w-5 bg-border-soft" />
            )}
          </div>
        );
      })}
    </div>
  );
}
