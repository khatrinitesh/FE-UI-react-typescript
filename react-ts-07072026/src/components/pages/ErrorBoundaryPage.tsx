
import type { ErrorComponentProps } from '@tanstack/react-router'
import { Button } from '../common/Button'

export function ErrorBoundaryPage({ error, reset }: ErrorComponentProps) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-500">Error</p>
      <h1 className="mt-4 text-4xl font-black text-slate-950 dark:text-white">Something broke</h1>
      <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
        {error instanceof Error ? error.message : 'Unexpected application error'}
      </p>
      <Button type="button" className="mt-6" onClick={reset}>
        Try again
      </Button>
    </section>
  )
}
