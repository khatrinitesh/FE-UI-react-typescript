import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubButton from "react-github-btn";
import "./App.css";
import ChakraSection from "./components/ChakraSection";
import ConfettiButton from "./components/ConfettiButton";
import Contact from "./components/Contact";
import EmotionSection from "./components/Emotion/EmotionSection";
import OsBrowserify from "./components/OsBrowserify";
import PathBrowserify from "./components/PathBrowserify";
import ReactGithubCalendarSection from "./components/ReactGithubCalendarSection";
import ReactLazyLoadComponent from "./components/ReactLazyLoadComponent";
import ReactLoadingSpinner from "./components/ReactLoadingSpinner";
import ReactTypeAnimation from "./components/ReactTypeAnimation";
import ProjectSlider from "./components/SwiperSection/ProjectSlider";
import SwiperSection from "./components/SwiperSection/SwiperSection";
import TailwindMerge from "./components/TailwindMerge";

function App() {
  return (
    <>
      <ReactLoadingSpinner />
      <ReactLazyLoadComponent />
      <ReactGithubCalendarSection />
      <EmotionSection />
      <ChakraSection />
      <ReactTypeAnimation />
      {/* <ReactAwesomeSlider /> */}
      <PathBrowserify />
      <OsBrowserify />
      <ProjectSlider />
      <SwiperSection />
      <TailwindMerge />
      <Contact />
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
      >
        <FontAwesomeIcon icon={faDownload} />
        Download
      </button>
      <br />
      <GitHubButton
        href="https://github.com/khatrinitesh"
        data-size="large"
        data-show-count="true"
        aria-label="Follow @khatrinitesh on GitHub"
      >
        Follow @khatrinitesh
      </GitHubButton>
      <ConfettiButton />
      <div className="animate-in fade-in zoom-in">
        Animate in fade in zoom in
      </div>
      <div className="animate-out slide-out-to-top slide-out-to-left">...</div>
      <div className="... duration-300">...</div>
      <div className="... delay-150">...</div>
      <button className="animate-in fade-in duration-300 ...">Button A</button>
      <button className="animate-in spin-in delay-150 ...">Button B</button>
      <button className="animate-in zoom-in duration-100 ...">Button C</button>
      <button className="animate-in slide-in-from-top delay-75 duration-300 ...">
        Button D
      </button>
      <button className="animate-in slide-in-from-left ...">Button E</button>
    </>
  );
}

export default App;
