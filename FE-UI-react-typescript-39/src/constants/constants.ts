import type { Transition, Variants } from "framer-motion";
import type {
  ArrowSlide,
  AspectRatioCard,
  AutoCompleteItem,
  Avatar,
  BackgroundImage,
  BannerMessage,
  BentoGridItem,
  BulletItem,
  ButtonBlockItem,
  CalcButton,
  CardItem,
  CardItem2,
  CardStackItem,
  ClipboardContent,
  CollapseItem,
  ColorItem,
  Contact,
  ContactInfo,
  CouponData,
  CoverContent,
  DotItem,
  DropdownItem,
  DropdownItem4,
  ExpandableCardsItem,
  FadingButtonItem,
  FatNavItem,
  FooterLink,
  GalleryImage,
  HiddenElement,
  ListItem,
  MenuItem,
  NavItem,
  NavLinkItem,
  PanelItem,
  ScrollItem,
  SidebarItem,
  Skill,
  User,
  User2,
} from "../interface/index";
import { PATH } from "../router/path";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export const TOP_NAVIGATION: NavItem[] = [
  { name: "Home", path: PATH.HOME },
  { name: "About", path: PATH.ABOUT },
  { name: "Products", path: PATH.PRODUCTS },
  { name: "Contact", path: PATH.CONTACT },
];

export const CARD_DATA: CardItem[] = [
  {
    id: 1,
    title: "Modern Design",
    description: "Smooth 3D animated card effect with motion.",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: "Creative UI",
    description: "Built using Framer Motion + TailwindCSS.",
    image: "https://picsum.photos/400/300?random=2",
  },
];

export const ANIMATION_DURATION = 0.3;

export const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
  },
  expanded: {
    height: "auto",
    opacity: 1,
  },
};

export const iconVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

export const ALERT_VARIANTS = {
  success: "bg-green-50 border-green-500 text-green-800",
  error: "bg-red-50 border-red-500 text-red-800",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
  info: "bg-blue-50 border-blue-500 text-blue-800",
} as const;

export const BUTTON_VARIANTS = {
  success: "bg-green-600 hover:bg-green-700 text-white",
  error: "bg-red-600 hover:bg-red-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  info: "bg-blue-600 hover:bg-blue-700 text-white",
} as const;

export const alertMotion = {
  hidden: { opacity: 0, y: -20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

export const ICON_SIZE = 24; // default icon size in px
export const ICON_COLOR = "text-gray-800";

export const iconVariants2: Variants = {
  idle: { rotate: 0, scale: 1, opacity: 1 },
  hover: { rotate: 20, scale: 1.2, opacity: 1 },
  tap: { scale: 0.9, rotate: -10 },
};

export type IconAnimationState = "idle" | "hover" | "tap";

export const skills: Skill[] = [
  { id: 1, name: "React", level: 90 },
  { id: 2, name: "TypeScript", level: 80 },
  { id: 3, name: "Framer Motion", level: 70 },
  { id: 4, name: "CSS/HTML", level: 95 },
  { id: 5, name: "Node.js", level: 75 },
];

export const slides: ArrowSlide[] = [
  { id: 1, title: "Slide 1", description: "First Slide", color: "bg-red-500" },
  {
    id: 2,
    title: "Slide 2",
    description: "Second Slide",
    color: "bg-green-500",
  },
  { id: 3, title: "Slide 3", description: "Third Slide", color: "bg-blue-500" },
];

export const cards: AspectRatioCard[] = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3",
    color: "bg-blue-500",
  },
];

export const autoCompleteItems: AutoCompleteItem[] = [
  { id: 1, name: "React" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "Zustand" },
  { id: 4, name: "Framer Motion" },
  { id: 5, name: "TailwindCSS" },
  { id: 6, name: "Node.js" },
  { id: 7, name: "GraphQL" },
  { id: 8, name: "Next.js" },
];

export const avatars: Avatar[] = [
  { id: 1, name: "Alice", image: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", image: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", image: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Diana", image: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Eve", image: "https://i.pravatar.cc/150?img=5" },
];

export const BEAM_COUNT = 10;
export const COLORS = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
];

export const BANNER_MESSAGES: BannerMessage[] = [
  {
    id: 1,
    title: "Welcome to Our App",
    subtitle: "Enjoy your stay!",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "New Features",
    subtitle: "Check out the latest updates!",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Limited Offer",
    subtitle: "Get 50% off today!",
    color: "bg-red-500",
  },
];

export const BENTO_GRID_ITEMS: BentoGridItem[] = [
  { id: 1, title: "Item 1", size: "large", color: "bg-red-400" },
  { id: 2, title: "Item 2", size: "medium", color: "bg-green-400" },
  { id: 3, title: "Item 3", size: "small", color: "bg-blue-400" },
  { id: 4, title: "Item 4", size: "medium", color: "bg-yellow-400" },
  { id: 5, title: "Item 5", size: "small", color: "bg-purple-400" },
  { id: 6, title: "Item 6", size: "large", color: "bg-pink-400" },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, title: "Mountains", src: "https://picsum.photos/id/1015/300/200" },
  { id: 2, title: "City", src: "https://picsum.photos/id/1011/300/200" },
  { id: 3, title: "Forest", src: "https://picsum.photos/id/1018/300/200" },
  { id: 4, title: "Beach", src: "https://picsum.photos/id/1020/300/200" },
  { id: 5, title: "Desert", src: "https://picsum.photos/id/1003/300/200" },
  { id: 6, title: "Snow", src: "https://picsum.photos/id/1024/300/200" },
];

export const BACKGROUND_IMAGES: BackgroundImage[] = [
  {
    id: 1,
    title: "Mountains",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 2,
    title: "Forest",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    title: "Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export const IMAGE_BORDER_RADIUS = "16px";

export const BORDER_ANIMATION = {
  duration: 0.4,
  ease: "easeInOut",
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { id: 0, label: "Home" },
  { id: 1, label: "About" },
  { id: 2, label: "Services" },
  { id: 3, label: "Contact" },
];

export const BORDER_TRANSITION: Transition = {
  duration: 0.35,
  ease: "easeInOut",
};

export const BULLET_ITEMS: BulletItem[] = [
  { id: 1, label: "React TypeScript Development" },
  { id: 2, label: "State Management with Zustand" },
  { id: 3, label: "Smooth UI Animation using Framer Motion" },
  { id: 4, label: "Responsive UI with TailwindCSS" },
];

export const BULLET_ANIMATION: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

export const BUTTON_ITEMS: ButtonBlockItem[] = [
  { id: 1, label: "All" },
  { id: 2, label: "Active" },
  { id: 3, label: "Completed" },
];

export const BUTTON_ANIMATION: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

export const IMAGE_BUTTON_TRANSITION: Transition = {
  duration: 0.35,
  ease: "easeInOut",
};

export const CALC_BUTTONS: CalcButton[] = [
  { id: 1, value: "7" },
  { id: 2, value: "8" },
  { id: 3, value: "9" },
  { id: 4, value: "/" },
  { id: 5, value: "4" },
  { id: 6, value: "5" },
  { id: 7, value: "6" },
  { id: 8, value: "*" },
  { id: 9, value: "1" },
  { id: 10, value: "2" },
  { id: 11, value: "3" },
  { id: 12, value: "-" },
  { id: 13, value: "0" },
  { id: 14, value: "C" },
  { id: 15, value: "=" },
  { id: 16, value: "+" },
];

export const BUTTON_TRANSITION: Transition = {
  duration: 0.2,
  ease: "easeInOut",
};

export const DAYS_IN_MONTH = 31;

export const CALENDAR_TRANSITION: Transition = {
  duration: 0.25,
  ease: "easeInOut",
};

export const CALLOUT_TRANSITION: Transition = {
  duration: 0.35,
  ease: "easeInOut",
};

export const CALLOUT_STYLES = {
  success: "bg-green-100 border-green-500 text-green-800",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
  info: "bg-blue-100 border-blue-500 text-blue-800",
};

export const REVEAL_TRANSITION: Transition = {
  duration: 0.45,
  ease: "easeInOut",
};

export const CARD_ANIMATION = {
  duration: 0.35,
  ease: "easeOut" as const,
};

export const CARD_VARIANTS = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.04,
    y: -8,
  },
};

export const IMAGE_VARIANTS = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
};

export const SPOTLIGHT_TRANSITION = {
  duration: 0.3,
  ease: "easeOut" as const,
};

export const CARD_HOVER_VARIANT = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};

export const STACK_TRANSITION = {
  duration: 0.45,
  ease: "easeOut" as const,
};

export const CARD_ROTATIONS = [-6, -2, 2, 6];

export const STACK_VARIANTS = {
  rest: (index: number) => ({
    rotate: CARD_ROTATIONS[index] || 0,
    y: index * 4,
    scale: 1,
  }),
  hover: (index: number) => ({
    rotate: 0,
    y: index * -40,
    scale: 1.05,
  }),
};

export const CARD_STACK: CardStackItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    title: "Creative Design",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    title: "Modern UI",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf",
    title: "Web Development",
  },
];

export const NAVBAR_SCROLL_THRESHOLD = 80;

export const NAVBAR_HEIGHT = "h-16";

export const MAX_CHARACTERS = 200;
export const WARNING_THRESHOLD = 160;

export const MAX_MESSAGE_LENGTH = 500;
export const ANIMATION_DURATION2 = 0.25;

export const INITIAL_FORM = {
  name: "",
  email: "",
  address: "",
  city: "",
  zip: "",
};

export const MENU_ITEMS: MenuItem[] = [
  { id: 1, icon: "🏠", label: "Home" },
  { id: 2, icon: "🔍", label: "Search" },
  { id: 3, icon: "❤️", label: "Likes" },
  { id: 4, icon: "🛒", label: "Cart" },
  { id: 5, icon: "👤", label: "Profile" },
];

export const DOTS: DotItem[] = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export const INPUT_PLACEHOLDER = "Search something...";

export const DROPDOWN_ITEMS: DropdownItem[] = [
  { id: 1, label: "Profile" },
  { id: 2, label: "Settings" },
  { id: 3, label: "Notifications" },
  { id: 4, label: "Logout" },
];

export const INITIAL_ITEMS: ListItem[] = [
  { id: 1, label: "Notification message" },
  { id: 2, label: "Task completed" },
  { id: 3, label: "New email received" },
  { id: 4, label: "Profile updated" },
];

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 1, icon: "🏠", label: "Dashboard" },
  { id: 2, icon: "📦", label: "Orders" },
  { id: 3, icon: "👥", label: "Customers" },
  { id: 4, icon: "⚙️", label: "Settings" },
];

export const PANEL_ITEMS: PanelItem[] = [
  { id: 1, title: "Notifications" },
  { id: 2, title: "Messages" },
  { id: 3, title: "Activity" },
  { id: 4, title: "Settings" },
];

export const COLLAPSE_ITEMS: CollapseItem[] = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building UI.",
  },
  {
    id: 2,
    title: "What is Zustand?",
    content: "Zustand is a small fast state management library.",
  },
  {
    id: 3,
    title: "What is Framer Motion?",
    content: "Framer Motion is used for animations in React.",
  },
];

export const COLORS2: ColorItem[] = [
  { id: 1, hex: "#3B82F6" },
  { id: 2, hex: "#EF4444" },
  { id: 3, hex: "#10B981" },
  { id: 4, hex: "#F59E0B" },
  { id: 5, hex: "#8B5CF6" },
];

export const DEFAULT_TEXT = "Colorful Animated Text";

export const INITIAL_CONTACTS: Contact[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];
export const INITIAL_CONTACT_FORM = {
  name: "",
  email: "",
  message: "",
};

export const INITIAL_FORM2 = {
  name: "",
  email: "",
  message: "",
};

export const CONTACT_INFO: ContactInfo[] = [
  { id: 1, label: "Email", value: "hello@example.com" },
  { id: 2, label: "Phone", value: "+91 98765 43210" },
  { id: 3, label: "Location", value: "Mumbai, India" },
];

export const COVER_CONTENT: CoverContent = {
  title: "Interactive Container",
  description: "Click the container to reveal smooth animated cover content.",
};

export const SCROLL_ITEMS: ScrollItem[] = [
  {
    id: 1,
    title: "Fast Performance",
    description: "Optimized animations and smooth UI transitions.",
  },
  {
    id: 2,
    title: "Modern UI",
    description: "Built using TailwindCSS and Framer Motion.",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description: "Uses TypeScript and Zustand for state management.",
  },
];

export const COPY_CONTENT: ClipboardContent = {
  text: "https://www.youtube.com/watch?v=i9tbGrgzRGU",
};

export const TARGET_DATE = new Date("2026-12-31T23:59:59");

export const COUPONS: CouponData[] = [
  { code: "SAVE10", discount: 10 },
  { code: "SAVE20", discount: 20 },
  { code: "SAVE30", discount: 30 },
  { code: "SAVE40", discount: 40 },
  { code: "SAVE50", discount: 50 },
];

export const USERSEVERY: User[] = [
  { name: "Nitesh", active: true },
  { name: "Pawan", active: true },
  { name: "Rahul", active: true },
];

export const USERSFIND: User2[] = [
  { id: 1, name: "Nitesh" },
  { id: 2, name: "Pawan" },
  { id: 3, name: "Rahul" },
];

export const ZOOM_STEP = 0.2;
export const MAX_ZOOM = 2;
export const MIN_ZOOM = 1;

export const CURSOR_SIZE = 20;
export const CURSOR_SMOOTH = 0.2;

export const CURTAIN_MENU_ITEMS = [
  "Home",
  "About",
  "Services",
  "Portfolio",
  "Contact",
];

export const CHECKBOX_SIZE = 28;
export const CHECKBOX_COLOR = "bg-blue-500";

export const ACCEPTED_FILE_TYPES = "image/*";
export const MAX_FILE_SIZE_MB = 5;

export const RADIO_OPTIONS = ["Male", "Female", "Other"];
export const RADIO_SIZE = 26;

export const SCROLL_CONTAINER_HEIGHT = 400;
export const SCROLLBAR_WIDTH = 8;

export const SELECT_OPTIONS = ["React", "Angular", "Vue", "Svelte"];

export const SELECT_PLACEHOLDER = "Select Framework";

export const CUTOUT_TEXT = "CREATIVE";
export const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb";

export const TABLE_HEADERS = ["ID", "Name", "Role"];

export const TABLE_DATA = [
  { id: 1, name: "Nitesh", role: "Frontend Developer" },
  { id: 2, name: "Pawan", role: "Backend Developer" },
  { id: 3, name: "Rahul", role: "UI Designer" },
];

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CAPS_WARNING_TEXT = "Caps Lock is ON";

export type Direction = "top" | "bottom" | "left" | "right";

export const CARD_TEXT = "Hover Me";
export const CARD_OVERLAY_TEXT = "Direction Aware Hover";

export const UI_TEXT = {
  TITLE: "Right Click Protection",
  ENABLE: "Enable Right Click",
  DISABLE: "Disable Right Click",
};

export const RIGHT_CLICK_MESSAGE = "Right click is disabled on this page.";

export const DIVIDER_TEXT = "Section Divider";
export const DEFAULT_COLOR = "bg-gray-300";

export const DOWNLOAD_FILES = [
  {
    id: 1,
    label: "Download PDF",
    url: "/files/sample.pdf",
  },
  {
    id: 2,
    label: "Download Image",
    url: "/files/image.jpg",
  },
  {
    id: 3,
    label: "Download Zip",
    url: "/files/archive.zip",
  },
];

export const DRAG_TEXT = "Drag Me";

export const SIDENAV_MENU = [
  {
    id: 1,
    title: "Dashboard",
  },
  {
    id: 2,
    title: "Users",
    children: ["All Users", "Add User", "User Roles"],
  },
  {
    id: 3,
    title: "Settings",
    children: ["Profile", "Security"],
  },
];

export const NAV_ITEMS = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Services", link: "/services" },
  { id: 3, label: "Products", link: "/products" },
];

export const DROPDOWN_ITEMS2 = [
  { id: 1, label: "Profile", link: "/profile" },
  { id: 2, label: "Settings", link: "/settings" },
  { id: 3, label: "Logout", link: "/logout" },
];

export const DROPDOWN_ITEMS3 = [
  { id: 1, label: "Profile" },
  { id: 2, label: "Settings" },
  { id: 3, label: "Dashboard" },
  { id: 4, label: "Logout" },
];
export const DROPDOWN_OPTIONS = [
  "React",
  "TypeScript",
  "Zustand",
  "Framer Motion",
];

export const ERROR_MESSAGE = "Input cannot be empty";

export const DROPDOWN_ITEMS4: DropdownItem4[] = [
  { id: 1, label: "Profile", value: "profile" },
  { id: 2, label: "Settings", value: "settings" },
  { id: 3, label: "Dashboard", value: "dashboard" },
  { id: 4, label: "Logout", value: "logout" },
];

export const CARD_DATA2: CardItem2[] = [
  {
    id: 1,
    title: "Secure Payments",
    description: "Encrypted financial transactions",
  },
  {
    id: 2,
    title: "Data Protection",
    description: "End-to-end encryption layer",
  },
  {
    id: 3,
    title: "Cloud Security",
    description: "Zero-trust infrastructure",
  },
];

export const EXPANDABLE_CARDS_DATA: ExpandableCardsItem[] = [
  {
    id: 1,
    title: "AI Security",
    description: "Protect modern applications",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content:
      "AI driven security systems monitor activity and prevent threats automatically.",
  },
  {
    id: 2,
    title: "Cloud Infrastructure",
    description: "Scalable architecture",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    content:
      "Deploy applications globally with resilient cloud infrastructure.",
  },
  {
    id: 3,
    title: "Modern Development",
    description: "Faster product delivery",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    content:
      "Modern frameworks accelerate product development and scalability.",
  },
];

export const FADING_BUTTONS: FadingButtonItem[] = [
  { id: 1, label: "Home" },
  { id: 2, label: "Products" },
  { id: 3, label: "Pricing" },
  { id: 4, label: "Contact" },
];

export const FAT_NAV_LINKS: FatNavItem[] = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#" },
  { id: 3, label: "Services", href: "#" },
  { id: 4, label: "Projects", href: "#" },
  { id: 5, label: "Contact", href: "#" },
];

export const ELEMENTS: HiddenElement[] = [
  { id: 1, title: "Secret Panel", hidden: true },
  { id: 2, title: "Hidden Message", hidden: true },
  { id: 3, title: "Private Section", hidden: true },
];

export const FOOTER_LINKS: FooterLink[] = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#" },
  { id: 3, label: "Services", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];
