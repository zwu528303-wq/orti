import { eras } from "@/data/eras";
import { cn } from "@/lib/cn";

type SpectrumRailProps = {
  activeSlot: 1 | 2 | 3 | 4 | 5;
};

const slots: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

export function SpectrumRail({ activeSlot }: SpectrumRailProps) {
  return (
    <div className="relative grid h-full min-h-[34rem] grid-rows-5 items-center">
      <div className="absolute left-[2.12rem] top-10 bottom-[3.65rem] w-[3px] rounded-full bg-accent-primary shadow-[0_0_0_4px_rgba(212,165,232,0.2)]" />
      <span className="absolute left-[1.58rem] bottom-4 h-0 w-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-accent-primary drop-shadow-[0_6px_12px_rgba(107,45,140,0.34)]" />

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
