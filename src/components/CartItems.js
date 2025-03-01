import React, { useContext } from 'react';
import CartItem from './CartItem';
import { ApiContext } from '../context/apiContext';


function CartItems() {
  const { setCartList, cartList } = useContext(ApiContext);

 

  return (
    <div>
      {cartList?.map((product, i) => (
        <CartItem item={product} key={i}  />
      ))}
    </div>
  );
}

export default CartItems;
