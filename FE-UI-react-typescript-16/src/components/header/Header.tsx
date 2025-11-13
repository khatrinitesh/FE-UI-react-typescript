import { navLinks } from "../../constants/navLinks";
import { useModalStore } from "../../store/useModalStore";
import { useThemeStore } from "../../store/useThemeStore";

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { openModal } = useModalStore();

  return (
    <header
      className={`p-4 sticky top-0 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">LandingPage</div>
        <nav className="space-x-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:underline">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="px-3 py-1 border rounded">
            {darkMode ? "Light" : "Dark"}
          </button>
          <button
            onClick={openModal}
            className="px-3 py-1 bg-green-500 rounded hover:bg-green-600"
          >
            Open Modal
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
