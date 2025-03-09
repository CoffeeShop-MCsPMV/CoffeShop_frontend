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
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState([]);
  const [orderData, setOrderData] = useState([]);

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

  useEffect(() => {
    if (isOrdered) {

      const interval = setInterval(() => {
        getOrderDatas();
      }, 30000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isOrdered, orderId]); 

  
  useEffect(() => {
    if (orderData) {
      console.log("Updated orderData:", orderData);
      checkOrderStatus();
    }
  }, [orderData]); 

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
    let sumPcs = 0;

    cartList.forEach((product) => {
      if (Array.isArray(product)) {
        sumPcs++;
      } else {
        sumPcs += product.pcs;
      }
    });

    setCartItemPcs(sumPcs);
    console.log("dbszám frissítve");
  }

  function countTotal(list, setData) {
    console.log("usedList:", list);

    if (Array.isArray(list) && list.length > 0) {
      let sum = 0.0;
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

    postData("/api/orders", orderData, setOrderId);
    setIsOrdered(true);
    setCartListEmpty();
  }

  function setCartListEmpty() {
    setCartList([]);
  }

  function getOrderDatas() {
    getData(`api/orders/${orderId.order_id}`, setOrderData);
  }

  function checkOrderStatus() {
    if (orderData.order_status === "PUP") {
      setIsOrdered(false);
      setOrderId([]);
      setOrderData([]);
    }
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
        setCartListEmpty,
        isOrdered,
        orderId,
        orderData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
