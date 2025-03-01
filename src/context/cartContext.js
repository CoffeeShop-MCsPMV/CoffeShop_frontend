import { createContext, useState } from "react";

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  

  function addToCart(product) {
    const list = [...cartList];
    const thisTermekInCart = list.find((data) => data.name === product.name);

    if (thisTermekInCart === undefined) {
      product.pcs = 1;
      list.push(product);
    } else {
      thisTermekInCart.pcs++;
    }

    setCartList([...list]);
    countTotal()
  }

  function pcsEdit(product, pcs) {
    const list = [...cartList];
    const thisTermekInCart = list.find((data) => data.name === product.name);

    if (thisTermekInCart) {
        thisTermekInCart.pcs = pcs;

      if (pcs === 0) {
        const productIndex = list.indexOf(thisTermekInCart);
        list.splice(productIndex, 1);
      }

      setCartList([...list]);
      countTotal();
    }
  }

  function deleteFromCart(product){
    pcsEdit(product, 0)
  }

  

  function countTotal() {
    let sum = cartList.reduce((runningTotal, product) => {
      return runningTotal + product.current_price * product.pcs;
    }, 0);
    setTotal(sum);
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, pcsEdit, total, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
