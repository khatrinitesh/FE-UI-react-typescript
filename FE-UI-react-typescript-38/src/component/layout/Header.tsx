import { NavLink, useLocation, useNavigate } from "react-router";

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-white underline underline-offset-4"
    : "text-gray-300 hover:text-white transition";

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const homePage = useLocation();

  const isCondition: string = homePage.pathname === "/" ? "MyApp 1" : "MyApp 2";
  return (
    <header className="bg-black bg-opacity-30 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer" onClick={handleBack}>
          {isCondition}
        </div>
        <ul className="flex gap-6 text-lg">
          <li>
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
