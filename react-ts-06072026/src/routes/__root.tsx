import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import Home from ".";
import About from "./about";
import Contact from "./contact";



const rootRoute = createRootRoute();

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: MainLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    aboutRoute,
    contactRoute,
  ]),
]);

export const router = createRouter({
  routeTree,
});