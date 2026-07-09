import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Toaster } from "sonner"
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage"
import NotFoundPage from "../pages/NotFoundPage"

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster richColors position="top-right" />
    </>
  ),

  notFoundComponent: () => <NotFoundPage />,

  errorComponent: ({ error, reset }) => (
    <ErrorBoundaryPage error={error} reset={reset} />
  ),
})