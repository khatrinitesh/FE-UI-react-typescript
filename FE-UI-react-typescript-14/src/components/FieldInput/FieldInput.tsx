import type { InputFieldProps } from "../../interface";

const FieldInput = ({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
  className = "",
}: InputFieldProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FieldInput;
