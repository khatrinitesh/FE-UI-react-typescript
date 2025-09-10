export const AVATAR_SIZES = {
  SMALL: 32,
  MEDIUM: 48,
  LARGE: 72,
  XLARGE: 128,
} as const;

export const DEFAULT_AVATAR = "https://i.pravatar.cc/150?img=65"; // Example default avatar URL

export type AvatarSize = keyof typeof AVATAR_SIZES;
