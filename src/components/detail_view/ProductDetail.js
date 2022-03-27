import React from "react";
import ProductImages from "../data/ProductImages";
import { Link, useLocation } from "react-router-dom";

export default function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  // noinspection JSUnresolvedVariable
  return (
    <div>
      <Link to="/" className="return">
        <i className="material-icons">arrow_back</i>
      </Link>

      <div id="product" className="card" key={product.id}>
        <div className="card-content">
          <h5>
            <b>{product.name}</b>
          </h5>

          <div id="product-img" className="card-image">
            <img src={randomImage} alt="product" />
          </div>
        </div>
        <div className="card-information">
          <span className="price">
            <h6>{product.brand}</h6>
            <p>
              <b>Price: {product.price} SEK</b>
            </p>
          </span>

          <span
            id="add-button"
            className="btn-medium btn-floating"
            title="Add to cart"
          >
            <i className="material-icons">add</i>
          </span>
        </div>
      </div>
    </div>
  );
}
