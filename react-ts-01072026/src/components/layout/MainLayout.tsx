import { Outlet } from "@tanstack/react-router"
import Footer from "./Footer"
import Header from "./Header"

const MainLayout = () => {
  return (
    <div className="appLayout min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <div className="mainContent flex-1 px-4 py-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout