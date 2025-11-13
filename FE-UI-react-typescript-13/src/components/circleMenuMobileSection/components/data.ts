import type { CircleMenuItem } from "../../../interface";

export const CIRCLE_MENU_ITEMS: CircleMenuItem[] = [
  {
    id: "home",
    icon: "🏠",
    label: "Home",
    action: () => console.log("Go to Home"),
  },
  {
    id: "search",
    icon: "🔍",
    label: "Search",
    action: () => console.log("Search"),
  },
  {
    id: "settings",
    icon: "⚙️",
    label: "Settings",
    action: () => console.log("Open Settings"),
  },
];
