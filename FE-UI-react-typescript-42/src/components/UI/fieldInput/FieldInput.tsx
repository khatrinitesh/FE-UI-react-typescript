import type { InputFieldProps } from "../../../interface";

const FieldInput = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default FieldInput;
