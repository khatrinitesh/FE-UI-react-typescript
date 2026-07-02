import { motion } from 'framer-motion';
import { useState } from "react";

const buttonOptions = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
]

export default function ButtonGrpSection() {
      const [selected, setSelected] = useState("pending")
  return (
     <div className="inline-flex rounded-xl bg-red-50 p-1">
      {buttonOptions.map((option) => {
        const isActive = selected === option.value

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setSelected(option.value)}
            className="relative min-w-28 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-lg bg-[rgba(234,17,26,1)]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 32,
                }}
              />
            )}

            <span
              className={`relative z-10 ${
                isActive ? "text-white" : "text-red-600"
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
