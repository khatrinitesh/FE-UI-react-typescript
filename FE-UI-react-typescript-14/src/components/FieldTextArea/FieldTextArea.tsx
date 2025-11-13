import type { TextareaFieldProps } from "../../interface";

const FieldTextArea = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  rows = 4,
  className = "",
}: TextareaFieldProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FieldTextArea;
