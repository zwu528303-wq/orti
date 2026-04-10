import type { Route } from "next";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "outline" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  outline:
    "border-[1.5px] border-accent-primary text-accent-primary hover:border-accent-light hover:text-accent-light",
  ghost:
    "border border-border-medium text-text-secondary hover:border-accent-light hover:text-accent-primary",
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkProps = BaseProps & {
  href: Route;
};

type NativeButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

export function Button(props: LinkProps | NativeButtonProps) {
  const className = cn(
    "inline-flex min-h-12 items-center justify-center rounded-pill px-6 py-3 text-sm tracking-[0.03em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    buttonStyles[props.variant ?? "outline"],
    props.className,
  );

  if (props.href) {
    return (
      <Link className={className} href={props.href}>
        {props.children}
      </Link>
    );
  }

  const {
    children,
    className: _className,
    variant: _variant,
    ...buttonProps
  } = props;

  void _className;
  void _variant;

  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}
