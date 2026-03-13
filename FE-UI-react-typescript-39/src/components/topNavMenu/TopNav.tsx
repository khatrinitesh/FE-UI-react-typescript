import { useDropdownStore } from "../../store/useDropdownStore";
import DropdownMenu from "./DropdownMenu";

const TopNav = () => {
  const { toggleDropdown } = useDropdownStore();

  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center relative">
      <h1 className="text-xl font-semibold">MyApp</h1>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Account
        </button>

        <DropdownMenu />
      </div>
    </nav>
  );
};

export default TopNav;
