import React from "react";
import ErrorBoundary from "../error_handling/ErrorBoundary";
import ProductData from "../app_data/ProductData";

export default function Home() {
  return (
    <div className="cart-container">
      <ErrorBoundary>
        <ProductData />
      </ErrorBoundary>
    </div>
  );
}
