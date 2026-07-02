import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import ReactDOM from "react-dom/client"

import "./index.css"
import { routeTree } from "./routeTree.gen"

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultNotFoundComponent: NotFoundPage,
  defaultErrorComponent: ErrorBoundaryPage,
})

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="cursor-pointer mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

function ErrorBoundaryPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 px-6">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-5xl font-bold text-red-600">Error</h1>
        <h2 className="mt-4 text-2xl font-bold">Something went wrong</h2>
        <p className="mt-3 text-gray-600">
          Please refresh the page or try again later.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-red-600 px-5 py-2.5 font-medium text-white hover:bg-red-700"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </>,
)