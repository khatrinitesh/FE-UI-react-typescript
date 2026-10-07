import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  {
    variants: {
      status: {
        success: 'bg-green-100 text-green-700',
        warning: 'bg-yellow-100 text-yellow-700',
        error: 'bg-red-100 text-red-700',
        neutral: 'bg-muted text-muted-foreground',
      },
    },

    defaultVariants: {
      status: 'neutral',
    },
  },
)

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>

export function Badge({
  status,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={badgeVariants({
        status,
        className,
      })}
      {...props}
    />
  )
}