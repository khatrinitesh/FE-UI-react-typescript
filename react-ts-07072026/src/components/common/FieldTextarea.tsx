
import type { TextareaHTMLAttributes } from 'react'
import { classNames } from '../../utils/classNames'

interface FieldTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function FieldTextarea({ label, error, id, className, ...props }: FieldTextareaProps) {
  const textareaId = id || props.name

  return (
    <label className="block space-y-2" htmlFor={textareaId}>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
      <textarea
        id={textareaId}
        className={classNames(
          'min-h-32 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-200',
          error && 'border-red-500 focus:border-red-600 focus:ring-red-100',
          className,
        )}
        {...props}
      />
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  )
}
