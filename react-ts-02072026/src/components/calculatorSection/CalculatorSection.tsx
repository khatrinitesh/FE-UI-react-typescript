import { motion } from "framer-motion"
import { Delete } from "lucide-react"
import { useState } from "react"

const buttons = [
  "C",
  "⌫",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
]

export default function CalculatorSection() {
  const [value, setValue] = useState("")

  const handleClick = (item: string) => {
    if (item === "C") {
      setValue("")
      return
    }

    if (item === "⌫") {
      setValue((prev) => prev.slice(0, -1))
      return
    }

    if (item === "=") {
      try {
        const result = Function(`"use strict"; return (${value})`)()

        setValue(String(result))
      } catch {
        setValue("Error")
      }

      return
    }

    setValue((prev) => prev + item)
  }

  const getButtonStyle = (item: string) => {
    if (item === "C") {
      return "bg-red-500 text-white hover:bg-red-600"
    }

    if (item === "=") {
      return "col-span-2 bg-black text-white hover:bg-gray-800"
    }

    if (["/", "*", "-", "+", "%"].includes(item)) {
      return "bg-blue-500 text-white hover:bg-blue-600"
    }

    if (item === "⌫") {
      return "bg-gray-200 text-gray-900 hover:bg-gray-300"
    }

    return "bg-white text-gray-900 hover:bg-gray-100"
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-xl"
      >
        <div className="mb-5 rounded-2xl bg-gray-900 px-4 py-6 text-right">
          <p className="min-h-10 break-all text-3xl font-bold text-white">
            {value || "0"}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((item) => (
            <motion.button
              key={item}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.04 }}
              onClick={() => handleClick(item)}
              className={`flex h-14 items-center justify-center rounded-2xl text-lg font-bold shadow-sm transition ${getButtonStyle(
                item,
              )}`}
            >
              {item === "⌫" ? <Delete size={20} /> : item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}