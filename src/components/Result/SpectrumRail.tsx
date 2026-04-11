import { eras } from "@/data/eras";
import { cn } from "@/lib/cn";

type SpectrumRailProps = {
  activeSlot: 1 | 2 | 3 | 4 | 5;
};

const slots: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

export function SpectrumRail({ activeSlot }: SpectrumRailProps) {
  return (
    <div className="relative grid h-full min-h-[29.5rem] grid-rows-5 items-center sm:min-h-[31rem]">
      <div className="absolute left-[1.95rem] top-8 bottom-[3.15rem] w-[3px] rounded-full bg-accent-primary shadow-[0_0_0_4px_rgba(212,165,232,0.2)] sm:left-[2.08rem]" />
      <span className="absolute left-[1.42rem] bottom-3 h-0 w-0 border-l-[11px] border-r-[11px] border-t-[17px] border-l-transparent border-r-transparent border-t-accent-primary drop-shadow-[0_6px_12px_rgba(107,45,140,0.34)] sm:left-[1.55rem]" />

      {slots.map((slot) => {
        const era = eras.find((item) => item.anchorSlot === slot);
        const isActive = activeSlot === slot;

        return (
          <div className="relative flex min-h-[4.75rem] items-center sm:min-h-[5rem]" key={slot}>
            <span
              className={cn(
                "absolute left-[1.62rem] h-4 w-4 rounded-full border border-accent-primary/45 bg-bg-primary shadow-[0_0_0_7px_rgba(217,204,237,0.72)] transition-all duration-500 ease-out sm:left-[1.75rem]",
                isActive
                  ? "scale-100 bg-accent-bright opacity-100"
                  : "scale-75 opacity-0",
              )}
            />

            {era ? (
              <div className="ml-0 w-[4.15rem] rounded-[1rem] border border-border-soft bg-bg-tint p-1.5 shadow-card sm:w-[4.35rem]">
                <div className="flex aspect-square items-center justify-center rounded-[0.88rem] bg-accent-bright/65 px-1 text-center text-[0.76rem] uppercase tracking-[0.14em] text-text-primary sm:text-[0.8rem]">
                  {era.label}
                </div>
                {era.releaseLabel ? (
                  <p className="mt-1.5 text-center text-[0.64rem] tracking-[0.11em] text-text-tertiary sm:text-[0.66rem]">
                    {era.releaseLabel}
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="ml-[1.8rem] h-px w-4 bg-border-soft sm:ml-[1.95rem] sm:w-5" />
            )}
          </div>
        );
      })}
    </div>
  );
}
