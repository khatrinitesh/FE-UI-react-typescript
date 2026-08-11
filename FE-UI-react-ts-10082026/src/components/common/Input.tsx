import type {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className = "",
  style,
  icon,
  iconPosition = "left",
  onChange,
  maxLength,
  ...props
}: InputProps) => {
  return (
    <span className="relative block">
      {icon && iconPosition === "left" && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      )}

      <input
        {...props}
        maxLength={maxLength}
        onChange={onChange}
        className={`w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black ${
          icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
        } ${className}`}
        style={style}
      />

      {icon && iconPosition === "right" && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          {icon}
        </span>
      )}
    </span>
  );
};

export default Input;
