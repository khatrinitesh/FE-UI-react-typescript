import type { ButtonProps } from "../../../interface"
import { motion } from "framer-motion";

const Button = ({
  children,
  iconLeft,
  iconRight,
  className = "",
  style,
  disabled,
  ...props
}:ButtonProps) => {
  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      disabled={disabled}
      style={style}
      className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      {...props}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </motion.button>
  )
}

export default Button
