import { useState } from "react";
import ClearInput from "./components/ClearInput/ClearInput";
import Clearfix from "./components/Clearfix";
import ClickDropdown from "./components/ClickDropdown";

function App() {
  const [search, setSearch] = useState("");
  const dropdownItems = [
    { label: "React", value: "react" },
    { label: "TypeScript", value: "typescript" },
    { label: "Tailwind CSS", value: "tailwind" },
  ];
  return (
    <>
      <ClickDropdown
        items={dropdownItems}
        placeholder="Select technology"
        onChange={(value) => console.log(value)}
      />
      <Clearfix>
        <div className="float-left">Left Content</div>
        <div className="float-right">Right Content</div>
      </Clearfix>
      <ClearInput value={search} onChange={setSearch} placeholder="Search..." />
    </>
  );
}

export default App;
