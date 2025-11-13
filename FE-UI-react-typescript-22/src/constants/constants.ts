import type { AccordionItemProps, IconItem, NavItem } from "../interface";
import { ROUTE_PATHS } from "../routes/RoutePaths";
import { FaHome, FaStar, FaUser } from "react-icons/fa";

export const NAV_LINKS: NavItem[] = [
  { id: 1, name: "Home", path: ROUTE_PATHS.HOME },
  { id: 2, name: "About", path: ROUTE_PATHS.ABOUT },
  { id: 3, name: "Services", path: ROUTE_PATHS.SERVICES },
  { id: 4, name: "Service Detail", path: ROUTE_PATHS.SERVICE_DETAIL }, // example dynamic link
  { id: 5, name: "Contact", path: ROUTE_PATHS.CONTACT },
];

export const ACCORDION_ITEMS: AccordionItemProps[] = [
  {
    id: "1",
    title: "Store Information",
    content: "Enter store name, phone, and address details.",
  },
  {
    id: "2",
    title: "Jewellery Details",
    content: "Add product categories, gold types, etc.",
  },
  {
    id: "3",
    title: "Payment Settings",
    content: "Manage bank accounts and billing preferences.",
  },
];
export const ICONS: IconItem[] = [
  { id: "home", name: "Home", icon: FaHome },
  { id: "favorites", name: "Favorites", icon: FaStar },
  { id: "profile", name: "Profile", icon: FaUser },
];
export const ARROW_ICONS = {
  left: "←",
  right: "→",
};

export const SLIDES = [
  "Welcome to Zustand UI",
  "Smooth Animation Example",
  "Reusable TypeScript Components",
  "Clean CSS with Transitions",
];

export const ANIMATION_DURATION = 0.3; // seconds

export const SUGGESTIONS: string[] = [
  "React",
  "React Native",
  "Redux",
  "Zustand",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "Next.js",
  "GSAP",
  "CSS Animation",
  "HTML5",
  "Vite",
  "Webpack",
  "Bun",
];
