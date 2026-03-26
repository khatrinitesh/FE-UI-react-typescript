import { NavLink } from "react-router";
import { NAV_ITEMS } from "../../constants/constants";

const HeaderSection = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default HeaderSection;
