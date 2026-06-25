import { NavLink } from "react-router";

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black";

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="text-xl font-bold">
          MyApp
        </NavLink>

        <nav className="flex items-center gap-5 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
