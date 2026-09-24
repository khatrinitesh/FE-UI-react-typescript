import type { ComponentProps } from "react"
import { cn } from "cn"

type AspectRatioProps = ComponentProps<"div"> & {
  ratio?: number
}

function AspectRatio({ ratio = 1, className, style, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: ratio, ...style }}
      {...props}
    />
  )
}

export { AspectRatio }
