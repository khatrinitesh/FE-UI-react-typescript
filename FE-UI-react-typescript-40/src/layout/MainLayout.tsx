import { Outlet } from "react-router"
import Header from "../components/Header"


const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-gray-500">
        <Outlet/>
      </main>

    </>
  )
}

export default MainLayout
