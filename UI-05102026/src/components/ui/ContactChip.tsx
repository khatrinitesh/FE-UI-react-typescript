import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react"

import { cn } from "../../utils/cn"
import Button from "./Button"

type ContactChipVariant =
  | "default"
  | "outline"
  | "filled"
  | "dark"
  | "success"

type IconPosition = "left" | "right"

type CommonProps = {
  children: ReactNode
  icon?: ReactNode
  iconPosition?: IconPosition
  variant?: ContactChipVariant
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

type ContactChipLinkProps = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "style" | "className"
  > & {
    href: string
  }

type ContactChipButtonProps = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "style" | "className"
  > & {
    href?: undefined
  }

type ContactChipProps =
  | ContactChipLinkProps
  | ContactChipButtonProps

const variants: Record<ContactChipVariant, string> = {
  default:
    "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950",

  outline:
    "border-zinc-300 bg-transparent text-zinc-700 hover:border-zinc-950 hover:text-zinc-950",

  filled:
    "border-transparent bg-zinc-100 text-zinc-700 hover:bg-zinc-200",

  dark:
    "border-zinc-950 bg-zinc-950 text-white hover:bg-zinc-800",

  success:
    "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
}

function isLinkProps(
  props: ContactChipProps
): props is ContactChipLinkProps {
  return typeof props.href === "string"
}

export default function ContactChip(
  props: ContactChipProps
) {
  const {
    children,
    icon,
    iconPosition = "left",
    variant = "default",
    disabled = false,
    className,
    style,
  } = props

  const classes = cn(
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border px-4 py-2",
    "text-sm font-medium transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
    disabled &&
      "pointer-events-none cursor-not-allowed opacity-50",
    variants[variant],
    className
  )

  if (isLinkProps(props)) {
    const {
      href,
      target,
      rel,
      onClick,

      children: _children,
      icon: _icon,
      iconPosition: _iconPosition,
      variant: _variant,
      disabled: _disabled,
      className: _className,
      style: _style,

      ...rest
    } = props

    return (
      <a
        {...rest}
        href={disabled ? undefined : href}
        target={target}
        rel={
          target === "_blank"
            ? rel ?? "noreferrer"
            : rel
        }
        aria-disabled={disabled}
        onClick={
          disabled
            ? (event) => event.preventDefault()
            : onClick
        }
        className={classes}
        style={style}
      >
        {iconPosition === "left" && icon}

        {children}

        {iconPosition === "right" && icon}
      </a>
    )
  }

  /*
   * Existing reusable Button
   *
   * TypeScript now knows props is
   * ContactChipButtonProps.
   */
  const {
    type = "button",
    onClick,

    children: _children,
    icon: _icon,
    iconPosition: _iconPosition,
    variant: _variant,
    disabled: _disabled,
    className: _className,
    style: _style,

    ...rest
  } = props

  return (
    <Button
      {...rest}
      type={type}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
      iconPosition={iconPosition}
      variant="ghost"
      className={classes}
      style={style}
    >
      {children}
    </Button>
  )
}