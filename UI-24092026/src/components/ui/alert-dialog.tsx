import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import type { ComponentProps } from "react"
import { cn } from "cn"

function AlertDialog({ ...props }: ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root {...props} />
}

function AlertDialogTrigger({ className, ...props }: ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger className={cn("inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80", className)} {...props} />
}

function AlertDialogContent({ className, ...props }: ComponentProps<typeof AlertDialogPrimitive.Popup>) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/50 transition-opacity" />
      <AlertDialogPrimitive.Viewport className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <AlertDialogPrimitive.Popup className={cn("w-full max-w-md rounded-xl border bg-background p-6 text-foreground shadow-lg outline-none", className)} {...props} />
      </AlertDialogPrimitive.Viewport>
    </AlertDialogPrimitive.Portal>
  )
}

function AlertDialogTitle({ className, ...props }: ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return <AlertDialogPrimitive.Title className={cn("text-lg font-semibold", className)} {...props} />
}

function AlertDialogDescription({ className, ...props }: ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return <AlertDialogPrimitive.Description className={cn("mt-2 text-sm text-muted-foreground", className)} {...props} />
}

function AlertDialogCancel({ className, ...props }: ComponentProps<typeof AlertDialogPrimitive.Close>) {
  return <AlertDialogPrimitive.Close className={cn("mt-6 inline-flex h-9 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors hover:bg-muted", className)} {...props} />
}

function AlertDialogAction({ className, ...props }: ComponentProps<typeof AlertDialogPrimitive.Close>) {
  return <AlertDialogPrimitive.Close className={cn("mt-6 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80", className)} {...props} />
}

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction }
