import React from "react";
import ProductCard from "../ListView/ProductCard";
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import data from "./../../store/reducers/Reducers";

const ProductData = () => {
  return (
    <div className="box">
      {data &&
        data.items?.map((item) => (
          <ErrorBoundary key={item.id}>
            <ProductCard id={item.id} product={item} />
          </ErrorBoundary>
        ))}
    </div>
  );
};

export default ProductData;
