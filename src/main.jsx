import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/SM-results">
      {/* Scroll reset runs on every route change */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
