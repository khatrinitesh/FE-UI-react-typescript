import type { InputHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'


interface FieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function FieldInput({ label, error, id, className, ...props }: FieldInputProps) {
  const inputId = id || props.name

  return (
    <label className="block space-y-2" htmlFor={inputId}>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
      <input
        id={inputId}
        className={classNames(
          'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200',
          error && 'border-red-500 focus:border-red-600 focus:ring-red-100',
          className,
        )}
        {...props}
      />
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  )
}
