import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./MainLayout/MainLayout"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
