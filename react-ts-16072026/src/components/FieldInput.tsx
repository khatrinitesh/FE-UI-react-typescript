import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'

type Props = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'maxLength' | 'disabled'
> & {
  label?: string
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  maxLength?: number
  enabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function FieldInput({
  label,
  error,
  icon,
  iconPosition = 'left',
  maxLength,
  enabled = true,
  className = '',
  ...props
}: Props) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label && <span>{label}</span>}
      <span className="relative block">
        {icon && (
          <span
            className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-slate-400 ${iconPosition === 'left' ? 'left-3' : 'right-3'}`}
          >
            {icon}
          </span>
        )}
        <input
          {...props}
          maxLength={maxLength}
          disabled={!enabled}
          className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 ${icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : ''} ${error ? 'border-red-500' : 'border-slate-300'} ${className}`}
        />
      </span>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}
