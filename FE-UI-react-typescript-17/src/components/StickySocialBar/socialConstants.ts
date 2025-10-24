export const SOCIAL_LINKS = {
  GITHUB: {
    name: "GitHub",
    url: "https://github.com/",
    icon: "🐙",
    color: "#333",
  },
  TWITTER: {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "🐦",
    color: "#1DA1F2",
  },
  LINKEDIN: {
    name: "LinkedIn",
    url: "https://linkedin.com/",
    icon: "💼",
    color: "#0077b5",
  },
  YOUTUBE: {
    name: "YouTube",
    url: "https://youtube.com/",
    icon: "▶️",
    color: "#FF0000",
  },
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
