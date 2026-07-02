import { motion } from "framer-motion"
import { useState } from "react"

type ButtonOption = {
  label: string
  value: string
}

const buttonOptions: ButtonOption[] = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
]

export default function ButtonGrp() {
  const [selected, setSelected] = useState("daily")

  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-sm">
      {buttonOptions.map((option) => {
        const isActive = selected === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setSelected(option.value)}
            className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200"
          >
            {isActive && (
              <motion.span
                layoutId="active-button"
                className="absolute inset-0 rounded-full bg-black"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-gray-600"
              }`}
            >
              {option.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}