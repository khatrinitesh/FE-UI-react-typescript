import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import injectFonts from "./utils/injectFonts.ts";

injectFonts();

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
