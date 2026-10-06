import {
    RotateCcw,
    ZoomIn,
    ZoomOut,
} from "lucide-react"
import {
    useState,
    type CSSProperties,
} from "react"

import { cn } from "../../utils/cn"
import Button from "./Button"

type ImageZoomProps = {
  src: string
  alt: string
  initialZoom?: number
  minZoom?: number
  maxZoom?: number
  step?: number
  disabled?: boolean
  showReset?: boolean
  className?: string
  imageClassName?: string
  style?: CSSProperties

  onZoomChange?: (zoom: number) => void
}

export default function ImageZoom({
  src,
  alt,
  initialZoom = 1,
  minZoom = 1,
  maxZoom = 3,
  step = 0.25,
  disabled = false,
  showReset = true,
  className,
  imageClassName,
  style,

  onZoomChange,
}: ImageZoomProps) {
  const [zoom, setZoom] =
    useState(initialZoom)

  function updateZoom(value: number) {
    const nextZoom = Math.min(
      maxZoom,
      Math.max(minZoom, value)
    )

    setZoom(nextZoom)
    onZoomChange?.(nextZoom)
  }

  function handleZoomIn() {
    updateZoom(zoom + step)
  }

  function handleZoomOut() {
    updateZoom(zoom - step)
  }

  function handleReset() {
    updateZoom(initialZoom)
  }

  const cannotZoomOut =
    disabled || zoom <= minZoom

  const cannotZoomIn =
    disabled || zoom >= maxZoom

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl border border-zinc-200 bg-white",
        className
      )}
      style={style}
    >
      <section className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          draggable={false}
          className={cn(
            "aspect-4/3 w-full object-cover",
            "transition-transform duration-300 ease-out",
            imageClassName
          )}
          style={{
            transform: `scale(${zoom})`,
          }}
        />
      </section>

      <figcaption className="flex items-center justify-between gap-4 border-t border-zinc-200 p-3">
        <span className="text-sm font-medium text-zinc-500">
          {Math.round(zoom * 100)}%
        </span>

        <nav
          aria-label="Image zoom controls"
          className="flex items-center gap-2"
        >
          <Button
            type="button"
            variant="outline"
            disabled={cannotZoomOut}
            onClick={handleZoomOut}
            aria-label="Zoom out"
            title="Zoom out"
            className="px-3"
          >
            <ZoomOut size={17} />
          </Button>

          {showReset && (
            <Button
              type="button"
              variant="ghost"
              disabled={disabled || zoom === initialZoom}
              onClick={handleReset}
              aria-label="Reset zoom"
              title="Reset zoom"
              className="px-3"
            >
              <RotateCcw size={17} />
            </Button>
          )}

          <Button
            type="button"
            variant="outline"
            disabled={cannotZoomIn}
            onClick={handleZoomIn}
            aria-label="Zoom in"
            title="Zoom in"
            className="px-3"
          >
            <ZoomIn size={17} />
          </Button>
        </nav>
      </figcaption>
    </figure>
  )
}