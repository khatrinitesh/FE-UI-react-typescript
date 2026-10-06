import { Outlet } from "react-router"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"



export default function MainLayout() {
  return (
    <div className="appLayout flex min-h-screen flex-col">
      <Header />

      <div className="mainContent flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}