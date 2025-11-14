// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // you can use smooth if you like: { behavior: "smooth" }
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component does not render anything
  return null;
};

export default ScrollToTop;
