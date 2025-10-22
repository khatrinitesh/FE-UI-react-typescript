import { NavLink, useLocation } from "react-router-dom";
import { NAVDATA } from "./navData";

const HeaderSection = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="header bg-[#205f15] py-[10px]">
      <div className="container">
        <div className="innerHeader flex items-center justify-between">
          <div className="logoBlock">
            <h2 className="text-white font-bold text-[20px]">
              {isHome ? "Logo1" : "Logo2"}
            </h2>
          </div>
          <nav className="nav flex items-center gap-[10px] text-center ">
            {NAVDATA.map(({ title, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-white px-3 py-1 rounded-[5px] transition-a text-center nav-link ${
                    isActive ? "active bg-red-400" : ""
                  }`
                }
              >
                <Icon className="nav-ico mx-auto" />
                {title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
