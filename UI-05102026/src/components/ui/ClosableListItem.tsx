import { X } from "lucide-react"
import type {
    ButtonHTMLAttributes,
    HTMLAttributes,
    ReactNode,
} from "react"
import { cn } from "../../utils/cn"


type ClosableListItemVariant =
  | "default"
  | "outline"
  | "filled"

type ClosableListItemProps =
  HTMLAttributes<HTMLLIElement> & {
    children: ReactNode

    icon?: ReactNode

    variant?: ClosableListItemVariant

    disabled?: boolean

    onClose?: () => void

    closeButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>

    closeIcon?: ReactNode
  }

const variants: Record<
  ClosableListItemVariant,
  string
> = {
  default:
    "border-zinc-200 bg-white text-zinc-900",

  outline:
    "border-zinc-300 bg-transparent text-zinc-900",

  filled:
    "border-transparent bg-zinc-100 text-zinc-900",
}

export default function ClosableListItem({
  children,

  icon,

  variant = "default",

  disabled = false,

  onClose,

  closeButtonProps,

  closeIcon,

  className,

  ...props
}: ClosableListItemProps) {
  return (
    <li
      className={cn(
        "flex min-h-12 items-center gap-3 rounded-xl border px-4 py-2",

        "transition-colors",

        variants[variant],

        disabled &&
          "pointer-events-none opacity-50",

        className
      )}
      {...props}
    >
      {icon}

      <span className="min-w-0 flex-1">
        {children}
      </span>

      {onClose && (
        <button
          type="button"
          aria-label="Remove item"
          disabled={disabled}
          onClick={onClose}
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg",

            "text-zinc-500 transition-colors",

            "hover:bg-zinc-200 hover:text-zinc-950",

            "disabled:pointer-events-none disabled:opacity-50",

            closeButtonProps?.className
          )}
          {...closeButtonProps}
        >
          {closeIcon ?? <X size={16} />}
        </button>
      )}
    </li>
  )
}