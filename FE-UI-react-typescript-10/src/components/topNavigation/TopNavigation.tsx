import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants/constants";

const TopNavigation = () => {
  return (
    <nav className="flex gap-[10px]">
      {navLinks.map(({ label, path }, index) => (
        <span key={label}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? "text-red-100" : "text-white"
            }
          >
            {label}
          </NavLink>
          {index !== navLinks.length - 1 && " "}
        </span>
      ))}
    </nav>
  );
};

export default TopNavigation;
