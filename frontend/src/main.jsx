import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DashboardContextProvider } from "./context/DashboardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DashboardContextProvider>
      <App />
    </DashboardContextProvider>
  </React.StrictMode>
);
