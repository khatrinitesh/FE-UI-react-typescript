import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router"
import MainLayout from "../components/layout/MainLayout"
import About from "../pages/About"
import Home from "../pages/Home"
import { PATHS } from "./paths"


const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: MainLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: PATHS.HOME,
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: PATHS.ABOUT,
  component: About,
})

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([homeRoute, aboutRoute]),
])

export const router = createRouter({
  routeTree,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}