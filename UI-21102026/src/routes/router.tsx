import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ROUTES } from "../constants/routes";
import { LandingPage } from "./index";
import { LoginPage } from "./login";
import { OtpPage } from "./otp";
import { ProductsPage } from "./products";
import { RegisterPage } from "./register";



const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path:ROUTES.HOME,
  component: LandingPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.PRODUCTS,
  component: ProductsPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.AUTH.LOGIN,
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.AUTH.REGISTER,
  component: RegisterPage,
});

const otpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path:ROUTES.AUTH.OTP,
  component: OtpPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  productsRoute,
  loginRoute,
  registerRoute,
  otpRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}