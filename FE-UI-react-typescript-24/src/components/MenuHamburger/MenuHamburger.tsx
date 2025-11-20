import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const MenuHamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      size={26}
      color="#000"
      duration={0.4}
    />
  );
};

export default MenuHamburger;
