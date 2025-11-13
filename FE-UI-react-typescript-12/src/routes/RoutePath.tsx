import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PreloaderSection from "../components/preloaderSection/PreloaderSection";
import { Paths } from "./path";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../auth/AuthLayout";

// Lazy loaded pages
const Home = lazy(() => import("../pages/homePage/HomePage"));
const About = lazy(() => import("../pages/aboutPage/AboutPage"));
const Login = lazy(() => import("../auth/loginPage/LoginPage"));
const Register = lazy(() => import("../auth/registerPage/RegisterPage"));
const OTP = lazy(() => import("../auth/otpPage/OtpPage"));

const RoutePath = () => {
  return (
    <Router>
      <Suspense fallback={<PreloaderSection />}>
        <Routes>
          {/* Auth pages without header/footer */}
          <Route
            path={Paths.LOGIN}
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path={Paths.REGISTER}
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />
          <Route
            path={Paths.OTP}
            element={
              <AuthLayout>
                <OTP />
              </AuthLayout>
            }
          />

          {/* Pages with header/footer */}
          <Route
            path={Paths.HOME}
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path={Paths.ABOUT}
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />

          {/* Optional: catch all - redirect to login */}
          <Route path="*" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutePath;
