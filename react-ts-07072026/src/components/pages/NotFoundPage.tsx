import { Link } from '@tanstack/react-router'
import { Button } from '../common/Button'

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">404</p>
      <h1 className="mt-4 text-4xl font-black text-slate-950 dark:text-white">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="mt-6 inline-flex">
        <Button type="button">Back to home</Button>
      </Link>
    </section>
  )
}
