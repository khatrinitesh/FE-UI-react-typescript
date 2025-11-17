import type {
  CircularLoaderSize,
  ConsentItem,
  Discover,
  Feature,
  FooterLink,
  HowItWorksStep,
  SelectOption,
} from "../interface";
import { getVideo } from "../utils/assets";

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Fast performance",
    description:
      "Experience lightning fast load times and smooth interactions.",
    imageUrl: "/images/performance.png",
  },
  {
    id: 2,
    title: "Beautiful Design",
    description: "Inspired by modern design trends and intuitive UI.",
    imageUrl: "/images/design.png",
  },
  {
    id: 3,
    title: "Scalable Architecture",
    description: "Built for growth and reliability.",
    imageUrl: "/images/scalable.png",
  },
];

export const FOOTER_LINKS: FooterLink[] = [
  { id: 1, label: "Legal notice", href: "/legal" },
  { id: 2, label: "Privacy policy", href: "/privacy" },
  { id: 3, label: "Terms of use", href: "/terms" },
  { id: 4, label: "Cookies", href: "/cookies" },
];

export const examples: Discover[] = [
  {
    id: 1,
    videoSrc: getVideo("view.mp4"),
    caption: "“Pour mon ami qui a pensé à mon anniversaire”",
  },
  {
    id: 2,
    videoSrc: getVideo("view.mp4"),
    caption: "“Pour ma sœur qui adore danser…”",
  },
  {
    id: 3,
    videoSrc: getVideo("view.mp4"),
    caption: "“Pour ma meilleure amie, la plus drôle ❤️”",
  },
];

export const CONSENT_ITEMS: ConsentItem[] = [
  {
    id: "terms",
    text: "I accept the terms of use and privacy policy",
    required: true,
  },
  {
    id: "data-processing",
    text: "I accept that my data will be processed for the generation of my personalized video",
    required: true,
  },
  {
    id: "marketing",
    text: "I agree to receive personalized commercial offers by email from the brands of the managers and partners of the Ma vie en couleurs program (e.g., MILKA, etc.), based on my profile and preferences.",
  },
];
export const CONSENT_ITEMS2: ConsentItem[] = [
  {
    id: "terms",
    text: "I accept the contest terms and confirm  I am over 18 years old",
    required: false,
  },
];

export const COLLAPSIBLE_ANIMATION_MS = 220;

export const LEARN_MORE_LABEL = "Learn more";

export const LEARN_MORE_MARKETING_COPY =
  "By checking this box, you agree to receive personalized marketing " +
  "communications from Milka and partner brands of the Ma vie en couleurs " +
  "program. You can unsubscribe at any time by clicking the unsubscribe link " +
  "in each email or by contacting us directly.";

export const sizeMap: Record<CircularLoaderSize, number> = {
  sm: 32,
  md: 48,
  lg: 80,
};

export const thicknessMap: Record<CircularLoaderSize, number> = {
  sm: 3,
  md: 1,
  lg: 4,
};

export const DEFAULT_ARC_COLOR = "#8c6bae"; // soft purple
export const DEFAULT_TRACK_COLOR = "#ffffff"; // white

export const inspirationItems = [
  "Our first meeting that changed my life",
  "The day you made me laugh to tears",
  "That incredible adventure we lived together",
];

export const ALL_INSPIRATIONS: string[] = [
  "The first time you saw them smile.",
  "A moment when they surprised you.",
  "A small gesture that meant a lot.",
  "The day everything changed for you.",
  "A memory you wish you could relive.",
  "A time you couldn’t stop laughing together.",
  "The moment you knew they were special.",
];

export const PRONOUN_OPTIONS = [
  { value: "he/him", label: "he/him" },
  { value: "she/her", label: "she/her" },
  { value: "they/them", label: "they/them" },
] as const;

export type PronounValue = (typeof PRONOUN_OPTIONS)[number]["value"];

export const RELATIONSHIP_OPTIONS: SelectOption[] = [
  { value: "love", label: "My love", icon: "💕" },
  { value: "friend", label: "My friend", icon: "🤝" },
  { value: "family", label: "My family", icon: "👨‍👩‍👧‍👦" },
  { value: "other", label: "Other relationship", icon: "💜" },
] as const;

export type RelationshipValue = (typeof RELATIONSHIP_OPTIONS)[number]["value"];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Enter my information",
    description: "",
    icon: "mail",
  },
  {
    step: 2,
    title: "Describe the special moment for me and my loved one",
    description: "",
    icon: "edit",
  },
  {
    step: 3,
    title:
      "Choose from 3 proposed lyrics and receive my personalized song sung by M. Pokora",
    description: "",
    icon: "play",
  },
];

export const iconBg = "bg-[#6d498c]";
