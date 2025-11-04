import React from "react";
import type { FieldInputProps } from "../../../interface";

const FieldInput: React.FC<FieldInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  textarea = false,
  rows = 3,
}) => {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FieldInput;
