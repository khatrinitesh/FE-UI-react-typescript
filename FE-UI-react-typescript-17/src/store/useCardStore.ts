// src/store/useCardStore.ts
import { create } from "zustand";
import {
  CARD_STATUS,
  type CardStatus,
} from "../components/TextRevealCard/cardConstants";

export interface Card {
  id: string;
  title: string;
  text: string;
  status: CardStatus;
}

interface CardStore {
  cards: Card[];
  revealCard: (id: string) => void;
  hideCard: (id: string) => void;
  addCard: (title: string, text: string) => void;
}

export const useCardStore = create<CardStore>((set) => ({
  cards: [],

  addCard: (title, text) =>
    set((state) => ({
      cards: [
        ...state.cards,
        { id: crypto.randomUUID(), title, text, status: CARD_STATUS.HIDDEN },
      ],
    })),

  revealCard: (id) =>
    set((state) => ({
      cards: state.cards.map((c) =>
        c.id === id ? { ...c, status: CARD_STATUS.REVEALED } : c
      ),
    })),

  hideCard: (id) =>
    set((state) => ({
      cards: state.cards.map((c) =>
        c.id === id ? { ...c, status: CARD_STATUS.HIDDEN } : c
      ),
    })),
}));
