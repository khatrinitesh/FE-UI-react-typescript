import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import MarqueeSection from "./components/MarqueeSection";
import ResizeDetectorSection from "./components/ResizeDetectorSection";
import SizeMeSection from "./components/SizeMeSection";


function App() {
   useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);
  return (
    <>
    <ResizeDetectorSection/>
    <SizeMeSection/>
    <MarqueeSection/>
      <main className="bg-neutral-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <p data-scroll data-scroll-speed="0.3"
           className="text-cyan-400 uppercase tracking-widest">
          Welcome to the future
        </p>

        <h1
          data-scroll
          data-scroll-speed="0.1"
          className="text-6xl md:text-9xl font-bold text-center mt-6"
        >
          SMOOTH
          <br />
          <span className="text-cyan-400">SCROLL</span>
        </h1>

        <p className="mt-10 text-neutral-400">
          Scroll down to experience the animation
        </p>
      </section>

      {/* Parallax Section */}
      <section className="min-h-screen bg-cyan-950 flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2
            data-scroll
            data-scroll-speed="0.5"
            className="text-5xl md:text-8xl font-bold"
          >
            Parallax Effect
          </h2>

          <p
            data-scroll
            data-scroll-speed="0.2"
            className="mt-8 text-xl text-cyan-100"
          >
            Different elements move at different speeds.
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="min-h-screen flex items-center justify-center">
        <h2
          data-scroll
          data-scroll-speed="-0.2"
          className="text-6xl md:text-8xl font-bold text-purple-400"
        >
          Keep Exploring
        </h2>
      </section>
    </main>
    </>
  )
}

export default App
