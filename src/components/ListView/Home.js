import React from "react";
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import ProductData from "../ProductData/ProductData";

export default function Home() {
  return (
    <div className="cart-container">
      <ErrorBoundary>
        <ProductData />
      </ErrorBoundary>
    </div>
  );
}
