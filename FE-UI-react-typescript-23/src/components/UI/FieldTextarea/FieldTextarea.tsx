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
          placeholder:text-muted-foreground congenial-medium focus-within:border-[#6c4b97]
        focus-within:shadow-[0_0_0_3px_rgba(181,164,199,0.9)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full border bg-[#f3f2f4] px-3 py-2  transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 text-sm rounded-[16px] border-[#6E4A8E]/30 focus:border-[#6E4A8E] focus:ring-[#6E4A8E] min-h-[100px] resize-none
        "
      />
    </div>
  );
};

export default FieldTextarea;
