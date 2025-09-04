import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import BackToTopButtonComponent from "./components/backToTopButtonComponent/BackToTopButtonComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <BackToTopButtonComponent />
  </>
);
