import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/Store";
import App from "./App";
import "./index.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "react-toastify/dist/ReactToastify.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
