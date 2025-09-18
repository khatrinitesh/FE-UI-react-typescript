import { useLocation } from "react-router-dom";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import "./style.css";

const HeaderSection = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const logoSrc = `${import.meta.env.VITE_ASSET_URL}/img/${
    isHome ? "logo1.png" : "logo2.png"
  }`;
  return (
    <header className="headerSection bg-black py-[10px]">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <div className="logoBlock">
            <img
              src={logoSrc}
              className="max-w-[150px] h-[50px] object-contain"
            />
          </div>
          <TopNavigation />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
