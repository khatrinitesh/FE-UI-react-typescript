import { Link } from '@tanstack/react-router'
import { Button } from '../components/Button'

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center p-6">
      <div className="text-center">
        <p className="text-7xl font-black text-indigo-600">404</p>

        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>

        <p className="mt-3 text-slate-600">
          The requested page does not exist.
        </p>

        <Link to="/" className="mt-7 inline-block">
          <Button>Return home</Button>
        </Link>
      </div>
    </main>
  )
}