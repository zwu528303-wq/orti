import { eras } from "@/data/eras";
import { cn } from "@/lib/cn";

type SpectrumRailProps = {
  activeSlot: 1 | 2 | 3 | 4 | 5;
};

const slots: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

export function SpectrumRail({ activeSlot }: SpectrumRailProps) {
  return (
    <div className="relative grid h-full min-h-[29.5rem] grid-rows-5 items-center sm:min-h-[31rem]">
      <div className="absolute left-[1.98rem] top-8 bottom-[3.15rem] w-[3px] bg-accent-primary sm:left-[2.1rem]" />
      <span className="absolute left-[1.42rem] bottom-3 h-0 w-0 border-l-[11px] border-r-[11px] border-t-[17px] border-l-transparent border-r-transparent border-t-accent-primary sm:left-[1.55rem]" />

      {slots.map((slot) => {
        const era = eras.find((item) => item.anchorSlot === slot);
        const isActive = activeSlot === slot;

        return (
          <div className="relative flex min-h-[4.75rem] items-center sm:min-h-[5rem]" key={slot}>
            <span
              className={cn(
                "absolute left-[1.55rem] h-4 w-4 rounded-full border-[1.5px] border-border-soft bg-accent-bright transition-all duration-300 ease-out sm:left-[1.68rem]",
                isActive
                  ? "scale-100 bg-accent-primary opacity-100"
                  : "scale-75 opacity-0",
              )}
            />

            {era ? (
              <div className="ml-0 w-[4.15rem] rounded-[10px] border-[1.5px] border-border-soft bg-[#fff5f9] p-1.5 shadow-[3px_3px_0_0_#c796aa] sm:w-[4.35rem]">
                <div className="flex aspect-square items-center justify-center rounded-[8px] border-[1.5px] border-border-soft bg-accent-light px-1 text-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-primary sm:text-[0.78rem]">
                  {era.label}
                </div>
                {era.releaseLabel ? (
                  <p className="mt-1.5 text-center text-[0.64rem] tracking-[0.11em] text-text-secondary sm:text-[0.66rem]">
                    {era.releaseLabel}
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="ml-[1.8rem] h-px w-4 bg-accent-light sm:ml-[1.95rem] sm:w-5" />
            )}
          </div>
        );
      })}
    </div>
  );
}
