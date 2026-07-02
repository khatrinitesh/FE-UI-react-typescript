import { AnimatePresence, motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { useMemo, useState } from "react"

const suggestions = [
  "React",
  "React Router",
  "React Query",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Zustand",
  "TanStack Router",
  "TanStack Form",
  "JavaScript",
  "Next.js",
]

export default function Autocomplete() {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const filteredSuggestions = useMemo(() => {
    if (!value.trim()) return suggestions

    return suggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    )
  }, [value])

  const showDropdown = isFocused && filteredSuggestions.length > 0

  const handleSelect = (item: string) => {
    setValue(item)
    setIsFocused(false)
  }

  const clearValue = () => {
    setValue("")
  }

  return (
    <div className="mx-auto mt-20 w-full max-w-md px-4">
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="pointer-events-none absolute left-4 size-5 text-gray-400" />

          <input
            type="text"
            value={value}
            placeholder="Search technology..."
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-12 text-sm font-medium text-gray-900 shadow-sm outline-none transition focus:border-black focus:ring-4 focus:ring-black/5"
          />

          {value && (
            <button
              type="button"
              onClick={clearValue}
              className="absolute right-4 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        <AnimatePresence>
          {showDropdown && (
            <motion.ul
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 z-50 max-h-64 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-xl"
            >
              {filteredSuggestions.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="button"
                    onMouseDown={() => handleSelect(item)}
                    className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}