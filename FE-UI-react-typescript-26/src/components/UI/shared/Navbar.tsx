import { Link } from "react-router";

import { navItems } from "../../../constants/constants";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "black",
        display: "flex",
        gap: "20px",
        padding: "10px",
      }}
    >
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} style={{ color: "white" }}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
