import type { ButtonHTMLAttributes, ReactNode } from 'react'

type AlertButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

const alertButtonClasses = {
  primary: 'alert-button',
  secondary: 'alert-button-secondary',
}

function AlertButton({ children, variant = 'primary', ...props }: AlertButtonProps) {
  return <button className={alertButtonClasses[variant]} type="button" {...props}>{children}</button>
}

export default AlertButton
