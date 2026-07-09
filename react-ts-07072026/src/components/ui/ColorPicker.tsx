import { motion } from "framer-motion"
import { useState } from "react"

interface ColorOption {
  id: number
  name: string
  value: string
}

const colors: ColorOption[] = [
  {
    id: 1,
    name: "Red",
    value: "#ef4444",
  },
  {
    id: 2,
    name: "Blue",
    value: "#3b82f6",
  },
  {
    id: 3,
    name: "Green",
    value: "#22c55e",
  },
  {
    id: 4,
    name: "Purple",
    value: "#a855f7",
  },
  {
    id: 5,
    name: "Orange",
    value: "#f97316",
  },
  {
    id: 6,
    name: "Pink",
    value: "#ec4899",
  },
]

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colors[0])

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-400">Choose color</p>
          <h1 className="mt-1 text-2xl font-bold text-white">Color Picker</h1>
        </div>

        <motion.div
          key={selectedColor.value}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6 h-40 rounded-2xl shadow-lg"
          style={{ backgroundColor: selectedColor.value }}
        />

        <div className="mb-6 rounded-2xl bg-black/20 p-4">
          <p className="text-sm text-slate-400">Selected Color</p>

          <div className="mt-2 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {selectedColor.name}
            </h2>

            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white">
              {selectedColor.value}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {colors.map((color) => {
            const isActive = selectedColor.id === color.id

            return (
              <button
                key={color.id}
                type="button"
                onClick={() => setSelectedColor(color)}
                className="relative flex size-12 items-center justify-center rounded-full"
                aria-label={`Select ${color.name}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-color-ring"
                    className="absolute inset-0 rounded-full border-2 border-white"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <motion.span
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-9 rounded-full shadow-md"
                  style={{ backgroundColor: color.value }}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}