import { motion } from "framer-motion";
import type { ButtonProps } from "../../interface";
import { Loader2 } from "lucide-react";

const Button = ({
  children,
  onClick,
  disabled,
  isLoading,
  icon,
  iconPosition = "left",
  className = "",
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`cursor-pointer px-4 py-2 rounded-xl bg-blue-600 text-white flex items-center gap-2 justify-center ${className}`}
    >
      {isLoading && <Loader2 className="animate-spin" size={18} />}
      {!isLoading && icon && iconPosition === "left" && icon}
      {children}
      {!isLoading && icon && iconPosition === "right" && icon}
    </motion.button>
  );
};

export default Button;
