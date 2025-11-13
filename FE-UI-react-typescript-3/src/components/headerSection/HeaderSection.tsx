import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/constants";

const HeaderSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <header className="header bg-[#183f41] text-white py-[10px]">
      <div className="container mx-auto">
        <div className="innerHeader flex items-center justify-between">
          <div className="logoBlock">
            <h2 className="poppins-regular">
              <img
                className="max-w-[120px] bg-black block mx-auto w-full"
                src={`${
                  isHomePage
                    ? `${import.meta.env.VITE_ASSET_URL}/img/logo1.png`
                    : `${import.meta.env.VITE_ASSET_URL}/img/logo2.jpeg`
                }`}
                alt=""
              />
            </h2>
          </div>
          <div className="topNav">
            <ul className="flex list-none gap-[20px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    className="text-[#fff] hover:text-yellow-400 transition block no-underline poppins-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
