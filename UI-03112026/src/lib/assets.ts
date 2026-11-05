const base = (
  import.meta.env.VITE_ASSETS || "/assets"
).replace(/\/$/, "");

export const assetUrl = (path: string) =>
  `${base}/${path.replace(/^\/+/, "")}`;

export const imageUrl = (name: string) =>
  assetUrl(`images/${name}`);

export const videoUrl = (name: string) =>
  assetUrl(`videos/${name}`);

export const pdfUrl = (name: string) =>
  assetUrl(`pdfs/${name}`);

export const lottieUrl = (name: string) =>
  assetUrl(`lottie/${name}`);