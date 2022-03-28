import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  // noinspection JSUnresolvedVariable
  return (
    <div className="detail-item">
      <Link to="/" className="return waves-effect waves-light">
        <i id="return-button" className="material-icons">
          arrow_back
        </i>
      </Link>

      <div id="product" className="card">
        <div className="card-content">Product</div>

        <div id="product-information" className="card-information">
          <h5>
            <b>Namn</b>
          </h5>

          <h6>Brand</h6>

          <div className="row">
            <div className="col left">
              <p>Options</p> <p>Options</p>
            </div>
            <div className="col right">
              <button
                id="remove-button"
                className="btn-large waves-effect waves-light waves-green"
                title="Remove item from cart"
              >
                Remove item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
