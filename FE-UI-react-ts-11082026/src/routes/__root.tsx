import { createRootRoute, Outlet } from "@tanstack/react-router";

import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import NotFound from "../pages/NotFound/NotFound";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorPage,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}
