import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

const mainPage = document.getElementById("root");

ReactDOM.render(<App />, mainPage);
