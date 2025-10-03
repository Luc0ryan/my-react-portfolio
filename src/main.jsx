import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "photoswipe/style.css";
import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
