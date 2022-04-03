import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundary";
import Home from "./components/ListView/Home";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import ProductDetail from "./components/DetailView/ProductDetail";
import Cart from "./components/CartView/Cart";

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
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </ErrorBoundary>
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
