import React from "react";
import FetchData from "../app_data/FetchData";
import ErrorBoundary from "../error_handling/ErrorBoundary";

export default function Home() {
  return (
    <div className="container">
      <ErrorBoundary>
        <FetchData />
      </ErrorBoundary>
    </div>
  );
}
