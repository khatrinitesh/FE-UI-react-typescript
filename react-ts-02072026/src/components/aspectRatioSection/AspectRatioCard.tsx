import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"

interface AspectRatioCardProps {
  title: string
  image: string
  ratio?: "square" | "video" | "portrait" | "wide"
}

const ratioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
}

export default function AspectRatioCard({
  title,
  image,
  ratio = "video",
}: AspectRatioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
    >
      <div className={`relative overflow-hidden bg-gray-100 ${ratioClasses[ratio]}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="size-10 text-gray-400" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-gray-600">
          This card keeps a fixed aspect ratio using Tailwind CSS.
        </p>
      </div>
    </motion.div>
  )
}