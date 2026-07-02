import type { QueryClient } from "@tanstack/react-query"
import {
  createRootRouteWithContext,
  Outlet
} from "@tanstack/react-router"
import { Toaster } from "sonner"
import MainLayout from "../layouts/MainLayout"

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="appLayout min-h-screen bg-gray-100 text-gray-900">
      <MainLayout>
        <Outlet />
      </MainLayout>

      <Toaster richColors position="top-right" />
    </div>
  )
}