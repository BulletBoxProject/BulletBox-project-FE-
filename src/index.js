import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import configstore from "../src/redux/config/configstore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configstore}>
    <App />
  </Provider>
);
