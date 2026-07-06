import { motion } from "framer-motion";

const CircleDots = () => {
  const totalDots = 12;
  const radius = 110;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative h-72 w-72"
      >
        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_40px_10px_rgba(34,211,238,0.7)]"
        />

        {/* Orbit Dots */}
        {Array.from({ length: totalDots }).map((_, index) => {
          const angle = (index / totalDots) * Math.PI * 2;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              animate={{
                scale: [0.7, 1.3, 0.7],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.12,
              }}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                x,
                y,
              }}
            >
              <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            </motion.div>
          );
        })}

        {/* Inner Ring */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-cyan-400/30"
        />

        {/* Outer Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute -inset-6 rounded-full border border-cyan-500/20"
        />
      </motion.div>
    </div>
  );
};

export default CircleDots;