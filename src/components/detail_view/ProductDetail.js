import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { LoremIpsum } from "react-lorem-ipsum";
import ProductImages from "../app_data/ProductImages";
import { addToCart } from "../../store/reducers/slices/cartSlice";

export default function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { product } = location.state;
  const randomImage =
    ProductImages[Math.floor(Math.random() * ProductImages.length)];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  // noinspection JSUnresolvedVariable
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
            <h5>
              <b>{product.name}</b>
            </h5>

            <h6>{product.brand}</h6>

            <LoremIpsum avgSentencesPerParagraph={6} />

            <span className="price">
              <p>
                <b>Price: {product.price} SEK</b>
              </p>
            </span>
          </div>

          <div className="row">
            <div className="col">Options</div>
            <div className="col">Options</div>
            <div className="col">Options</div>
          </div>

          <div className="row right">
            <button
              id="add-button"
              title="Add to cart"
              aria-label="Add product to cart"
              onClick={() => handleAddToCart(product)}
              className="btn-large waves-effect waves-light waves-green"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
