import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/constants";

const imageAssets = import.meta.env.VITE_URL_ASSETS;

const HeaderSection = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";

  return (
    <header className="header bg-black text-white py-[10px]">
      <div className="container mx-auto">
        <div className="innerHeader flex items-center justify-between">
          <div className="logoBlock">
            <Link to="/">
              <img
                className="max-w-[120px] bg-red-500 h-[40px] block mx-auto w-full"
                src={`${
                  isHomePage
                    ? `${imageAssets}/img/logo1.png`
                    : `${imageAssets}/img/logo2.jpeg`
                }`}
                alt=""
              />
            </Link>
          </div>
          <div className="topNav">
            <ul className="flex list-none gap-[20px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="relative">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-[#fff] hover:text-yellow-400 transition block no-underline poppins-semibold ${
                        isActive ? "text-yellow-400" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
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
