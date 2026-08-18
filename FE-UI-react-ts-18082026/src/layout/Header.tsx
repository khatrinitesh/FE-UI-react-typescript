import { NavLink } from "react-router";

export default function Header() {
  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <NavLink to="/" className="text-2xl font-bold">
          MyStore
        </NavLink>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-black"
                  : "text-gray-500 hover:text-black"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
