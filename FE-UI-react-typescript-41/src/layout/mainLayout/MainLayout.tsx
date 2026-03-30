import { Outlet } from "react-router"
import HeaderSection from "../headerSection/HeaderSection"
import FooterSection from "../footerSection/FooterSection"


const MainLayout = () => {
  return (
    <div className="appLayout min-h-dvh flex flex-col">
      <HeaderSection/>
      <div className="mainContent flex-1">
        <Outlet/>
      </div>
      <FooterSection/>
    </div>
  )
}

export default MainLayout
