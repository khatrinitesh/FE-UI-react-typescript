import type { InputHTMLAttributes } from "react";

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function FieldInput({ label, id, ...props }: FieldInputProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <input className="field-input" id={id} {...props} />
    </label>
  );
}

export default FieldInput;
