import type {
  AppInputProps,
  InputVariant,
  TextAlign,
} from "../interfaces/common.interface";

export default function FieldInput({
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  maxLength,
  disabled = false,
  variant = "color1",
  icon,
  iconPosition = "left",
  align = "left",
  textarea = false,
  rows = 4,
}: AppInputProps) {
  const variantClasses: Record<InputVariant, string> = {
    color1:
      "border-gray-300 focus:border-black focus:ring-black bg-white text-black",
    color2:
      "border-blue-300 focus:border-blue-600 focus:ring-blue-600 bg-blue-50 text-blue-900",
  };

  const alignClasses: Record<TextAlign, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const inputPadding =
    icon && iconPosition === "left"
      ? "pl-11 pr-4"
      : icon && iconPosition === "right"
        ? "pl-4 pr-11"
        : "px-4";

  const commonClassName = `
    w-full border rounded-lg py-3 outline-none
    focus:ring-2 transition-all
    disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400
    ${variantClasses[variant]}
    ${alignClasses[align]}
    ${inputPadding}
  `;

  return (
    <div className="relative">
      {icon && (
        <span
          className={`
            absolute top-1/2 -translate-y-1/2 text-gray-500
            ${iconPosition === "left" ? "left-4" : "right-4"}
          `}
        >
          {icon}
        </span>
      )}

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          rows={rows}
          className={commonClassName}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={commonClassName}
        />
      )}

      {maxLength && (
        <p className="text-xs text-gray-400 text-right mt-1">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
}
