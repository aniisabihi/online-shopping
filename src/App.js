import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/main_view/Navbar";
import Home from "./components/main_view/Home";

export default function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <main>
        <Home />
      </main>

      <footer id="footer" className="page-footer">
        <p>A simple online shopping application</p>
      </footer>
    </div>
  );
}
