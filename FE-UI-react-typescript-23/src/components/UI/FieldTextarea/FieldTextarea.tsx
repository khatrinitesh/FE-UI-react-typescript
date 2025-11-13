import type { FieldTextareaProps } from "../../../interface";

const FieldTextarea = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  maxLength,
  disabled = false,
  className = "",
}: FieldTextareaProps) => {
  return (
    <div
      className={`
        w-full
        rounded-[16px] bg-[#f3f2f4]
        border border-[#c8b7e8] 
        px-3 py-2
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-text"}
        ${className}
      `}
    >
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        className="
          w-full
          bg-transparent
          resize-none
          text-sm sm:text-base
          text-black
           placeholder:text-[#6e6e7e]
          leading-relaxed
          focus:outline-none
          border-none
        "
      />
    </div>
  );
};

export default FieldTextarea;
