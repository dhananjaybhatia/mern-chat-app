import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "../src/components/ui/provider";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
