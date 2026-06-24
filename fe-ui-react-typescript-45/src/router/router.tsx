import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import Layout from "../components/Layout";
import { PATHS } from "../constants/constants";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATHS.HOME,
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATHS.ABOUT,
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: PATHS.CONTACT,
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, contactRoute]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
