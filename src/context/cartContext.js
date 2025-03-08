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
  const { isOrdered, setIsOrdered } = useState(false);

  function addToCart(product) {
    const list = [...cartList];
    if (Array.isArray(product)) {
      list.push(product);
    } else {
      const thisTermekInCart = list.find(
        (data) => data.product_id === product.product_id
      );

      if (thisTermekInCart === undefined) {
        product.pcs = 1;
        list.push(product);
      } else {
        thisTermekInCart.pcs++;
      }
    }

    setCartList([...list]);
    console.log("termék a kosárhoz adva");
  }
  useEffect(() => {
    countTotal(cartList, setTotal);
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

      countTotal(cartList, setTotal);
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

  function countTotal(list, setData) {
    console.log("usedList:", list);

    if (Array.isArray(list) && list.length > 0) {
      let sum = 0.00;
      list.forEach((item) => {
        if (Array.isArray(item)) {
          item.forEach((ingredient) => {
            sum += parseFloat(ingredient.current_price);
          });
        } else {
          sum += parseFloat(item.current_price);
        }
      });
      setData(sum.toFixed(2));

      console.log("összeg frissítve:", sum);
    } else {
      console.log("A lista üres vagy nem érvényes");
      setData("0.00");
    }
  }

  function makeOrderProductList() {
    const orderProductList = [];
    cartList.forEach((product) => {
      console.log(product);

      if (Array.isArray(product)) {
        const mixedProductIdList = [];
        product.forEach((element) => {
          mixedProductIdList.push(element.product_id);
        });
        orderProductList.push(mixedProductIdList);
      }

      for (let i = 0; i < product.pcs; i++) {
        orderProductList.push(product.product_id);
      }
    });
    console.log(orderProductList);
    return orderProductList;
  }
  function postOrder() {
    let orderData = {
      userId: user ? user.id : null,
      products: makeOrderProductList(),
    };

    postData("/api/orders", orderData);
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
        countTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
