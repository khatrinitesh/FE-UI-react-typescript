import type { FieldInputProps } from "../../../interface"


const FieldInput = ({label,
  iconLeft,
  iconRight,
  className = "",
  style,
  maxLength,
  disabled,
  ...props}:FieldInputProps) => {
  return (
      <div className="w-full space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className={`flex items-center border rounded-lg px-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 ${disabled ? "opacity-50" : ""}`}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}

        <input
          {...props}
          maxLength={maxLength}
          disabled={disabled}
          style={style}
          className={`w-full p-2 outline-none bg-transparent ${className}`}
        />

        {iconRight && <span className="ml-2">{iconRight}</span>}
      </div>
    </div>
  )
}

export default FieldInput
