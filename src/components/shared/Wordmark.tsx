import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  size?: "hero" | "small" | "watermark";
  tone?: "primary" | "secondary";
};

const sizeStyles: Record<NonNullable<WordmarkProps["size"]>, string> = {
  hero: "text-[clamp(3.25rem,8vw,4rem)]",
  small: "text-base",
  watermark: "text-sm",
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
        "font-serif font-normal uppercase tracking-[0.15em]",
        sizeStyles[size],
        toneStyles[tone],
        className,
      )}
    >
      ORTI
    </span>
  );
}
