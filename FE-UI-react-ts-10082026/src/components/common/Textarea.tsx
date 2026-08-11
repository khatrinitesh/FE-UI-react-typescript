import type {
  ChangeEvent,
  CSSProperties,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

interface TextareaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange"
> {
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  className = "",
  style,
  icon,
  iconPosition = "left",
  onChange,
  maxLength,
  ...props
}: TextareaProps) => {
  return (
    <span className="relative block">
      {icon && iconPosition === "left" && (
        <span className="pointer-events-none absolute left-3 top-3">
          {icon}
        </span>
      )}

      <textarea
        {...props}
        maxLength={maxLength}
        onChange={onChange}
        className={`min-h-[140px] w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black ${
          icon ? (iconPosition === "left" ? "pl-10" : "pr-10") : ""
        } ${className}`}
        style={style}
      />

      {icon && iconPosition === "right" && (
        <span className="pointer-events-none absolute right-3 top-3">
          {icon}
        </span>
      )}
    </span>
  );
};

export default Textarea;
