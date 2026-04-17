type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.max((current / total) * 100, 0);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4 text-[0.72rem] uppercase tracking-[0.18em] text-text-secondary">
        <span>Progress</span>
        <span>
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full border-[1.5px] border-border-soft bg-accent-bright">
        <div
          className="h-full rounded-full bg-accent-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
