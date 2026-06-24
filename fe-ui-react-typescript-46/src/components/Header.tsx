import { Link, NavLink } from "react-router";
import { NAV_ITEMS } from "../constants/routes";

export default function Header() {
  const appName = import.meta.env.VITE_APP_NAME;
  return (
    <header className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        {appName}
      </Link>

      <nav className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "text-white"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
