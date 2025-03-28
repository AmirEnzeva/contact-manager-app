import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-toastify/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="contact-manager-app">
      <App />
    </BrowserRouter>
  </StrictMode>
);
