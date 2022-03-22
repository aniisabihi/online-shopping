import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo" title="Home">
          Online Shopping
        </Link>

        <Link to="/cart" className="right" title="View cart">
          <i className="material-icons">shopping_cart</i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
