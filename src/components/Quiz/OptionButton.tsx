import { cn } from "@/lib/cn";

type OptionButtonProps = {
  label: string;
  text: string;
  onSelect: () => void;
  disabled?: boolean;
  isSelected?: boolean;
};

export function OptionButton({
  label,
  text,
  onSelect,
  disabled = false,
  isSelected = false,
}: OptionButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-[12px] border-[1.5px] border-border-soft bg-accent-light px-5 py-4 text-left shadow-[4px_4px_0_0_#c796aa] transition-all duration-150 ease-out",
        "hover:translate-x-[1px] hover:translate-y-[1px] hover:bg-[#f1c3d4] hover:shadow-[3px_3px_0_0_#b9899b]",
        "disabled:cursor-not-allowed disabled:opacity-70",
        isSelected &&
          "translate-x-[2px] translate-y-[2px] bg-accent-primary shadow-[2px_2px_0_0_#b9899b]",
      )}
      disabled={disabled}
      onClick={onSelect}
      type="button"
    >
      <div className="flex gap-4">
        <span
          className={cn(
            "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border-[1.5px] border-border-soft bg-[#fff5f9] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-text-primary transition-colors duration-200",
          )}
        >
          {label}
        </span>

        <div className="min-w-0 flex-1">
          <p className={cn("text-base leading-6 text-text-primary", isSelected && "text-text-onDark")}>
            {text}
          </p>
        </div>
      </div>
    </button>
  );
}
