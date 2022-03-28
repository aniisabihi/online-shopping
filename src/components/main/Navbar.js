import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        <Link
          to="/cart"
          id="cart-button"
          className="right waves-effect waves-light"
          title="View cart"
        >
          <i className="material-icons">shopping_cart</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
