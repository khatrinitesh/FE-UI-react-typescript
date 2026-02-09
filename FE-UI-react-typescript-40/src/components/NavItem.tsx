import { useMenuStore } from "../store/useMenuStore";
import type { NavItemProps } from "./header.types"


const NavItem = ({label, path, hasDropdown}:NavItemProps) => {
    const { activeDropdown, setActiveDropdown } = useMenuStore();

  const isOpen = activeDropdown === label;
  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
      onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
    >
      <span className="text-sm font-medium text-gray-700 hover:text-black transition">
        {label} {hasDropdown && "▾"}
      </span>

      {hasDropdown && isOpen && (
        <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-4 w-40">
          <p className="text-sm text-gray-600">Dropdown Item 1</p>
          <p className="text-sm text-gray-600">Dropdown Item 2</p>
        </div>
      )}
    </div>
  )
}

export default NavItem
