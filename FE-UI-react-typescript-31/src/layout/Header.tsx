import { NavLink, useLocation } from "react-router";
import { NAVIGATION } from "../constants/constants";
import { getImage } from "../utils/assets";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="header py-5 bg-black text-white">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <div className="logoBlock font-bold">
            <img
              src={getImage(isHomePage ? "logoHome.jpg" : "logoOther.png")}
              alt="Logo"
              className="h-10 w-10 object-cover"
            />
          </div>

          <ul className="listTopNav flex gap-6">
            {NAVIGATION.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-bold" : "font-bold"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
