import React from "react";
import CartItems from "../components/CartItems";
import "../style/Cart.css";

function Cart() {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <CartItems />
    </div>
  );
}

export default Cart;
