import type { TextareaHTMLAttributes } from "react";

type FieldTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

function FieldTextarea({ label, id, ...props }: FieldTextareaProps) {
  return (
    <label className="field" htmlFor={id}>
      <span className="field-label">{label}</span>
      <textarea className="field-textarea" id={id} {...props} />
    </label>
  );
}

export default FieldTextarea;
