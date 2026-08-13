import Lenis from "lenis";

let lenis: Lenis | null = null;

export const initLenis = () => {
  if (lenis) {
    return lenis;
  }

  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return lenis;
};

export const getLenis = () => {
  return lenis;
};

export const destroyLenis = () => {
  if (!lenis) {
    return;
  }

  lenis.destroy();
  lenis = null;
};
