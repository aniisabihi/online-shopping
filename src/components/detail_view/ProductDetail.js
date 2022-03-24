import React from "react";
import ProductImages from "../data/ProductImages";

export default function ProductDetail(props) {
  const { product } = props;
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  // noinspection JSUnresolvedVariable
  return (
    <div className="card" key={product.id}>
      <div className="card-content">
        <h5>
          <b>{product.name}</b>
        </h5>
      </div>

      <div className="card-image">
        <img src={randomImage} alt="product" />
      </div>

      <div className="card-information">
        <span className="price">
          <h6>{product.brand}</h6>
          <p>
            <b>Price: {product.price} SEK</b>
          </p>
        </span>

        <span className="btn-medium btn-floating green" title="Add to cart">
          <i className="material-icons">add</i>
        </span>
      </div>
    </div>
  );
}
