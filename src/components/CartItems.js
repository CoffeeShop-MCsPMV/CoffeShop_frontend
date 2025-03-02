import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/cartContext";

function CartItems() {
  const { cartList, total, postOrder } = useContext(CartContext);
  

  return (
    <div className="cart-page">
      <div>
        {cartList?.map((product, i) => (
          <CartItem item={product} key={i} />
        ))}
         </div>
         <div>
        <h4>Total: {total}€</h4>
        <button onClick={postOrder}>Order</button>
        </div>
     
    </div>
  );
}

export default CartItems;
