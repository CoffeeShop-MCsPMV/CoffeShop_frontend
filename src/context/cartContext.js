import { createContext, useState } from "react";

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItemPcs, setCartItemPcs]=useState(0)
  

  function addToCart(product) {
    //const list = [...cartList];
    console.log(product)
    console.log("cartList:", cartList);
    const thisTermekInCart = cartList.find((data) => data.name === product.name);
    
   
    if (thisTermekInCart === undefined) {
      product.pcs = 1;
    //   list.push(product);
    //   console.log("list:" ,list)

    //   setCartList([...list]);

      setCartList(prev => [...prev, product]);
      console.log("cartList:", cartList);
    } else {
      thisTermekInCart.pcs++;
    //   setCartList([...list]);
    setCartList(prev => [...prev, product]);
      console.log("cartList:", cartList);
    }

    
    console.log("termék a kosárhoz adva")
   
    countTotal()
    sumProductPcs()
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
    setTotal(sum);
    console.log("végösszeg frissítve")
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, pcsEdit, total, deleteFromCart, cartItemPcs }}>
      {children}
    </CartContext.Provider>
  );
};
