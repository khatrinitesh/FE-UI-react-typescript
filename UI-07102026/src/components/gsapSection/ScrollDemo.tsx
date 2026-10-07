import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function ScrollDemo() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.scroll-card', {
        opacity: 0,
        y: 80,
        duration: 0.8,

        scrollTrigger: {
          trigger: '.scroll-card',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <div className="h-screen" />

      <div className="scroll-card mx-auto w-80 rounded-xl border p-8">
        Animate when I enter the screen
      </div>

      <div className="h-screen" />
    </div>
  )
}