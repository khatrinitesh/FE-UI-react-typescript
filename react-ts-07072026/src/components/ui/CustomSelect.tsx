import { AnimatePresence, motion } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export interface SelectOption {
  label: string
  value: string
}

interface CustomSelectProps {
  label?: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  onChange: (value: string) => void
  error?: string
  disabled?: boolean
}

export default function CustomSelect({
  label,
  placeholder = "Select option",
  options,
  value,
  onChange,
  error,
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement | null>(null)

  const selectedOption = options.find((option) => option.value === value)

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={selectRef} className="relative w-full">
      {label && (
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`
          flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:ring-2 focus:ring-blue-200"
          }
          ${
            disabled
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "cursor-pointer text-slate-800 hover:border-blue-500"
          }
        `}
      >
        <span className={selectedOption ? "text-slate-900" : "text-slate-400"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && !disabled && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl"
          >
            <ul className="max-h-60 overflow-y-auto p-1">
              {options.map((option) => {
                const isSelected = option.value === value

                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      onClick={() => handleSelect(option.value)}
                      className={`
                        flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition
                        ${
                          isSelected
                            ? "bg-blue-50 font-semibold text-blue-600"
                            : "text-slate-700 hover:bg-slate-100"
                        }
                      `}
                    >
                      <span>{option.label}</span>

                      {isSelected && <Check size={16} />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}