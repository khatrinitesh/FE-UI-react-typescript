import type { ChangeEvent, ReactNode, TextareaHTMLAttributes } from 'react'

type Props = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'maxLength' | 'disabled'
> & {
  label?: string
  error?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  maxLength?: number
  enabled?: boolean
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export function FieldTextarea({
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
            className={`pointer-events-none absolute top-4 text-slate-400 ${iconPosition === 'left' ? 'left-3' : 'right-3'}`}
          >
            {icon}
          </span>
        )}
        <textarea
          {...props}
          maxLength={maxLength}
          disabled={!enabled}
          className={`min-h-32 w-full resize-y rounded-xl border bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 disabled:bg-slate-100 ${icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : ''} ${error ? 'border-red-500' : 'border-slate-300'} ${className}`}
        />
      </span>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}
