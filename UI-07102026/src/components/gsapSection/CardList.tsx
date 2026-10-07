import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function CardList() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.card', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power2.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const items = ['React', 'TypeScript', 'Tailwind', 'GSAP']

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 gap-4 p-10"
    >
      {items.map((item) => (
        <div
          key={item}
          className="card rounded-xl border p-6"
        >
          {item}
        </div>
      ))}
    </div>
  )
}