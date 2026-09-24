import type { ComponentProps } from "react"
import { cn } from "cn"

function Avatar({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar"
      className={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  )
}

function AvatarImage({ className, alt = "", ...props }: ComponentProps<"img">) {
  return <img data-slot="avatar-image" className={cn("aspect-square size-full object-cover", className)} alt={alt} {...props} />
}

function AvatarFallback({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="avatar-fallback" className={cn("flex size-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground", className)} {...props} />
}

export { Avatar, AvatarImage, AvatarFallback }
