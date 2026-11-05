import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router";
import { MainLayout } from "./components/layout/MainLayout";
import { LoginPage, OtpPage, RegisterPage } from "./pages/Auth";
import { ContactPage } from "./pages/Contact";
import { ErrorPage, NotFoundPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { ProductDetailPage, ProductListPage } from "./pages/Products";


const rootRoute = createRootRoute({
  component: Outlet,
  notFoundComponent: NotFoundPage,
  errorComponent: ({ error }) => (
    <ErrorPage
      error={error instanceof Error ? error : new Error(String(error))}
    />
  ),
});

const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main",
  component: MainLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/",
  component: HomePage,
});

const productsRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/products",
  component: ProductListPage,
});

const productRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/products/$productId",
  component: () => {
    const { productId } = productRoute.useParams();

    return (
      <ProductDetailPage productId={productId} />
    );
  },
});

const contactRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/contact",
  component: ContactPage,
});

const loginRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/login",
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/register",
  component: RegisterPage,
});

const otpRoute = createRoute({
  getParentRoute: () => mainRoute,
  path: "/otp",
  component: OtpPage,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    mainRoute.addChildren([
      homeRoute,
      productsRoute,
      productRoute,
      contactRoute,
      loginRoute,
      registerRoute,
      otpRoute,
    ]),
  ]),
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}