import { useState, useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ✅ FIX: Import ScrollTrigger
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Banner from "../../components/Banner/Banner";
import VideoSection from "../../components/VideoSection/VideoSection";
import DiscoverSection from "../../components/DiscoverSection/DiscoverSection";
import Footer from "../../components/Footer/Footer";
import FooterLink from "../../components/Footerlink/FooterLink";
import { getVideo } from "../../utils/assets";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const [showHeader, setShowHeader] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [showFooterLinks, setShowFooterLinks] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollBottom = winHeight + currentY;
      const distanceToBottom = docHeight - scrollBottom;
      const scrollingDown = currentY > lastScrollY.current;
      const scrollingUp = currentY < lastScrollY.current;

      // ✅ Scroll down behavior
      if (scrollingDown) {
        // show footer first when halfway down page
        if (currentY > 300) setShowFooter(true);
        // show sticky header after footer (slightly later)
        if (currentY > 600) setShowHeader(true);

        // optional: show footer links near bottom
        if (distanceToBottom < 300) setShowFooterLinks(true);
      }

      // ✅ Scroll up behavior
      if (scrollingUp) {
        // hide both when reaching near top
        if (currentY < 100) {
          setShowHeader(false);
          setShowFooter(false);
        }

        // hide footer links when scrolling away from bottom
        if (currentY < docHeight - winHeight - 500) {
          setShowFooterLinks(false);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-dvh">
      <div className="mainWrapper pb-[148px]">
        {/* ✅ Sticky Header at top */}
        <StickyHeader isVisible={showHeader} />
        <Banner />
        <VideoSection src={getVideo("BigBuckBunny.mp4")} />
        <DiscoverSection />

        {showFooterLinks && <FooterLink />}
      </div>
      {/* ✅ Sticky Footer at bottom */}
      <Footer isVisible={showFooter} />
    </div>
  );
}

export default HomePage;
