import type { InputHTMLAttributes, ReactNode } from "react";
import "./style.css";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  isLoading?: boolean;
  children?: ReactNode;
}

const FieldInput = ({
  maxLength,
  disabled = false,
  readOnly = false,
  className = "",
  placeholder,
  iconBefore,
  iconAfter,
  isLoading = false,
  children,
  ...rest
}: InputFieldProps) => {
  return (
    <div
      className={`input-wrapper ${
        disabled ? "input-disabled" : ""
      } ${className}`}
    >
      {iconBefore && <span className="icon-before">{iconBefore}</span>}

      <input
        maxLength={maxLength}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        className="input-field"
        {...rest}
      />

      {isLoading ? (
        <span className="loading-spinner" />
      ) : (
        iconAfter && <span className="icon-after">{iconAfter}</span>
      )}

      {children && <div className="input-children">{children}</div>}
    </div>
  );
};

export default FieldInput;
