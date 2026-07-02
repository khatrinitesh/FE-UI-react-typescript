import { motion } from "framer-motion"

export default function CarRunning() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-100">
      <div className="relative h-64 w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-b from-sky-300 to-green-300">
        {/* Clouds */}
        <motion.div
          className="absolute left-10 top-8 h-8 w-20 rounded-full bg-white"
          animate={{ x: [0, 600] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute left-40 top-14 h-6 w-16 rounded-full bg-white"
          animate={{ x: [0, 500] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Road */}
        <div className="absolute bottom-0 h-24 w-full bg-gray-800">
          <motion.div
            className="absolute top-1/2 flex w-[200%] -translate-y-1/2 gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="h-2 w-20 rounded bg-white" />
            ))}
          </motion.div>
        </div>

        {/* Car */}
        <motion.div
          className="absolute bottom-20 left-1/2 w-64 -translate-x-1/2"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Car Body */}
          <div className="relative h-20 rounded-2xl bg-red-500 shadow-lg">
            {/* Top */}
            <div className="absolute -top-10 left-12 h-12 w-32 rounded-t-3xl bg-red-500" />

            {/* Windows */}
            <div className="absolute -top-7 left-16 h-8 w-12 rounded bg-sky-200" />
            <div className="absolute -top-7 left-32 h-8 w-12 rounded bg-sky-200" />

            {/* Head Light */}
            <div className="absolute right-2 top-8 h-4 w-4 rounded-full bg-yellow-300" />

            {/* Tail Light */}
            <div className="absolute left-2 top-8 h-4 w-3 rounded bg-red-800" />

            {/* Wheels */}
            <motion.div
              className="absolute -bottom-7 left-10 h-14 w-14 rounded-full border-8 border-black bg-gray-400"
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="m-auto mt-3 h-4 w-4 rounded-full bg-black" />
            </motion.div>

            <motion.div
              className="absolute -bottom-7 right-10 h-14 w-14 rounded-full border-8 border-black bg-gray-400"
              animate={{ rotate: 360 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="m-auto mt-3 h-4 w-4 rounded-full bg-black" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}