import {
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion"
import {
    useEffect,
    useState,
    type CSSProperties,
} from "react"

import { cn } from "../../utils/cn"

type CursorVariant =
  | "solid"
  | "outline"
  | "soft"

type CursorProps = {
  enabled?: boolean

  size?: number
  hoverSize?: number

  color?: string

  variant?: CursorVariant

  hideNativeCursor?: boolean

  className?: string
  style?: CSSProperties
}

export default function CursorSection({
  enabled = true,

  size = 12,
  hoverSize = 42,

  color = "#18181b",

  variant = "solid",

  hideNativeCursor = true,

  className,
  style,
}: CursorProps) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, {
    stiffness: 700,
    damping: 45,
    mass: 0.15,
  })

  const springY = useSpring(y, {
    stiffness: 700,
    damping: 45,
    mass: 0.15,
  })

  const [visible, setVisible] =
    useState(false)

  const [interactive, setInteractive] =
    useState(false)

  const [finePointer, setFinePointer] =
    useState(false)

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(hover: hover) and (pointer: fine)"
      )

    function updatePointer() {
      setFinePointer(mediaQuery.matches)
    }

    updatePointer()

    mediaQuery.addEventListener(
      "change",
      updatePointer
    )

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePointer
      )
    }
  }, [])

  useEffect(() => {
    if (
      !enabled ||
      !finePointer
    ) {
      return
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      x.set(event.clientX)
      y.set(event.clientY)

      setVisible(true)
    }

    function handlePointerOver(
      event: PointerEvent
    ) {
      const target =
        event.target as HTMLElement | null

      if (!target) {
        return
      }

      const isInteractive =
        Boolean(
          target.closest(
            [
              "a",
              "button",
              "input",
              "textarea",
              "select",
              "[role='button']",
              "[data-cursor='interactive']",
            ].join(",")
          )
        )

      setInteractive(
        isInteractive
      )
    }

    function handlePointerLeave() {
      setVisible(false)
    }

    function handlePointerEnter() {
      setVisible(true)
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove
    )

    document.addEventListener(
      "pointerover",
      handlePointerOver
    )

    document.documentElement.addEventListener(
      "mouseleave",
      handlePointerLeave
    )

    document.documentElement.addEventListener(
      "mouseenter",
      handlePointerEnter
    )

    if (hideNativeCursor) {
      document.body.classList.add(
        "custom-cursor-active"
      )
    }

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      )

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      )

      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave
      )

      document.documentElement.removeEventListener(
        "mouseenter",
        handlePointerEnter
      )

      document.body.classList.remove(
        "custom-cursor-active"
      )
    }
  }, [
    enabled,
    finePointer,
    hideNativeCursor,
    x,
    y,
  ])

  if (
    !enabled ||
    !finePointer
  ) {
    return null
  }

  const currentSize =
    interactive
      ? hoverSize
      : size

  return (
    <motion.span
      aria-hidden="true"
      animate={{
        width: currentSize,
        height: currentSize,
        opacity: visible
          ? interactive
            ? 0.35
            : 1
          : 0,
      }}
      transition={{
        width: {
          duration: 0.2,
        },
        height: {
          duration: 0.2,
        },
        opacity: {
          duration: 0.15,
        },
      }}
      className={cn(
        "pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full",

        variant === "outline" &&
          "border-2 bg-transparent",

        variant === "soft" &&
          "blur-[1px]",

        className
      )}
      style={{
        left: springX,
        top: springY,

        ...(variant === "solid" && {
          backgroundColor: color,
        }),

        ...(variant === "outline" && {
          borderColor: color,
        }),

        ...(variant === "soft" && {
          backgroundColor: color,
        }),

        ...style,
      }}
    />
  )
}