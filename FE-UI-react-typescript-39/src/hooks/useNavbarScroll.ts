import { useEffect } from "react";
import { NAVBAR_SCROLL_THRESHOLD } from "../constants/constants";
import { useNavbarStore } from "../store/useNavbarStore";

export const useNavbarScroll = () => {
  const setScrolled = useNavbarStore((state) => state.setScrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > NAVBAR_SCROLL_THRESHOLD;
      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);
};
