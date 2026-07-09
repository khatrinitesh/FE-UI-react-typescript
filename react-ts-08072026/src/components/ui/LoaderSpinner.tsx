type LoaderSpinnerProps = {
  size?: number
  className?: string
}

export default function LoaderSpinner({
  size = 18,
  className = "",
}: LoaderSpinnerProps) {
  return (
    <span
      className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  )
}