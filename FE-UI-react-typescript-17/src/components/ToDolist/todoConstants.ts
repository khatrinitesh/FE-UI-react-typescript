// src/constants/todoConstants.ts
export const TODO_STATUS = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
} as const;

export type TodoStatus = (typeof TODO_STATUS)[keyof typeof TODO_STATUS];
