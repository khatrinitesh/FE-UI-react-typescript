import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function TimelineDemo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.title', {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from('.description', {
          opacity: 0,
          y: 20,
          duration: 0.4,
        })
        .from('.button', {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
        })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="p-10">
      <h1 className="title text-4xl font-bold">
        Welcome
      </h1>

      <p className="description mt-3 text-muted-foreground">
        This content animates step by step.
      </p>

      <button className="button mt-5 rounded-md bg-black px-4 py-2 text-white">
        Get Started
      </button>
    </div>
  )
}