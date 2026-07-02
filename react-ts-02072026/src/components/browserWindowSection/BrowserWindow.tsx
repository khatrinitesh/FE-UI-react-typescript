import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Lock, RotateCcw } from "lucide-react"

interface BrowserWindowProps {
  title?: string
  url?: string
  children: React.ReactNode
}

export default function BrowserWindow({
  title = "Preview",
  url = "https://example.com",
  children,
}: BrowserWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
    >
      {/* Browser Top Bar */}
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-3">
        {/* Window Dots */}
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-500" />
        </div>

        {/* Browser Controls */}
        <div className="ml-3 hidden items-center gap-2 text-gray-500 sm:flex">
          <ArrowLeft size={16} />
          <ArrowRight size={16} />
          <RotateCcw size={15} />
        </div>

        {/* URL Bar */}
        <div className="flex flex-1 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600">
          <Lock size={14} className="text-green-600" />
          <span className="truncate">{url}</span>
        </div>

        <p className="hidden text-sm font-medium text-gray-600 md:block">
          {title}
        </p>
      </div>

      {/* Browser Body */}
      <div className="min-h-87.5 bg-white p-6">{children}</div>
    </motion.div>
  )
}