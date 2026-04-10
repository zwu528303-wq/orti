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
        "surface-card w-full p-5 text-left transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-accent-light hover:shadow-cardHover",
        "disabled:cursor-not-allowed disabled:opacity-70",
        isSelected && "border-accent-primary bg-accent-primary text-text-onDark",
      )}
      disabled={disabled}
      onClick={onSelect}
      type="button"
    >
      <p
        className={cn(
          "text-xs uppercase tracking-[0.18em]",
          isSelected ? "text-text-onDark/80" : "text-accent-light",
        )}
      >
        {label}
      </p>
      <p className="mt-3 text-base leading-7">{textZh}</p>
      {textEn ? (
        <p
          className={cn(
            "mt-2 text-sm italic leading-6",
            isSelected ? "text-text-onDark/80" : "text-text-secondary",
          )}
        >
          {textEn}
        </p>
      ) : null}
    </button>
  );
}
