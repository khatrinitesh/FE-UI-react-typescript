import type {
    CSSProperties,
    HTMLAttributes,
    ReactNode,
} from "react"
import { cn } from "../../utils/cn"


type ColorfulTextVariant =
  | "gradient"
  | "rainbow"
  | "sunset"
  | "ocean"

type ColorfulTextProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  variant?: ColorfulTextVariant
  animated?: boolean
  className?: string
  style?: CSSProperties
}

const variants: Record<ColorfulTextVariant, string> = {
  gradient:
    "from-violet-600 via-fuchsia-500 to-orange-400",

  rainbow:
    "from-red-500 via-yellow-400 via-green-500 via-blue-500 to-violet-600",

  sunset:
    "from-orange-500 via-rose-500 to-purple-600",

  ocean:
    "from-cyan-500 via-blue-500 to-violet-600",
}

export default function ColorfulText({
  children,
  variant = "gradient",
  animated = false,
  className,
  style,
  ...props
}: ColorfulTextProps) {
  return (
    <span
      className={cn(
        "bg-linear-to-r bg-clip-text text-transparent",

        variants[variant],

        animated &&
          "bg-size-[200%_auto] animate-[colorful-text_4s_linear_infinite]",

        className
      )}
      style={style}
      {...props}
    >
      {children}
    </span>
  )
}