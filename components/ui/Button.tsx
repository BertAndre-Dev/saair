import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

export type ButtonProps =
  | (ButtonBaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (ButtonBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props as ButtonBaseProps;

  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    variant === "primary" && "bg-black text-white hover:bg-black/90",
    variant === "secondary" &&
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
    variant === "outline" &&
      "border border-black/10 bg-transparent text-zinc-900 hover:bg-black/5 dark:border-white/15 dark:text-zinc-50 dark:hover:bg-white/5",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
    size === "lg" && "h-12 px-6 text-base",
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={sharedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as Exclude<
    ButtonProps,
    ButtonBaseProps & { href: string }
  >;
  return (
    <button type={type} className={sharedClassName} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;

