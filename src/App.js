import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/main_view/Navbar";
import Home from "./components/main_view/Home";
import ProductDetail from "./components/detail_view/ProductDetail";
import Cart from "./components/cart_view/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ErrorBoundary>
          <nav>
            <Navbar />
          </nav>
        </ErrorBoundary>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <ErrorBoundary>
          <footer id="footer" className="page-footer">
            <p>A simple online shopping application</p>
          </footer>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}
