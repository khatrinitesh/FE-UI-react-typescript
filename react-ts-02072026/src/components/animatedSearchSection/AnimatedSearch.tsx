import { AnimatePresence, motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { useState } from "react"

export default function AnimatedSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")

  const closeSearch = () => {
    setIsOpen(false)
    setSearch("")
  }

  return (
    <div className="flex items-center justify-center p-10">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="relative flex items-center"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="search-button"
              type="button"
              onClick={() => setIsOpen(true)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex size-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:bg-gray-800"
            >
              <Search size={22} />
            </motion.button>
          ) : (
            <motion.div
              key="search-input"
              initial={{ width: 48, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 48, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="flex h-12 items-center overflow-hidden rounded-full border border-gray-200 bg-white px-4 shadow-lg"
            >
              <Search size={20} className="shrink-0 text-gray-500" />

              <motion.input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search here..."
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ delay: 0.1 }}
                className="ml-3 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />

              <motion.button
                type="button"
                onClick={closeSearch}
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="ml-2 flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
              >
                <X size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}