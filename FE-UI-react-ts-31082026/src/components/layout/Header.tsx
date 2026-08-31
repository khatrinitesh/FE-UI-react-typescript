import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function Header() {
  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link-active" : "nav-link");

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="Morrow home">
          <span className="brand-mark">m</span>morrow
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink className={navClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={navClass} to="/contact">
            Contact
          </NavLink>
          <Button to="/contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
