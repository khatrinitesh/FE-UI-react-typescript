import { createRoot } from "react-dom/client";
import "./index.css";
import { CalloutComp } from "./AppComponent/CalloutComp";

createRoot(document.getElementById("root")!).render(
  <>
    <CalloutComp />
  </>,
);
