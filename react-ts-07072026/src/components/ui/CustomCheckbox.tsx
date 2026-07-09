import { motion } from "framer-motion"
import { FaCheck } from "react-icons/fa6"

type CustomCheckboxProps = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
}

export default function CustomCheckbox({
  label,
  checked,
  onChange,
  disabled = false,
}: CustomCheckboxProps) {
  return (
    <label
      className={`flex w-fit items-center gap-3 select-none ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      <motion.span
        animate={{
          scale: checked ? 1.05 : 1,
        }}
        whileTap={!disabled ? { scale: 0.9 } : undefined}
        className={`flex size-6 items-center justify-center rounded-md border transition-all duration-300 ${
          checked
            ? "border-red-500 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.45)]"
            : "border-slate-300 bg-white"
        }`}
      >
        {checked && (
          <motion.span
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 45, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <FaCheck className="text-xs text-white" />
          </motion.span>
        )}
      </motion.span>

      <span
        className={`text-sm font-medium ${
          checked ? "text-slate-950" : "text-slate-600"
        }`}
      >
        {label}
      </span>
    </label>
  )
}