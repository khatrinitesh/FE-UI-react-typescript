import type { FieldTextareaProps } from "../../../interface"


const FieldTextArea = ({ label,
  className = "",
  style,
  maxLength,
  disabled,
  ...props}:FieldTextareaProps) => {
  return (
    <div>
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        {...props}
        maxLength={maxLength}
        disabled={disabled}
        style={style}
        className={`w-full p-2 outline-none bg-transparent ${className}`}
      />
    </div>
  )
}

export default FieldTextArea
