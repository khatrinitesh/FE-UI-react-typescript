import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type CardProps = {
  title: string
  description: string
  image: string
}

export default function CardHoverEffect({ title, description, image }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <motion.button
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white"
        >
          View More
          <ArrowRight size={16} />
        </motion.button>
      </div>

      {/* Border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-300 group-hover:border-black/10" />
    </motion.div>
  )
}