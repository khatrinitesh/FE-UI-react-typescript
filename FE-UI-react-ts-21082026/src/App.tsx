import "./App.css";
import Animated from "./components/Animated";
import ReactAwesomeReveal from "./components/ReactAwesomeReveal";
import ReactCookieConsent from "./components/ReactCookieConsent";
import ReactDeviceDetect from "./components/ReactDeviceDetect/ReactDeviceDetect";
import ReactIntersectionObserver from "./components/ReactIntersectionObserver";
import ReactSvgSection from "./components/ReactSvgSection/ReactSvgSection";
import ScrollTimelinePolyfill from "./components/ScrollTimelinePolyfill";
import WebAnimationsJs from "./components/WebAnimationsJs";

function App() {
  return (
    <>
      <ReactSvgSection />
      <ReactDeviceDetect />
      <ReactCookieConsent />
      <WebAnimationsJs />
      <ScrollTimelinePolyfill />
      <ReactIntersectionObserver />
      <ReactAwesomeReveal />
      <Animated />
    </>
  );
}

export default App;
