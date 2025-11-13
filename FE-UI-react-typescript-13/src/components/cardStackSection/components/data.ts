import type { CardData } from "../../../interface";

export const CARD_STACK_OFFSET = 10; // px vertical offset per card
export const CARD_FAN_ROTATION = 8; // degrees
export const CARD_ANIMATION_DURATION = 0.4;
export const CARD_EASING = "power2.out";

export const mockCards: CardData[] = [
  { id: 1, title: "Card 1", description: "This is the first card." },
  { id: 2, title: "Card 2", description: "Second card is stacked." },
  { id: 3, title: "Card 3", description: "Third card at the bottom." },
];
