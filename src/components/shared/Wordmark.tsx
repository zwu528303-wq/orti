import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  size?: "hero" | "small" | "watermark";
  tone?: "primary" | "secondary";
};

const sizeStyles: Record<NonNullable<WordmarkProps["size"]>, string> = {
  hero: "text-[clamp(3.7rem,12vw,5rem)]",
  small: "text-[0.92rem]",
  watermark: "text-[0.78rem]",
};

const toneStyles: Record<NonNullable<WordmarkProps["tone"]>, string> = {
  primary: "text-accent-primary",
  secondary: "text-text-secondary",
};

export function Wordmark({
  className,
  size = "hero",
  tone = "primary",
}: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-brand font-normal uppercase leading-none tracking-[0.08em]",
        sizeStyles[size],
        toneStyles[tone],
        className,
      )}
    >
      ORTI
    </span>
  );
}
