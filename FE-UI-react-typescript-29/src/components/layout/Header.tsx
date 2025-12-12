import { Link } from "react-router";
import { ROUTES } from "../../constants/constants";

const Header = () => {
  return (
    <header className="bg-black py-5">
      <div className="container">
        <nav>
          <Link to={ROUTES.HOME}>Home</Link> |{" "}
          <Link to={ROUTES.ABOUT}>About</Link> |{" "}
          <Link to={ROUTES.SERVICES}>Services</Link> |{" "}
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
