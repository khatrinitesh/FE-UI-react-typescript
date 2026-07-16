import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { MainLayout } from "../layouts/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
const rootRoute = createRootRoute({
  errorComponent: ({ error, reset }) => (
    <ErrorPage error={error} reset={reset} />
  ),
  notFoundComponent: NotFoundPage,
});
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main-layout",
  component: MainLayout,
});
const indexRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: AboutPage,
});
const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: ContactPage,
});
const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([indexRoute, aboutRoute, contactRoute]),
]);
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
