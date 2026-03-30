

import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ButtonProps } from '../../../interface';

const Button = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  className,
  style,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  return (
    <>
       <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={clsx(
        'cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300',
        {
          'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
          'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
          'border border-gray-400 text-gray-700 hover:bg-gray-100': variant === 'outline',
          'opacity-50 cursor-not-allowed': disabled,
        },
        className
      )}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </motion.button>
    </>
  )
}

export default Button
