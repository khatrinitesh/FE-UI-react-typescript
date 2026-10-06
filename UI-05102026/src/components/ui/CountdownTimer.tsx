import {
    useEffect,
    useRef,
    useState,
    type CSSProperties,
    type TimeHTMLAttributes,
} from "react"

import { cn } from "../../utils/cn"

type CountdownVariant =
  | "default"
  | "outline"
  | "filled"
  | "dark"
  | "danger"
  | "success"

type CountdownFormat =
  | "auto"
  | "mm:ss"
  | "hh:mm:ss"
  | "dd:hh:mm:ss"

type CountdownTimerProps = Omit<
  TimeHTMLAttributes<HTMLTimeElement>,
  "children"
> & {
  duration: number
  running?: boolean
  format?: CountdownFormat
  variant?: CountdownVariant
  resetKey?: string | number
  prefix?: string
  suffix?: string
  onComplete?: () => void
  className?: string
  style?: CSSProperties
}

const variants: Record<CountdownVariant, string> = {
  default:
    "text-zinc-950",

  outline:
    "rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-950",

  filled:
    "rounded-xl bg-zinc-100 px-4 py-2 text-zinc-950",

  dark:
    "rounded-xl bg-zinc-950 px-4 py-2 text-white",

  danger:
    "rounded-xl bg-red-50 px-4 py-2 text-red-600",

  success:
    "rounded-xl bg-emerald-50 px-4 py-2 text-emerald-700",
}

function pad(value: number) {
  return String(value).padStart(2, "0")
}

function formatCountdown(
  totalSeconds: number,
  format: CountdownFormat
) {
  const seconds = Math.max(
    0,
    Math.floor(totalSeconds)
  )

  const days = Math.floor(
    seconds / 86400
  )

  const hours = Math.floor(
    (seconds % 86400) / 3600
  )

  const totalHours = Math.floor(
    seconds / 3600
  )

  const minutes = Math.floor(
    (seconds % 3600) / 60
  )

  const totalMinutes = Math.floor(
    seconds / 60
  )

  const remainingSeconds =
    seconds % 60

  if (format === "dd:hh:mm:ss") {
    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(
      remainingSeconds
    )}`
  }

  if (format === "hh:mm:ss") {
    return `${pad(totalHours)}:${pad(minutes)}:${pad(
      remainingSeconds
    )}`
  }

  if (format === "mm:ss") {
    return `${pad(totalMinutes)}:${pad(
      remainingSeconds
    )}`
  }

  // auto
  if (seconds >= 86400) {
    return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(
      remainingSeconds
    )}`
  }

  if (seconds >= 3600) {
    return `${pad(totalHours)}:${pad(minutes)}:${pad(
      remainingSeconds
    )}`
  }

  return `${pad(totalMinutes)}:${pad(
    remainingSeconds
  )}`
}

export default function CountdownTimer({
  duration,
  running = true,
  format = "auto",
  variant = "default",
  resetKey,
  prefix,
  suffix,
  onComplete,
  className,
  style,
  ...props
}: CountdownTimerProps) {
  const normalizedDuration = Math.max(
    0,
    Math.floor(duration)
  )

  const [remaining, setRemaining] =
    useState(normalizedDuration)

  const completedRef = useRef(false)

  /*
   * Reset whenever duration or resetKey changes.
   */
  useEffect(() => {
    setRemaining(normalizedDuration)
    completedRef.current = false
  }, [
    normalizedDuration,
    resetKey,
  ])

  /*
   * Countdown
   */
  useEffect(() => {
    if (!running || remaining <= 0) {
      return
    }

    const interval = window.setInterval(
      () => {
        setRemaining((previous) => {
          if (previous <= 1) {
            window.clearInterval(interval)

            if (!completedRef.current) {
              completedRef.current = true
              onComplete?.()
            }

            return 0
          }

          return previous - 1
        })
      },
      1000
    )

    return () => {
      window.clearInterval(interval)
    }
  }, [
    running,
    remaining,
    onComplete,
  ])

  const formattedTime =
    formatCountdown(
      remaining,
      format
    )

  return (
    <time
      dateTime={`PT${remaining}S`}
      role="timer"
      aria-label={`${remaining} seconds remaining`}
      className={cn(
        "inline-flex font-mono text-2xl font-semibold tabular-nums",
        variants[variant],
        className
      )}
      style={style}
      {...props}
    >
      {prefix}
      {formattedTime}
      {suffix}
    </time>
  )
}