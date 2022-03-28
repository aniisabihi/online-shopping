// noinspection JSUnresolvedVariable

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "./quantitySlice";

export function Quantity() {
  const quantity = useSelector((state) => state.quantity.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="col">
          <span>{quantity}</span>
        </div>
        <div className="col">
          <button
            id="increment-button"
            title="Increase product quantity"
            aria-label="Increment product quantity"
            onClick={() => dispatch(increment())}
            className="btn-small waves-effect waves-light waves-green"
          >
            <i className="material-icons">add</i>
          </button>
          <button
            id="decrement-button"
            title="Decrease product quantity"
            aria-label="Decrement product quantity"
            onClick={() => dispatch(decrement())}
            className="btn-small waves-effect waves-light waves-green"
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
        <div className="row">
          <div className="col right">
            <button
              id="remove-button"
              title="Remove product from cart"
              aria-label="Remove product"
              onClick={() => dispatch(remove())}
              className="btn-small waves-effect waves-light waves-green"
            >
              Remove product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
