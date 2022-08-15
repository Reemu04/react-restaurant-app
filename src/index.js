import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvide";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
