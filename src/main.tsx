import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SelectionProvider } from "./context/SelectionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectionProvider>
      <App />
    </SelectionProvider>
  </React.StrictMode>,
);
