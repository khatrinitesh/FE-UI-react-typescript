import { Link, useLocation } from "react-router-dom";
import { navItems } from "./data";

const TopNav = () => {
  const location = useLocation();
  return (
    <nav className="relative items-center flex">
      <ul className="flex space-x-6 items-center">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-white hover:text-blue-600 ${
                location.pathname === item.path ? "font-semibold underline" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-red-600 cursor-pointer text-white p-[10px]"
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
