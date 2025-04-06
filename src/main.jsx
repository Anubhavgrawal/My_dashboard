import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import index from "./index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <index />
  </StrictMode>
);
