import { motion } from "framer-motion"

type ZoomImageProps = {
  src: string
  alt: string
  className?: string
}

export default function ZoomImage({
  src,
  alt,
  className = "",
}: ZoomImageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <motion.div
        className="overflow-hidden rounded-3xl shadow-2xl"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={src}
          alt={alt}
          className={`h-80 w-80 object-cover ${className}`}
        />
      </motion.div>
    </div>
  )
}