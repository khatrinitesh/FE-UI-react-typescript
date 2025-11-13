import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/constants";
const Header = () => {
  return (
    <header className="header bg-black py-[10px]">
      <div className="container">
        <div className="innerHeader flex items-center justify-between">
          {/* Logo */}
          <div className="logoBlock text-white font-bold text-lg">
            LogoBlock
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-white hover:text-yellow-400 transition ${
                        isActive ? "text-yellow-400 font-semibold" : ""
                      }`
                    }
                    end
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
