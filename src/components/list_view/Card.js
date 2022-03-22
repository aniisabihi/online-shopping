import React from "react";
import ProductImages from "./ProductImages";

export default function Card(props) {
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  // noinspection JSUnresolvedVariable
  return (
    <div className="card" key={props.product.id}>
      <div className="card-content">
        <h5>
          <b>{props.product.name}</b>
        </h5>
      </div>

      <div className="card-image">
        <img src={randomImage} alt="product" />
      </div>

      <div className="card-information">
        <span className="price">
          <h6>{props.product.brand}</h6>
          <p>
            <b>Price: {props.product.price} SEK</b>
          </p>
        </span>

        <span className="btn-small btn-floating green" title="Add to cart">
          <i className="material-icons">add</i>
        </span>
      </div>
    </div>
  );
}
