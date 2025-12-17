import { useEffect } from "react";
import gsap from "gsap";

export const useZebraTableStripGsap = () => {
  useEffect(() => {
    gsap.from("tbody tr", {
      opacity: 0,
      y: 6,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);
};
