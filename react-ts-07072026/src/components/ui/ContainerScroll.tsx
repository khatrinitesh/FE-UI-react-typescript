import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ContainerScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.75])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 8, 18])
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.4])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] bg-[#0f0f10] text-white"
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            style={{ y, opacity }}
            className="mb-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
              Scroll Animation
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Build beautiful container scroll effects with React
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 md:text-lg">
              This section scales, rotates and fades while the user scrolls
              through the container.
            </p>
          </motion.div>

          <div className="relative w-full perspective-[1200px]">
            <motion.div
              style={{
                scale,
                rotateX,
              }}
              className="mx-auto h-[420px] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl md:h-[560px]"
            >
              <div className="flex h-14 items-center gap-2 border-b border-white/10 bg-white/10 px-5">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
              </div>

              <div className="grid h-[calc(100%-56px)] grid-cols-1 md:grid-cols-3">
                <div className="border-b border-white/10 p-6 text-left md:border-b-0 md:border-r">
                  <h3 className="text-xl font-semibold">Dashboard</h3>
                  <p className="mt-2 text-sm text-white/50">
                    Smooth UI card animation based on scroll progress.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                    <div className="h-24 rounded-2xl bg-white/10" />
                  </div>
                </div>

                <div className="col-span-2 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Analytics</h3>
                    <button className="rounded-full bg-red-500 px-5 py-2 text-sm font-medium text-white">
                      View Report
                    </button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="h-36 rounded-2xl bg-white/10" />
                    <div className="h-36 rounded-2xl bg-white/10" />
                    <div className="h-36 rounded-2xl bg-white/10 md:col-span-2" />
                    <div className="h-28 rounded-2xl bg-white/10 md:col-span-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}