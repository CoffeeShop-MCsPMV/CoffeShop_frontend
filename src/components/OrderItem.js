import React, { useContext, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { ApiContext } from "../context/apiContext";
import "../style/Orders.css";

function OrderItem() {
  const { getData } = useContext(ApiContext);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getData(`/api/user-orders-product`, (data) => {
      setOrderItems(data.orders);
    });
  }, []);

  const groupedOrders = orderItems.reduce((acc, item) => {
    if (!acc[item.order_id]) acc[item.order_id] = [];
    acc[item.order_id].push(item); 
    return acc;
  }, {});

  return (
    <Accordion alwaysOpen>
      <h3>Previous orders</h3>
      {Object.entries(groupedOrders).map(([orderId, items]) => (
        <Accordion.Item eventKey={orderId} key={orderId} className="order-item">
          <Accordion.Header>
            <p>Order number: {orderId}</p>
          </Accordion.Header>
          <Accordion.Body>
            {items.map((item) => (
              <div key={item.cup_id}>
                <strong>Cup ID:</strong> {item.cup_id} <br />
                <strong>Products:</strong> {item.product}
                <hr />
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default OrderItem;
