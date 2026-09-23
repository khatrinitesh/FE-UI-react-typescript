import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button type="button" onClick={scrollToTop} aria-label="Scroll to top" className="cursor-pointer fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white shadow-lg transition hover:scale-105">
      ↑
    </button>
  );
}
