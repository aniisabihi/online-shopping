import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/main_view/Navbar";
import Home from "./components/main_view/Home";

export default function App() {
  return (
    <div className="App">
      <nav>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
      </nav>

      <main>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </main>

      <footer id="footer" className="page-footer">
        <ErrorBoundary>
          <p>A simple online shopping application</p>
        </ErrorBoundary>
      </footer>
    </div>
  );
}
