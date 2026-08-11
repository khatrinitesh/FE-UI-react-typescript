import { createRootRoute, Outlet } from "@tanstack/react-router";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";

export const Route = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => <ErrorPage error={error} />,
});
