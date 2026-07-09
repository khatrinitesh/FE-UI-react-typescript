interface LoaderProps {
  label?: string
}

export function Loader({ label = 'Loading...' }: LoaderProps) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center gap-3 text-slate-600">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  )
}
