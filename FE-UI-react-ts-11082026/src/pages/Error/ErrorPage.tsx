import { useRouter } from "@tanstack/react-router";

interface ErrorPageProps {
  error?: Error;
  reset?: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const router = useRouter();

  const handleRetry = () => {
    if (reset) {
      reset();
      return;
    }

    router.invalidate();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-8xl font-bold tracking-tight text-red-500">500</p>

        <h1 className="mt-6 text-2xl font-semibold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          We encountered an unexpected error. Please try again or return to the
          home page.
        </p>

        {import.meta.env.DEV && error?.message && (
          <div className="mt-6 rounded-lg bg-gray-100 p-4 text-left">
            <p className="wrap-break-word text-xs text-gray-600">
              {error.message}
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleRetry}
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-lg
              bg-black
              px-6
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-gray-800
              focus:outline-none
              focus:ring-2
              focus:ring-black
              focus:ring-offset-2
            "
          >
            Try Again
          </button>

          <button
            type="button"
            onClick={() => router.navigate({ to: "/" })}
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-lg
              border
              border-gray-300
              bg-white
              px-6
              py-2.5
              text-sm
              font-medium
              text-gray-900
              transition
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-black
              focus:ring-offset-2
            "
          >
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
