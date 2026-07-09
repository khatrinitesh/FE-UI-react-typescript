import { motion } from "framer-motion"

interface RadioOption {
  label: string
  value: string
  description?: string
}

interface CustomRadioProps {
  name: string
  options: RadioOption[]
  selectedValue: string
  onChange: (value: string) => void
}

export default function CustomRadio({
  name,
  options,
  selectedValue,
  onChange,
}: CustomRadioProps) {
  return (
    <div className="grid gap-4">
      {options.map((option) => {
        const isSelected = selectedValue === option.value

        return (
          <label
            key={option.value}
            className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-300 ${
              isSelected
                ? "border-red-500 bg-red-50 shadow-md"
                : "border-slate-200 bg-white hover:border-red-300"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />

            <span
              className={`flex size-6 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                isSelected
                  ? "border-red-500 bg-red-500"
                  : "border-slate-300 bg-white"
              }`}
            >
              {isSelected && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="size-2.5 rounded-full bg-white"
                />
              )}
            </span>

            <span>
              <span
                className={`block font-semibold ${
                  isSelected ? "text-red-600" : "text-slate-900"
                }`}
              >
                {option.label}
              </span>

              {option.description && (
                <span className="mt-1 block text-sm text-slate-500">
                  {option.description}
                </span>
              )}
            </span>

            {isSelected && (
              <motion.span
                layoutId="radioGlow"
                className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-red-400"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </label>
        )
      })}
    </div>
  )
}