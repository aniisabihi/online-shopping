// noinspection JSUnresolvedVariable

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/slices/cartSlice";
import { toast } from "react-toastify";

export default function ProductToCart(props) {
  const available = props.product;
  const color = props.color;
  const power = props.power;
  const storage = props.storage;
  const quantity = props.quantity;
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (
      product.available &&
      color !== "" &&
      (power !== 0 || storage !== 0) &&
      quantity !== 0
    ) {
      product.color = color;
      product.power = power;
      product.storage = storage;
      product.quantity = quantity;
      dispatch(addToCart(product));
    } else {
      toast.error(
        "Select all product options to be able to add product to cart.",
        { position: "bottom-left" }
      );
    }
  };

  return (
    <button
      disabled={!available}
      id="add-button"
      title="Add to cart"
      aria-label="Add product to cart"
      onClick={() => handleAddToCart(props.product)}
      className="btn-large waves-effect waves-light waves-green"
    >
      <span>Add to cart</span>
    </button>
  );
}
