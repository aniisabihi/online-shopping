// noinspection JSUnresolvedVariable

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import ProductImages from "../app_data/ProductImages";
import { ProductOptions } from "./ProductOptions";
import ErrorBoundary from "../error_handling/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import ProductToCart from "./ProductToCart";

export default function ProductDetail() {
  const [chosenColor, setColor] = useState("");
  const [chosenPower, setPower] = useState(0);
  const [chosenStorage, setStorage] = useState(0);
  const [chosenQuantity, setQuantity] = useState(0);

  const randomImage = ProductImages[1];
  const location = useLocation();
  const product = location.state;
  const { id, name, brand, weight, price, available, options } = product;

  const updateColor = (c) => {
    setColor(c.value);
  };

  const updatePower = (p) => {
    setPower(p.value);
  };

  const updateStorage = (s) => {
    setStorage(s.value);
  };

  const updateQuantity = (q) => {
    setQuantity(q.value);
  };

  return (
    <div className="detail-item">
      <Link to="/" className="return waves-effect waves-light">
        <i id="return-button" className="material-icons">
          arrow_back
        </i>
      </Link>

      <div id="product" className="card" key={id}>
        <div className="card-content">
          <div id="product-img" className="card-image">
            <img src={randomImage} alt="product" />
          </div>
        </div>

        <div id="product-information" className="card-information">
          <div className="row">
            <div className="col">
              <h5>
                <b>{name}</b>
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h6>{brand}</h6>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Orci in
                primis aliquet lacus aenean dui quisque. Accumsan lobortis nisl
                mauris fringilla proin tellus aptent tempus. Nostra lobortis
                blandit lectus ante nullam maximus iaculis tellus. Litora
                himenaeos eros nibh taciti venenatis nisl vivamus lectus
                eleifend. Semper congue iaculis, diam quisque vulputate nullam.
                Aptent lorem mus senectus aptent aliquam.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <b>Available: </b>
              {available ? (
                <p>In stock!</p>
              ) : (
                <p className="not-available">Out of stock!</p>
              )}
            </div>

            <div className="col">
              <b>Weight:</b>
              <p>{weight}</p>
            </div>

            <div className="col">
              <span className="price">
                <b>Price:</b>
                <p>{price} SEK</p>
              </span>
            </div>
          </div>

          <div className="row">
            <ErrorBoundary>
              <ProductOptions
                options={options}
                updateColor={updateColor}
                updatePower={updatePower}
                updateStorage={updateStorage}
                updateQuantity={updateQuantity}
              />
            </ErrorBoundary>
          </div>

          <div className="row right">
            <ErrorBoundary>
              <ProductToCart
                product={product}
                color={chosenColor}
                power={chosenPower}
                storage={chosenStorage}
                quantity={chosenQuantity}
              />
            </ErrorBoundary>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
