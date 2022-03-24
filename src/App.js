import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/main_view/Navbar";
import Home from "./components/main_view/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
