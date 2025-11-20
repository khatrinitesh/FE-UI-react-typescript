import { useState } from "react";
import { FiBell, FiHome, FiStar } from "react-icons/fi";
import Alerts from "./components/Alerts/Alerts";
import Iconbar from "./components/Iconbar/Iconbar";
import MenuHamburger from "./components/MenuHamburger/MenuHamburger";
import ThreeDCard from "./components/ThreeDCard/ThreeDCard";
import AccordionComp from "./headless/AccordionComp";
import DialogComp from "./headless/DialogComp";
import DisclosureComp from "./headless/DisclosureComp";
import DropdownMenu from "./headless/DropdownMenu";
import PopoverComp from "./headless/PopoverComp";
import TabsComp from "./headless/TabsComp";
import AnimateIcons from "./components/AnimateIcons/AnimateIcons";
import AnimatedButtons from "./components/AnimatedButtons/AnimatedButtons";
import Arrows from "./components/Arrows/Arrows";
import Animation1 from "./components/Animation/Animation1";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Animation1 />
      <Arrows direction="up" size={32} color="#333" />
      <AnimatedButtons
        label="Primary Button"
        variant="primary"
      ></AnimatedButtons>
      <AnimatedButtons
        label="Secondary Button"
        variant="secondary"
      ></AnimatedButtons>
      <AnimatedButtons
        label="Outline Button"
        variant="outline"
      ></AnimatedButtons>
      <AnimateIcons>
        <FiHome />
      </AnimateIcons>
      <AnimateIcons>
        <FiBell />
      </AnimateIcons>
      <AnimateIcons>
        <FiStar />
      </AnimateIcons>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShow(true)}
      >
        Show Alert
      </button>

      {show && (
        <Alerts
          type="success"
          message="Profile updated successfully!"
          duration={3000}
          onClose={() => setShow(false)}
        />
      )}
      <ThreeDCard>nitesh khatri</ThreeDCard>
      <MenuHamburger />
      <Iconbar />
      <AccordionComp />
      <TabsComp />
      <PopoverComp />
      <DialogComp />
      <DisclosureComp />
      <DropdownMenu />
    </>
  );
}

export default App;
