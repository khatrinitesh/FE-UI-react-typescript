import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">My App</h1>

      <nav className="flex gap-6">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`transition-colors duration-200 hover:text-blue-400 ${
              pathname === item.path
                ? "text-blue-400 font-semibold"
                : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
