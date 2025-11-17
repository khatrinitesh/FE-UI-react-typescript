import type { FieldDropdownProps } from "../../../interface";

const FieldDropdown = ({
  name,
  value,
  options,
  placeholder = "Select...",
  onChange,
  className = "",
  ...rest
}: FieldDropdownProps) => {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`
         w-full
        rounded-full
        border border-[#d4cbea]
        bg-[#f3f3f5]
        h-9
        px-5
        flex items-center
        gap-2
        transition-all duration-200
        focus-within:border-[#6c4b97]
        focus-within:shadow-[0_0_0_3px_rgba(181,164,199,0.9)] outline-none
          appearance-none
          ${className}
        `}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
            {opt.icon ? ` ${opt.icon}` : ""}
          </option>
        ))}
      </select>

      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#B7A6D6]">
        ▼
      </span>
    </div>
  );
};

export default FieldDropdown;
