// interface
import { FaSpinner } from "react-icons/fa";
import type { ButtonProps } from "../../interface";
// library

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "darkblue",
  disabled = false,
  type,
  className = "",
  icon,
  isLoading,
}) => {
  const baseStyles =
    "cursor-pointer z-[9] btnPrimary relative text-[1rem] px-[1rem] border-0  lg:px-[1.5vw] whitespace-nowrap poppins-regular transition-colors duration-300 border h-[6vh] 2xl:h-[5vh]";

  const variantStyles =
    variant === "yellow"
      ? "bg-[#ffd51a] text-black"
      : variant === "outline"
      ? "bg-white text-[#09213b] border-0 border-transparent hover:text-white hover:bg-[#09213b]"
      : variant === "whiteBorder"
      ? "text-whit e border-[1px] border-white bg-[#09213b]"
      : variant === "white"
      ? "bg-white text-black"
      : variant === "whiteBlueBorder"
      ? "bg-white !border-[1px] !border-[#09213b] text-[#09213b]"
      : "bg-[#09213b] text-white";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className} items-center justify-center flex gap-[10px] disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {/* Spinner overlay */}
      {isLoading && (
        <FaSpinner
          className={`animate-spin w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            variant === "whiteBlueBorder" ? "text-[#09213b]" : "text-white"
          } `}
        />
      )}

      {/* Label and icon are always present, just hidden when loading */}
      <span
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } flex items-center gap-2 transition-opacity duration-150`}
      >
        {icon && <img src={`/img/${icon}`} alt="icon" />}
        {label}
      </span>
    </button>
  );
};

export default Button;
