import type { ImgHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type FlipImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  direction?: "horizontal" | "vertical";
};

export function FlipImage({
  direction = "horizontal",
  className,
  alt,
  ...props
}: FlipImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      className={cn(
        "block h-auto max-w-full",
        direction === "horizontal" ? "scale-x-[-1]" : "scale-y-[-1]",
        className,
      )}
    />
  );
}
