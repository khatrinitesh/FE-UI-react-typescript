import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/constants";
import { PATHS } from "../../routes/Path";

const HeaderSection = () => {
  return (
    <header className="header py-[20px] bg-black">
      <div className="container mx-auto text-white flex gap-6">
        <div className="flex justify-between items-center w-full">
          <div className="topNav flex items-center gap-[10px]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "underline font-bold text-color2"
                    : "hover:underline"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="adminBlock">
            <NavLink
              to={PATHS.ADMIN_LOGIN}
              className="bg-color1 px-4 py-2 rounded text-white text-sm hover:bg-white hover:text-color1 transition"
            >
              Admin Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
