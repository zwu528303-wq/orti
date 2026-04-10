import { eras } from "@/data/eras";
import { cn } from "@/lib/cn";

type SpectrumRailProps = {
  activeSlot: 1 | 2 | 3 | 4 | 5;
};

const slots: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5];

export function SpectrumRail({ activeSlot }: SpectrumRailProps) {
  return (
    <div className="relative grid h-full min-h-[28rem] grid-rows-5 items-center">
      <div className="absolute left-[1.95rem] top-8 bottom-8 w-px bg-accent-light/60" />

      {slots.map((slot) => {
        const era = eras.find((item) => item.anchorSlot === slot);
        const isActive = activeSlot === slot;

        return (
          <div className="relative flex min-h-[4.75rem] items-center" key={slot}>
            <span
              className={cn(
                "absolute left-[1.57rem] h-4 w-4 rounded-full border border-accent-primary/40 bg-bg-primary shadow-[0_0_0_6px_rgba(212,165,232,0.24)] transition-all duration-500 ease-out",
                isActive
                  ? "scale-100 bg-accent-bright opacity-100"
                  : "scale-75 opacity-0",
              )}
            />

            {era ? (
              <div className="ml-0 rounded-soft border border-border-soft bg-bg-tint px-3 py-3 shadow-card">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary">
                  {era.label}
                </p>
                {era.releaseLabel ? (
                  <p className="mt-1 text-[0.7rem] text-text-tertiary">
                    {era.releaseLabel}
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="h-4" />
            )}
          </div>
        );
      })}
    </div>
  );
}
