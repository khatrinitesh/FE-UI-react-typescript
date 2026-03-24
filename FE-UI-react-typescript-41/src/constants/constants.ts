import type { CardData, GlobePoint } from "../interface";

export const GLOBE_POINTS: GlobePoint[] = [
  { id: 1, x: 20, y: 30, label: "India" },
  { id: 2, x: 70, y: 40, label: "USA" },
  { id: 3, x: 50, y: 70, label: "Europe" },
  { id: 4, x: 30, y: 60, label: "Africa" },
];

export const CARD_CONFIG = {
  MAX_ROTATE: 15,
  GLARE_SIZE: 200,
  TRANSITION: 0.2,
};

export const cards: CardData[] = [
  { id: 1, title: "Card One", description: "This is the first card" },
  { id: 2, title: "Card Two", description: "This is the second card" },
  { id: 3, title: "Card Three", description: "This is the third card" },
];
