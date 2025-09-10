import { NavLink } from "react-router-dom";
import { topNavigationData } from "./topNavigationData";

const TopNavigationSection = () => {
  return (
    <nav>
      <ul className="flex gap-[10px]">
        {topNavigationData.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav.path}
              className={({ isActive }) =>
                `nav-link text-white font-bold text-xi-description ${
                  isActive ? "!text-red-500" : ""
                }`
              }
            >
              {nav.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavigationSection;
