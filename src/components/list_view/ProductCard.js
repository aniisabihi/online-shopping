import React from "react";
import ProductImages from "../app_data/ProductImages";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { product } = props;
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  // noinspection JSUnresolvedVariable
  return (
    <div id="card" className="card" key={product.id}>
      <div className="card-content">
        <h6>
          <b>{product.name}</b>
        </h6>
      </div>

      <Link to="/product" state={{ product }}>
        <div className="card-image" title="Click to view product">
          <img src={randomImage} alt="product" />
        </div>
      </Link>

      <div className="card-information">
        <span className="price">
          <h6>{product.brand}</h6>
          <p>
            <b>Price: {product.price} SEK</b>
          </p>
        </span>
      </div>
    </div>
  );
}
