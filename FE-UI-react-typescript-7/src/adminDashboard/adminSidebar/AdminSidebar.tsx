import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-color1 text-white p-6">
      <h2 className="text-subTitle font-bold mb-6">Navigation</h2>
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `block px-2 py-1 rounded hover:bg-white hover:text-color1 transition ${
                  isActive ? "bg-white text-color1" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          {/* Add more links as needed */}
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("isAuthenticated");
                window.location.href = "/admin/login";
              }}
              className="block w-full text-left px-2 py-1 rounded hover:bg-white hover:text-color1 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
