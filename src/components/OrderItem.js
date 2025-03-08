import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { ApiContext } from "../context/apiContext";
import "../style/Orders.css";

function OrderItem(props) {
  const { getData } = useContext(ApiContext);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getData(`/api/orders/${props.item.order_id}/products`, (data) => {
      console.log("user order items:", data.orders);
      setOrderItems(data.orders);
    });
  }, [props.item.order_id]);

  return (
    <Accordion.Item eventKey={props.item.order_id} className="order-item">
      <Accordion.Header>
        <p>Order number: {props.item.order_id}</p>
        <p>Total: {props.item.total_cost}€</p>
      </Accordion.Header>
      <Accordion.Body>
        {orderItems.length > 0 ? (
          orderItems.map((item, index) => <div key={index}>{item.name}</div>)
        ) : (
          <div>No order items available</div>
        )}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default OrderItem;
