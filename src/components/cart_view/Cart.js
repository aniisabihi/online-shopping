// noinspection JSUnresolvedVariable

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../store/reducers/slices/cartSlice";
import { ToastContainer } from "react-toastify";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="detail-item">
      <Link to="/" className="return waves-effect waves-light">
        <i id="return-button" className="material-icons">
          arrow_back
        </i>
      </Link>

      <div id="product" className="card">
        <div className="cart-container">
          {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <h2>Your cart is empty</h2>
            </div>
          ) : (
            <div>
              <div className="titles">
                <h3 className="product-title">Product</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {cart.cartItems &&
                  cart.cartItems.map((cartItem) => (
                    <div className="cart-item" key={cartItem.id}>
                      <div className="cart-product">
                        <div>
                          <h5>{cartItem.name}</h5>
                          <p>Color: {cartItem.color}</p>
                          {cartItem.power > 0 && <p>Power: {cartItem.power}</p>}
                          {cartItem.storage > 0 && (
                            <p>Storage: {cartItem.storage}</p>
                          )}
                          <button
                            onClick={() => handleRemoveFromCart(cartItem)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart-product-price">{cartItem.price}</div>
                      <div className="cart-product-quantity">
                        <button onClick={() => handleDecreaseCart(cartItem)}>
                          -
                        </button>
                        <div className="count">{cartItem.cartQuantity}</div>
                        <button onClick={() => handleAddToCart(cartItem)}>
                          +
                        </button>
                      </div>
                      <div className="cart-product-total-price">
                        {cartItem.price * cartItem.cartQuantity} SEK
                      </div>
                    </div>
                  ))}
              </div>
              <div className="cart-summary">
                <button className="clear-btn" onClick={() => handleClearCart()}>
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Total</span>
                    <span className="amount">{cart.cartTotalAmount} SEK</span>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
