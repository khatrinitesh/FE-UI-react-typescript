import AccordionComp from "./headless/AccordionComp";
import DialogComp from "./headless/DialogComp";
import DisclosureComp from "./headless/DisclosureComp";
import DropdownMenu from "./headless/DropdownMenu";
import PopoverComp from "./headless/PopoverComp";
import TabsComp from "./headless/TabsComp";

function App() {
  return (
    <>
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
