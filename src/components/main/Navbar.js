// noinspection JSUnresolvedVariable

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link
          to="/"
          id="home-button"
          className="brand-logo waves-effect waves-light"
          title="Home"
        >
          Online Shopping
        </Link>

        <div className="right">
          <Link
            to="/cart"
            id="cart-button"
            className="right waves-effect waves-light"
            title="View cart"
          >
            <i className="material-icons">shopping_cart</i>
          </Link>
          <span className="cart-badge">{cartTotalQuantity}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
