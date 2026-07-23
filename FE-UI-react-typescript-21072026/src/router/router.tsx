import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router";
import { MainLayout } from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";



const rootRoute = createRootRoute({
  component: Outlet,

  errorComponent: ({ error }) => (
    <ErrorPage error={error} />
  ),

  notFoundComponent: NotFoundPage,
});

const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main-layout",
  component: MainLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([homeRoute]),
]);

export const router = createRouter({
  routeTree,

  defaultPreload: "intent",

  defaultPreloadStaleTime: 0,

  defaultNotFoundComponent: NotFoundPage,

  defaultErrorComponent: ({ error }) => (
    <ErrorPage error={error} />
  ),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}