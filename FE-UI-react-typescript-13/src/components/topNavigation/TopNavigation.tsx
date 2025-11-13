import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./data";
import "./style.css";

const TopNavigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-[15px]">
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavigation;
