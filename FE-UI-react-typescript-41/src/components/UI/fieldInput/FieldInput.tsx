import type { InputFieldProps } from "../../../interface";

const FieldInput = ({
  leftIcon,
  rightIcon,
  isLeftIcon = false,
  isRightIcon = false,
  isError = false,
  isSuccess = false,
  disabled,
  className = "",
  style,
  ...props
}: InputFieldProps) => {
  // 🎨 variant styles
  const variantStyle = isError
    ? "border-red-500 focus:ring-red-500"
    : isSuccess
      ? "border-green-500 focus:ring-green-500"
      : "border-gray-300 focus:ring-black";
  return (
    <>
      {/* wrapper only for positioning icons (no extra UI structure) */}
      <span className="relative inline-block w-full">
        {isLeftIcon && leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {leftIcon}
          </span>
        )}

        <input
          {...props}
          disabled={disabled}
          style={style}
          className={`
            w-full p-3 rounded border outline-none
            ${variantStyle}
            ${isLeftIcon ? "pl-10" : ""}
            ${isRightIcon ? "pr-10" : ""}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
            ${className}
          `}
        />

        {isRightIcon && rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {rightIcon}
          </span>
        )}
      </span>
    </>
  );
};

export default FieldInput;
