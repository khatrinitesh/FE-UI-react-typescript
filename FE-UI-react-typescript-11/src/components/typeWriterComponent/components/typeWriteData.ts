export const TYPEWRITER_SPEED = 100; // ms between chars

export const TYPEWRITER_STATUS = {
  IDLE: "idle",
  TYPING: "typing",
  DONE: "done",
} as const;

export type TypewriterStatus = keyof typeof TYPEWRITER_STATUS;
