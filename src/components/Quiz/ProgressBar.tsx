type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.max((current / total) * 100, 0);

  return (
    <div className="space-y-3">
      <div className="h-px w-full overflow-hidden rounded-full bg-accent-light/30">
        <div
          className="h-full bg-accent-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-text-secondary">
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
    </div>
  );
}
