
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { InputProps } from '../../../interface';

const FieldInput = ({
  value,
  onChange,
  placeholder,
  maxLength,
  disabled,
  className,
  name,
  style,
}: InputProps) => {
  return (
    <>
       <motion.input
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      name={name}
      style={style}
      className={clsx(
        'w-full px-4 py-2 border rounded-xl outline-none transition-all duration-300',
        'focus:ring-2 focus:ring-blue-400',
        disabled && 'bg-gray-100 cursor-not-allowed',
        className
      )}
    />
    </>
  )
}

export default FieldInput
