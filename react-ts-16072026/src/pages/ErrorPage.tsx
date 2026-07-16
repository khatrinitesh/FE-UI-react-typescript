import { Link } from '@tanstack/react-router';
import { Button } from '../components/Button';

export function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center p-6">
      <div className="max-w-lg text-center">
        <p className="text-red-600">Application error</p>
        <h1 className="mt-2 text-4xl font-black">Something went wrong.</h1>
        <p className="mt-4 text-slate-600">{error.message}</p>

        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
