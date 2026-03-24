import type { FieldTextAreaProps } from "../../../interface";

const FieldTextArea = ({
  name,
  label,
  value,
  onChange,
  placeholder,
}: FieldTextAreaProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default FieldTextArea;
