import { createRootRoute, Outlet } from "@tanstack/react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"


export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="applayout flex flex-col min-h-screen bg-slate-50">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}