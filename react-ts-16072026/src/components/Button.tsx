import type { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'disabled' | 'style'
> & {
  children: ReactNode
  loading?: boolean
  enabled?: boolean
  variant?: Variant
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  style?: CSSProperties
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const variants: Record<Variant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  secondary: 'bg-slate-900 text-white hover:bg-slate-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

export function Button({
  children,
  loading = false,
  enabled = true,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={!enabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
    >
      {loading ? (
        <span className="size-5 animate-spin rounded-full border-2 border-current border-r-transparent" />
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </button>
  )
}
