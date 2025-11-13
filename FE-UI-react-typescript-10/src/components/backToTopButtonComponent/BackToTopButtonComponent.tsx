import { useEffect, useState } from "react";

const BackToTopButtonComponent = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={scrollToTop}
      className="cursor-pointer fixed bottom-6 right-6 p-2 bg-blue-600 text-white rounded-full shadow-lg"
    >
      ↑ Top
    </button>
  );
};

export default BackToTopButtonComponent;
