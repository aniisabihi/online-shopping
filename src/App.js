import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error_handling/ErrorBoundary";
import Home from "./components/list_view/Home";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import ProductDetail from "./components/detail_view/ProductDetail";
import Cart from "./components/cart_view/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </footer>
      </div>
    </BrowserRouter>
  );
}
