import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function GsapDemo() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
    )
  }, [])

  return (
    <div className="p-10">
      <div
        ref={boxRef}
        className="h-32 w-32 rounded-xl bg-black"
      />
    </div>
  )
}