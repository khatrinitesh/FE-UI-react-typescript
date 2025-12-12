import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../pages/Login";
import OTP from "../pages/OTP";
import Register from "../pages/Register";
import Landing from "../pages/Landing";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/otp", element: <OTP /> },
  { path: "/register", element: <Register /> },
  { path: "/", element: <Landing /> },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
