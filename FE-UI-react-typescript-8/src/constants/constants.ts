import type {
  AccordionItem,
  AutoCompleteOption,
  CardData,
  TimelineEntry,
} from "../interface";
import { PATHS } from "../routes/Path";
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaChartLine,
} from "react-icons/fa"; // 👈 Font Awesome

export const navLinks = [
  { label: "Home", path: PATHS.HOME },
  { label: "About", path: PATHS.ABOUT },
  { label: "Services", path: PATHS.SERVICES },
  { label: "Contact", path: PATHS.CONTACT },
];

export const timelineData: TimelineEntry[] = [
  {
    title: "1. Project Kick-off",
    description: "Brainstorming, gathering requirements, and alignment.",
    icon: FaLightbulb({ size: 40 }),
  },
  {
    title: "2. Design Phase",
    description: "Wireframes and mockups to visualize the experience.",
    icon: FaPencilRuler({ size: 40 }),
  },
  {
    title: "3. Development",
    description: "Core coding and feature implementation.",
    icon: FaCode({ size: 40 }),
  },
  {
    title: "4. Testing",
    description: "QA, performance and usability testing.",
    icon: FaBug({ size: 40 }),
  },
  {
    title: "5. Launch",
    description: "Going live and handling real-world usage.",
    icon: FaRocket({ size: 40 }),
  },
  {
    title: "6. Growth & Future",
    description: "Post-launch scaling and continuous improvement.",
    icon: FaChartLine({ size: 40 }),
  },
];

export const cards: CardData[] = [
  {
    title: "Creative Design",
    description: "Modern, clean, and responsive UI layouts.",
    image:
      "https://static.vecteezy.com/system/resources/previews/015/396/031/non_2x/chinese-new-year-festive-gift-card-templates-with-realistic-3d-design-elements-re-wallpaper-vector.jpg",
  },
  {
    title: "Fast Development",
    description: "Optimized coding using reusable components.",
    image:
      "https://c4.wallpaperflare.com/wallpaper/111/885/280/abstract-design-graphic-digital-wallpaper-preview.jpg",
  },
  {
    title: "Smooth Animations",
    description: "Interactive and delightful user experiences.",
    image:
      "https://img.freepik.com/free-photo/3d-geometric-abstract-background_1048-16317.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What is Zustand?",
    content: "Zustand is a small, fast state-management library for React.",
  },
  {
    id: 2,
    title: "Why use TypeScript?",
    content:
      "TypeScript provides static typing for better developer experience.",
  },
  {
    id: 3,
    title: "Can I animate this accordion?",
    content: "Yes! We'll add smooth transitions with CSS.",
  },
];

export const autoCompleteOptions: AutoCompleteOption[] = [
  { id: 1, label: "React" },
  { id: 2, label: "TypeScript" },
  { id: 3, label: "Zustand" },
  { id: 4, label: "Tailwind CSS" },
  { id: 5, label: "Node.js" },
  { id: 6, label: "Next.js" },
];

export type AlertType = "success" | "error" | "info" | "warning";

export interface Alert {
  id: string;
  message: string;
  type: AlertType;
}

export const SEARCH_PLACEHOLDER = "Search...";

export const ICON_SIZE = 20;
