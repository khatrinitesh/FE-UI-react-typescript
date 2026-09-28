import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App, { AboutPage, HomePage, ServicesPage } from "../App";

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
]);

export const router = createRouter({
  routeTree,
});
