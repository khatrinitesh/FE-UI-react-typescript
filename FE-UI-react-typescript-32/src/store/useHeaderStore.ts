import { create } from "zustand";
import type { BigHeaderContent } from "../interface";
import { BIG_HEADER_CONTENT } from "../constants/constants";

interface HeaderState {
  content: BigHeaderContent;
}

export const useHeaderStore = create<HeaderState>(() => ({
  content: BIG_HEADER_CONTENT,
}));
