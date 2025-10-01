import type { SelectFieldProps } from "../../interface";

const FieldSelectDropdown = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  required,
  className = "",
}: SelectFieldProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FieldSelectDropdown;
