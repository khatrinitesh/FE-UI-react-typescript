import clsx from "clsx";
import type { ButtonProps } from "../../../interface";

const Button = ({
  children,
  iconLeft,
  iconRight,
  className,
  fullWidth = true,
  disabled,
  type = "button",
  ...rest
}: ButtonProps) => {
  const baseClasses = `
    cursor-pointer inline-flex items-center justify-center
    gap-2
    rounded-[12px]
    border border-[#6e4a8e]
    bg-[#f8f5fc]
    text-[#6e4a8e]
    text-[0.813rem] 
    px-4 py-2
    active:bg-[#e6dbff]
    disabled:opacity-60 disabled:cursor-not-allowed
    transition-colors duration-150
  `;
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(baseClasses, fullWidth && "w-full", className)}
      {...rest}
    >
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span className="truncate">{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
};

export default Button;
