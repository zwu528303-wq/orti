import { cn } from "@/lib/cn";

type OptionButtonProps = {
  label: string;
  textZh: string;
  textEn?: string;
  onSelect: () => void;
  disabled?: boolean;
  isSelected?: boolean;
};

export function OptionButton({
  label,
  textZh,
  textEn,
  onSelect,
  disabled = false,
  isSelected = false,
}: OptionButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-[20px] border border-border-soft bg-bg-card px-5 py-5 text-left shadow-card transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-accent-primary hover:bg-bg-tint hover:shadow-cardHover",
        "disabled:cursor-not-allowed disabled:opacity-70",
        isSelected && "border-accent-primary bg-bg-quote shadow-cardHover",
      )}
      disabled={disabled}
      onClick={onSelect}
      type="button"
    >
      <div className="flex gap-4">
        <span
          className={cn(
            "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-200",
            isSelected
              ? "border-accent-primary bg-accent-primary text-text-onDark"
              : "border-border-medium bg-bg-tint text-accent-primary",
          )}
        >
          {label}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-base leading-7 text-text-primary">{textZh}</p>
          {textEn ? (
            <p className="mt-2 text-sm italic leading-6 text-text-secondary">
              {textEn}
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}
