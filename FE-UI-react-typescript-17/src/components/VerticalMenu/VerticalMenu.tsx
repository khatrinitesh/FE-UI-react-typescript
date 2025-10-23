import { useMenuStore } from "../../store/verticalMenuStore";
import { VERTICAL_CONSTANTS } from "./verticalConstants";

const VerticalMenu = () => {
  const { isOpen, activePath, toggleMenu, setActivePath } = useMenuStore();
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "w-56" : "w-16"
        } bg-green-800 text-white h-screen transition-all duration-300 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-green-600">
          <h2
            className={`font-bold text-lg transition-all ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            Menu
          </h2>
          <button
            className="text-white text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? "❮" : "❯"}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 mt-4">
          {VERTICAL_CONSTANTS.map(({ id, label, path, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActivePath(path)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-green-700 transition-all ${
                activePath === path ? "bg-green-600" : ""
              }`}
            >
              <Icon className="text-xl" />
              <span
                className={`text-sm font-medium transition-opacity ${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-green-600 text-xs text-center text-green-300">
          {isOpen ? "© 2025 MyApp" : "©"}
        </div>
      </aside>

      {/* Main Content Placeholder */}
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold text-green-800">
          Current Page: {activePath}
        </h1>
      </main>
    </div>
  );
};

export default VerticalMenu;
