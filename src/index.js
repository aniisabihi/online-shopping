import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/detail_view/ProductDetail";
import Cart from "./components/cart_view/Cart";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
