const asset = (path: string) => `/assets/${path}`;
export const assets = {
  images: {
    logoHome: asset("img/logo-1.svg"),
    logoInner: asset("img/logo-2.svg"),
  },
  videos: { intro: asset("video/intro.mp4") },
  documents: { brochure: asset("pdf/brochure.pdf") },
} as const;
