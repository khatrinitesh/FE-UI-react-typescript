const baseUrl = (import.meta.env.VITE_ASSET_BASE_URL || "/assets").replace(
  /\/+$/,
  "",
);

function createAssetUrl(path: string): string {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${baseUrl}/${normalizedPath}`;
}

export const assets = {
  img: {
    logo: createAssetUrl("img/logo.svg"),
    logoWhite: createAssetUrl("img/logo-white.svg"),
    placeholder: createAssetUrl("img/placeholder.webp"),
    heroBackground: createAssetUrl("img/hero-background.webp"),
  },

  video: {
    introduction: createAssetUrl("video/introduction.mp4"),
    background: createAssetUrl("video/background.mp4"),
  },
} as const;

export type Assets = typeof assets;
