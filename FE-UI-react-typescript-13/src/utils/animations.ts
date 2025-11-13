import gsap from "gsap";

export const fadeIn = (el: HTMLElement | null, delay = 0) => {
  if (!el) return;
  gsap.fromTo(
    el,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, delay, ease: "power2.out" }
  );
};

export const animateMenuItems = (elements: HTMLElement[], open: boolean) => {
  const radius = 80; // distance from center
  const angleStep = (Math.PI * 2) / elements.length;

  elements.forEach((el, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = open ? Math.cos(angle) * radius : 0;
    const y = open ? Math.sin(angle) * radius : 0;

    gsap.to(el, {
      x,
      y,
      opacity: open ? 1 : 0,
      duration: 0.4,
      ease: "back.out(1.7)",
      delay: open ? i * 0.05 : 0,
    });
  });
};
