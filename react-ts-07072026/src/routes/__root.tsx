
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { MainLayout } from '../components/layout/MainLayout'
import { ErrorBoundaryPage } from '../components/pages/ErrorBoundaryPage'
import { NotFoundPage } from '../components/pages/NotFoundPage'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorBoundaryPage,
})

function RootComponent() {
  return (
    <MainLayout>
      <Outlet />
      {import.meta.env.DEV ? <TanStackRouterDevtools position="bottom-right" /> : null}
    </MainLayout>
  )
}
