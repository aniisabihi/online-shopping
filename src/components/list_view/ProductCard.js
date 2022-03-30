import React from "react";
import ProductImages from "../app_data/ProductImages";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { name, brand, price, available } = props.product;
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  // noinspection JSUnresolvedVariable
  return (
    <div id="card" className="card" key={props.key}>
      <div className="card-content">
        <h6>
          <b>{name}</b>
        </h6>
      </div>

      <Link to={`/product/${props.key}`} key={props.key} state={props.product}>
        <div className="card-image" title="Click to view product">
          <img src={randomImage} alt={name} />
        </div>
      </Link>

      <div className="card-information">
        <div className="col">
          <span className="price">
            <h6>{brand}</h6>
            <p>
              <b>Price: {price} SEK</b>
            </p>
          </span>
        </div>
        {!available && (
          <div className="col">
            <h6 className="not-available">Out of stock!</h6>
          </div>
        )}
      </div>
    </div>
  );
}
