import React from "react";
import FetchData from "../data/FetchData";
import ErrorBoundary from "../ErrorBoundary";

export default function Home() {
  return (
    <div className="container">
      <ErrorBoundary>
        <FetchData />
      </ErrorBoundary>
    </div>
  );
}
