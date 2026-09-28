import { useEffect, useState } from "react";

interface BackgroundOnScrollProps {
  children?: React.ReactNode;
  className?: string;
}

const BackgroundOnScroll = ({ children, className = "" }: BackgroundOnScrollProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`background-on-scroll min-h-screen transition-colors duration-500 ${scrolled ? "bg-black text-white" : "bg-white text-gray-900"} ${className}`}>
      {children}
    </div>
  );
};

export default BackgroundOnScroll;