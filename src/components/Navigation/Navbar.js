// noinspection JSUnresolvedVariable

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  let { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <div className="col left">
          <Link
            to="/"
            id="home-button"
            className="brand-logo waves-effect waves-light"
            title="Home"
          >
            Online Shopping
          </Link>
        </div>

        <div className="row right">
          <div className="col">
            <span id="cart-badge">Items in cart: {cartTotalQuantity}</span>
          </div>

          <div className="col">
            <Link
              to="/cart"
              id="cart-button"
              className="waves-effect waves-light"
              title="View cart"
            >
              <i className="material-icons">shopping_cart</i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
