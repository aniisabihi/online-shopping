import React from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../error_handling/ErrorBoundary";
import { Quantity } from "../../slices/Quantity";

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
            <div className="col left">left</div>
            <div className="col right">
              <ErrorBoundary>
                <Quantity />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
