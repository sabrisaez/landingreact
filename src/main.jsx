import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles } from "./styles/global_styles.js";
import { MenuProvider } from "./context/navbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <GlobalStyles />

      <App />
    </MenuProvider>
  </React.StrictMode>
);
