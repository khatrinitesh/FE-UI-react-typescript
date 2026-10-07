import gsap from 'gsap'
import { useRef } from 'react'

export function MoveBox() {
  const boxRef = useRef<HTMLDivElement>(null)

  const handleAnimate = () => {
    gsap.to(boxRef.current, {
      x: 300,
      rotation: 360,
      duration: 1,
      ease: 'power2.inOut',
    })
  }

  return (
    <div className="space-y-6 p-10">
      <button
        onClick={handleAnimate}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Animate
      </button>

      <div
        ref={boxRef}
        className="h-20 w-20 rounded-lg bg-blue-500"
      />
    </div>
  )
}