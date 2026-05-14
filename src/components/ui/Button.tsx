import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
          {
            "bg-primary text-white hover:bg-primary-light focus:ring-primary shadow-[var(--shadow-primary)]":
              variant === "primary",
            "bg-primary-dark text-white hover:bg-primary focus:ring-primary-dark":
              variant === "dark",
            "bg-white text-primary border border-border hover:border-primary hover:bg-surface focus:ring-primary":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary":
              variant === "outline",
          },
          {
            "px-5 py-2.5 text-sm": size === "sm",
            "px-7 py-3 text-base": size === "md",
            "px-9 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
