import type { Route } from "next";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "outline" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  outline:
    "border-[1.5px] border-border-soft bg-accent-primary text-text-onDark shadow-card hover:bg-[#a85e80]",
  ghost:
    "border-[1.5px] border-border-soft bg-accent-light text-text-primary shadow-card hover:bg-[#f1c3d4]",
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
    "inline-flex min-h-12 items-center justify-center rounded-[10px] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
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
