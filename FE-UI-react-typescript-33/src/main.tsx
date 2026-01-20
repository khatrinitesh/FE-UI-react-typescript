import { createRoot } from "react-dom/client";
import "./index.css";
import CanvasRevealComp from "./AppComponent/CanvasRevealComp";

createRoot(document.getElementById("root")!).render(
  <>
    <CanvasRevealComp />
  </>,
);
