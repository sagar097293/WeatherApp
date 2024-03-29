import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";

import App from "./Components/App";
import Credit from "./Components/Credit";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Credit />
  </StrictMode>,
  rootElement
);
