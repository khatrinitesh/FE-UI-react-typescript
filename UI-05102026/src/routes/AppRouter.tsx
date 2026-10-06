import { Suspense } from "react"
import { Route, Routes } from "react-router"
import PageLoader from "../components/common/PageLoader"
import MainLayout from "../layouts/MainLayout"
import AboutPage from "../pages/AboutPage"
import CollegePage from "../pages/CollegePage"
import ContactPage from "../pages/ContactPage"
import ErrorPage from "../pages/ErrorPage"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"



export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Pages WITH header/footer */}
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="about" element={<AboutPage />} />

          <Route path="contact" element={<ContactPage />} />

            <Route
                path="college"
                element={<CollegePage />}
            />

            <Route
                path="college/:collegeId"
                element={<CollegePage />}
            />
        </Route>

        {/* Pages WITHOUT header/footer */}
        <Route path="/error" element={<ErrorPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}