import { motion } from "framer-motion";
import type { ButtonProps } from "../../interface";

const ButtonComponent: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "darkblue",
  disabled = false,
  type,
  className = "",
  icon,
}) => {
  const baseStyles =
    "cursor-pointer z-[9] btnPrimary relative text-[1.125rem] px-[7vw] border-0  lg:px-[1.5vw] whitespace-nowrap fontpoppinsl transition-colors duration-300 border h-[50px] leading-[50px]";

  const variantStyles =
    variant === "yellow"
      ? "bg-[#ffd51a] text-black"
      : variant === "outline"
      ? "bg-white text-[#09213b] border-0 border-transparent hover:text-white hover:bg-[#09213b]"
      : variant === "whiteBorder"
      ? "text-white border-[1px] border-white bg-[#09213b]"
      : variant === "white"
      ? "bg-white text-black"
      : "bg-[#09213b] text-white";

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles} ${className} items-center justify-center  flex  gap-[10px]  disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      // whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon && (
        <span className="icon">
          <img src={`/img/${icon}`} alt="" />
        </span>
      )}
      {label}
    </motion.button>
  );
};

export default ButtonComponent;
