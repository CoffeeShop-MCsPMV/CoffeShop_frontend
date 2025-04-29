import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/cartContext";
import "../style/Cart.css";

function CartItems() {
  const {
    cartList,
    total,
    postOrder,
    isOrdered,
    orderData,
    orderStatus,
    orderId,
  } = useContext(CartContext);

  return (
    <div className="cart-items">
      {isOrdered && orderData ? (
        <div className="order-div">
          <h2>Your order number is: {orderId.order_id}</h2>
          <h4>{orderStatus.description}</h4>
          <img src={orderStatus.icon} alt="" />
        </div>
      ) : cartList?.length === 0 ? (
        <div>
          <h2>Your cart is empty</h2>
        </div>
      ) : (
        <>
          <div>
            <h1>Your Cart</h1>
            {cartList?.map((product, i) => (
              <CartItem item={product} key={i} />
            ))}
          </div>
          <div className="total">
            <div>
              <h4>Total: {total}€</h4>
            </div>
            <div>
              <button onClick={postOrder}>Order</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItems;
