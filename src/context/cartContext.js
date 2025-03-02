import { createContext, useContext, useEffect, useState } from "react";
import useAuthContext from "./AuthContext";
import { ApiContext } from "./apiContext";
import { Await } from "react-router-dom";

export const CartContext = createContext("");

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItemPcs, setCartItemPcs] = useState(0);
  const { user } = useAuthContext();
  const { postData, getData } = useContext(ApiContext);
  const [orderId, setOrderId] = useState(null);
  const [cupId, setCupId] = useState(-1);
  const orderUser = user;

  function addToCart(product) {
    const list = [...cartList];
    const thisTermekInCart = list.find(
      (data) => data.product_id === product.product_id
    );

    if (thisTermekInCart === undefined) {
      product.pcs = 1;
      list.push(product);
    } else {
      thisTermekInCart.pcs++;
    }

    setCartList([...list]);
    console.log("termék a kosárhoz adva");
  }
  useEffect(() => {
    countTotal();
    sumProductPcs();
  }, [cartList]);

  function pcsEdit(product, pcs) {
    const list = [...cartList];
    const thisTermekInCart = list.find(
      (data) => data.product_id === product.product_id
    );

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

  function deleteFromCart(product) {
    pcsEdit(product, 0);
  }

  function sumProductPcs() {
    console.log("cartList:", cartList);
    const sumPcs = cartList.reduce((total, product) => {
      return total + product.pcs;
    }, 0);
    setCartItemPcs(sumPcs);
    console.log("dbszám frissítve");
  }

  function countTotal() {
    console.log("cartList:", cartList);
    let sum = cartList.reduce((runningTotal, product) => {
      return runningTotal + product.current_price * product.pcs;
    }, 0);
    setTotal(sum.toFixed(2));
    console.log("végösszeg frissítve");
  }

  function makeOrderProductList() {
    const orderProductList = [];
    cartList.forEach((product) => {
      for (let i = 0; i < product.pcs; i++) {
        orderProductList.push(product.product_id);
      }
    });
    console.log(orderProductList)
    return orderProductList;
  }

  function postOrder(){
    const orderData={
        userId: user.id,
        products: makeOrderProductList()
    }

    postData('/api/orders', orderData)
  }

 

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        pcsEdit,
        total,
        deleteFromCart,
        cartItemPcs,
        postOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
