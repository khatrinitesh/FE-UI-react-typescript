import { useLocation } from "react-router-dom";
import TopNavigation from "../components/topNavigation/TopNavigation";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="bg-[var(--primarycolor)] py-[10px]">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <div className="logoBlock text-white">
            {isHome ? "Logo1" : "Logo2"}
          </div>
          <TopNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
