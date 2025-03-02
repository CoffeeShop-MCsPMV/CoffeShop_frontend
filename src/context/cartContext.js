import { createContext, useEffect, useState } from "react";

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItemPcs, setCartItemPcs]=useState(0)
  

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
    console.log("termék a kosárhoz adva")
    
   
  }
  useEffect(()=>{ countTotal()
    sumProductPcs()},[cartList])

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
      sumProductPcs();
    }
  }

  function deleteFromCart(product){
    pcsEdit(product, 0);
  }

  function sumProductPcs() {
    console.log("cartList:", cartList);
    const sumPcs = cartList.reduce((total, product) => {
      return total + product.pcs;
    }, 0);
    setCartItemPcs(sumPcs)
    console.log("dbszám frissítve")
  }
  

  

  function countTotal() {
    console.log("cartList:", cartList);
    let sum = cartList.reduce((runningTotal, product) => {
      return runningTotal + product.current_price * product.pcs;
    }, 0);
    setTotal(sum.toFixed(2));
    console.log("végösszeg frissítve")
  }

  function makeOrderDataList() {
    const orderData = [];
    cartList.forEach(product => { 
        for (let i = 0; i < product.pcs; i++) {
            orderData.push(product);
        }
    });
    return orderData;
}

function pushOrder(){
    
}


  return (
    <CartContext.Provider value={{ cartList, addToCart, pcsEdit, total, deleteFromCart, cartItemPcs }}>
      {children}
    </CartContext.Provider>
  );
};
