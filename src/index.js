import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvide";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
