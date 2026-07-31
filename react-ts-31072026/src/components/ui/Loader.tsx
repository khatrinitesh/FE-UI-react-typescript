import type { HTMLAttributes } from "react";

import { cn } from "../../utils/cn";

export type LoaderSize = "sm" | "md" | "lg";

export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  size?: LoaderSize;
  label?: string;
}

const loaderSizes: Record<LoaderSize, string> = {
  sm: "size-4 border-2",
  md: "size-5 border-2",
  lg: "size-8 border-[3px]",
};

export function Loader({
  size = "md",
  label,
  className,
  ...spanProps
}: LoaderProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      className={cn("inline-flex items-center gap-2", className)}
      {...spanProps}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block animate-spin rounded-full",
          "border-current border-r-transparent",
          loaderSizes[size],
        )}
      />

      {label && <span className="text-sm">{label}</span>}
    </span>
  );
}
