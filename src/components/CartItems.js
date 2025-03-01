import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/cartContext';


function CartItems() {
  const {  cartList, total } = useContext(CartContext);
  

 

 

  return (
    <div>
      {cartList?.map((product, i) => (
        <CartItem item={product} key={i}  />
      ))}
      <p>{total}</p>
    </div>
  );
}

export default CartItems;
