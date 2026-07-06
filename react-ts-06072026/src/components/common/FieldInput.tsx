import type { FieldInputProps } from "../../interface/FieldInput.interface";


const FieldInput = ({
  label,
  error,
  leftIcon,
  rightIcon,
  className = "",
  style,
  ...props
}: FieldInputProps) => {
  return (
    <div className={className} style={style}>
      {label && (
        <label className="mb-2 block font-medium">
          {label}
        </label>
      )}

      <div
        className={`
          flex
          items-center
          rounded-lg
          border
          px-3
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus-within:border-indigo-600"
          }
        `}
      >
        {leftIcon}

        <input
          {...props}
          className="w-full bg-transparent px-3 py-3 outline-none"
        />

        {rightIcon}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default FieldInput;