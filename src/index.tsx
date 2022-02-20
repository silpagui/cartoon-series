import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./reset.scss";
import { App } from "./App";
import { appStore } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
