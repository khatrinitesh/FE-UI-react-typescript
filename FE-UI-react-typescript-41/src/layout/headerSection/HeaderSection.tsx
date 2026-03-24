import { Link, NavLink } from "react-router";
import { PATHS } from "../../routes/path";

const HeaderSection = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-yellow-400 border-b-2 border-yellow-400" : "text-white";

  return (
    <header className="headerSection bg-black p-5 ">
      <div className="container mx-auto">
        <div className="innerHeader flex items-center justify-between">
          <Link to="/" className="text-white text-2xl">
            Logo1
          </Link>
          <nav className="flex gap-5">
            <ul className="flex gap-5">
              <li>
                <NavLink className={navClass} to={PATHS.HOME}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navClass} to={PATHS.PRODUCT}>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink className={navClass} to={PATHS.CONTACT}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
