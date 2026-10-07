import clsx from 'clsx'

export function Button({
  active,
  disabled,
}: {
  active: boolean
  disabled: boolean
}) {
  return (
    <button
      className={clsx(
        'rounded-md px-4 py-2 font-medium',
        active && 'bg-primary text-primary-foreground',
        !active && 'bg-muted text-muted-foreground',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      Click me
    </button>
  )
}