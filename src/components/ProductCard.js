import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ApiContext } from "../context/apiContext";
import { CartContext } from "../context/cartContext";
import AddedToast from "./AddedToast";

function ProductCard(props) {
  const [show, setShow] = useState(false);

  const { addToCart, isOrdered } = useContext(CartContext);

  const handleClick = () => {
    if (!isOrdered) {
      addToCart(props.product);
      setShow(true);
    }
  };

  return (
    <div onClick={handleClick}
    style={{ cursor: isOrdered ? "default" : "pointer" }}
     className="product-card">
      <AddedToast show={show} setShow={setShow} />
      <div className="image-container">
        <Card.Img
          className="product-image"
          src={`http://localhost:8000/${props.product.src}`}
        />
      </div>
      <div className="info">
        <Card.Title className="product-name">{props.product.name}</Card.Title>
        <Card.Text>{props.product.current_price}€</Card.Text>
      </div>
    </div>
  );
}

export default ProductCard;
