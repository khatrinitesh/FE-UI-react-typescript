export const AUTOCOMPLETE_CONFIG = {
  DEBOUNCE_DELAY: 300, // ms
  MAX_SUGGESTIONS: 10,
} as const;

export const suggestions = [
  { id: 1, label: "Apple" },
  { id: 2, label: "Banana" },
  { id: 3, label: "Orange" },
  { id: 4, label: "Mango" },
  { id: 5, label: "Pineapple" },
];
