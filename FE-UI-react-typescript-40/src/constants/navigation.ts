export interface NavLink {
  label: string;
  path?: string;
  hasDropdown?: boolean;
}


export const NAV_LINKS: NavLink[] = [
  { label: "About Us", path: "/about" },
  { label: "Solutions", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Alliances", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];