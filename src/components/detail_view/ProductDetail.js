// noinspection JSUnresolvedVariable

import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { LoremIpsum } from "react-lorem-ipsum";
import ProductImages from "../app_data/ProductImages";
import { addToCart } from "../../store/reducers/slices/cartSlice";
import { ProductOptions } from "./ProductOptions";
import ErrorBoundary from "../error_handling/ErrorBoundary";

export default function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = location.state;
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  const handleAddToCart = (product) => {
    if (product.available) {
      // && product.options[product.index].quantity !== 0
      dispatch(addToCart(product));
      /*console.log(product.options[product.index].quantity);
      product.options[product.index].quantity--;
      console.log(product.options[product.index].quantity);*/
      navigate("/cart");
    }
  };

  return (
    <div className="detail-item">
      <Link to="/" className="return waves-effect waves-light">
        <i id="return-button" className="material-icons">
          arrow_back
        </i>
      </Link>

      <div id="product" className="card" key={product.id}>
        <div className="card-content">
          <div id="product-img" className="card-image">
            <img src={randomImage} alt="product" />
          </div>
        </div>

        <div id="product-information" className="card-information">
          <div className="row">
            <div className="col">
              <h5>
                <b>{product.name}</b>
              </h5>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h6>{product.brand}</h6>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <LoremIpsum avgSentencesPerParagraph={6} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <b>Available: </b>
              {product.available ? (
                <p>In stock!</p>
              ) : (
                <p className="not-available">Out of stock!</p>
              )}
            </div>

            <div className="col">
              <b>Weight:</b>
              <p>{product.weight}</p>
            </div>

            <div className="col">
              <span className="price">
                <b>Price:</b>
                <p>{product.price} SEK</p>
              </span>
            </div>
          </div>

          <div className="row">
            <ErrorBoundary>
              <ProductOptions options={product.options} />
            </ErrorBoundary>
          </div>

          <div className="row right">
            <button
              disabled={!product.available}
              id="add-button"
              title="Add to cart"
              aria-label="Add product to cart"
              onClick={() => handleAddToCart(product)}
              className="btn-large waves-effect waves-light waves-green"
            >
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
