import { FaBeer, FaCoffee } from "react-icons/fa";
import type {
  AccordionItem,
  Alert,
  AuroraLayer,
  AutocompleteItem,
  Avatar,
  Beam,
  BreadcrumbItem,
  Bullet,
  Car,
  CardItem,
  IconItem,
  Item,
  NavLink,
  SearchItem,
} from "../interface/auth";

export const ROUTES = {
  LOGIN: "/login",
  OTP: "/otp",
  REGISTER: "/register",
  LANDING: "/",
};

export const MESSAGES = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email format",
};
// cards.data.ts

export const CARDS: CardItem[] = [
  {
    id: "odysseus",
    name: "Odysseus",
    subtitle:
      "Odysseus is the clever, resilient king of Ithaca, renowned for his wit and determination.",
    description:
      "The Odyssey recounts Odysseus' long struggle to return home after the Trojan War, as he survives divine hostility, monsters, and constant hardship through ingenuity and endurance. His journey tests his identity and judgment, and when he finally reaches Ithaca, he uses strategy and disguise to defeat the suitors and restore order to his house and kingdom.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Venice_MAN_98_Statue_of_Odysseus_01.jpg/960px-Venice_MAN_98_Statue_of_Odysseus_01.jpg",
  },
  {
    id: "penelope",
    name: "Penelope",
    subtitle:
      "Penelope is Odysseus’s loyal and intelligent wife, admired for her patience and cunning.",
    description:
      "While besieged by suitors, Penelope maintains stability in Ithaca by using clever delays and protecting her household. Her steadfastness and subtle intelligence balance Odysseus’s adventures, and her careful testing of him upon his return provides the emotional resolution of the epic.",
    image: "https://www.pafa.org/sites/default/files/artworkpics/1851_2_l.jpg",
  },
  {
    id: "telemachus",
    name: "Telemachus",
    subtitle:
      "Telemachus is the young son of Odysseus who grows from a passive youth into a capable heir.",
    description:
      "Telemachus’s journey marks his transformation into adulthood as he seeks news of his father and learns leadership from figures like Nestor and Menelaus. His newfound confidence culminates in fighting alongside Odysseus to reclaim their household and help restore rightful order in Ithaca.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Telemachos_Saarbruecken.jpg/500px-Telemachos_Saarbruecken.jpg",
  },
];

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    id: "item-1",
    title: "What is Zustand?",
    content: "Zustand is a small, fast, and scalable state-management library.",
  },
  {
    id: "item-2",
    title: "Why Tailwind CSS?",
    content: "Tailwind allows rapid UI development with utility-first classes.",
  },
  {
    id: "item-3",
    title: "Why TypeScript?",
    content: "TypeScript adds type safety and improves developer experience.",
  },
];

export const DEFAULT_ALERTS: Alert[] = [
  {
    id: "1",
    type: "success",
    message: "Operation completed successfully!",
  },
  {
    id: "2",
    type: "error",
    message: "Something went wrong!",
  },
];

export const ICONS: IconItem[] = [
  { id: 1, name: "Beer", icon: FaBeer },
  { id: 2, name: "Coffee", icon: FaCoffee },
];

export const ITEMS: SearchItem[] = [
  { id: 1, name: "apple" },
  { id: 2, name: "banan" },
  { id: 3, name: "mango" },
  { id: 4, name: "pineapple" },
  { id: 5, name: "watermelon" },
  { id: 6, name: "grape" },
  { id: 7, name: "blueberry" },
];

export const ARROWS_ITEM: Item[] = [
  { id: 1, title: "Item 1", description: "This is the first item." },
  { id: 2, title: "Item 2", description: "This is the second item." },
  { id: 3, title: "Item 3", description: "This is the third item." },
];

export const AURORA_LAYERS: AuroraLayer[] = [
  {
    id: 1,
    color: "rgba(128, 0, 255, 0.4)",
    blur: 200,
    opacity: 0.5,
    speed: 20,
  },
  {
    id: 2,
    color: "rgba(0, 255, 128, 0.3)",
    blur: 300,
    opacity: 0.4,
    speed: 25,
  },
  {
    id: 3,
    color: "rgba(0, 128, 255, 0.2)",
    blur: 400,
    opacity: 0.3,
    speed: 30,
  },
];

export const AUTOCOMPLETE_ITEMS: AutocompleteItem[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Pineapple" },
  { id: 6, name: "Mango" },
  { id: 7, name: "Strawberry" },
];

export const AVATARS: Avatar[] = [
  { id: 1, name: "Alice", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Diana", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eve", image: "https://i.pravatar.cc/150?img=5" },
];

export const INITIAL_BEAMS: Beam[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: Math.random() * 800,
  y: Math.random() * 600,
  dx: (Math.random() - 0.5) * 2,
  dy: (Math.random() - 0.5) * 2,
  width: 150,
  height: 4,
  color: `hsl(${Math.random() * 360}, 80%, 50%)`,
}));

export const NAV_LINKS: NavLink[] = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Services", href: "/services" },
  { id: 4, name: "Contact", href: "/contact" },
];

export const BREADCRUMBS: BreadcrumbItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Products", href: "/products" },
  { id: 3, label: "Electronics", href: "/products/electronics" },
  { id: 4, label: "Headphones", href: "/products/electronics/headphones" },
];

export const BULLETS: Bullet[] = [
  { id: 1, label: "First item", color: "bg-red-500" },
  { id: 2, label: "Second item", color: "bg-green-500" },
  { id: 3, label: "Third item", color: "bg-blue-500" },
  { id: 4, label: "Fourth item", color: "bg-yellow-500" },
];

export const CARS: Car[] = [
  { id: 1, color: "bg-red-500", width: 40, height: 20 },
  { id: 2, color: "bg-blue-500", width: 50, height: 25 },
];
