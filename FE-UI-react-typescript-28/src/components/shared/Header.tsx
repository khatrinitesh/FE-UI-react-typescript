import { Link, NavLink } from "react-router";
import { PATHS } from "../../routes/path";
import { navLinks } from "../../constants/constants";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="innerHeader flex justify-between items-center w-full">
          {/* Logo */}
          <Link to={PATHS.HOME} className="text-xl font-bold">
            MyStore
          </Link>

          {/* Navigation with map */}
          <nav className="space-x-6 ">
            {navLinks.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-yellow-300 font-semibold " : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
