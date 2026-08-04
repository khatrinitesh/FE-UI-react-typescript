import type { FieldsetHTMLAttributes, ReactNode } from "react";

interface FormFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  description?: string;
  children: ReactNode;
}

export default function FormFieldset({
  legend,
  description,
  children,
  className = "",
  ...props
}: FormFieldsetProps) {
  return (
    <fieldset
      className={`
        rounded-2xl border border-slate-300 bg-white p-5
        disabled:cursor-not-allowed disabled:opacity-50
        sm:p-6
        ${className}
      `}
      {...props}
    >
      <legend className="px-3 text-lg font-semibold text-slate-900">
        {legend}
      </legend>

      {description && (
        <p className="mb-5 text-sm leading-6 text-[#525659]">{description}</p>
      )}

      {children}
    </fieldset>
  );
}
