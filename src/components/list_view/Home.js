import React from "react";
import ErrorBoundary from "../error_handling/ErrorBoundary";
import ProductData from "../app_data/ProductData";

export default function Home() {
  return (
    <div className="container">
      <ErrorBoundary>
        <ProductData />
      </ErrorBoundary>
    </div>
  );
}
