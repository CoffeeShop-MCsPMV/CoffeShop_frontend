import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ApiContext } from "../context/apiContext";
function ProductCard(props) {

  const {setCartList, cartList}=useContext(ApiContext);
  const list = []

  function addToCart(data){
    
    list.push(data)
    setCartList(...list)
    console.log(cartList)


}
  return (
    <div onClick={()=>{addToCart(props.product); console.log(`kosárhoz adva:${props.product.name}`)}} className="product-card">
      <div className="image-container">
        <Card.Img
          className="product-image"
          src={`http://localhost:8000/${props.product.src}`}
        />
      </div>
      <div className="info">
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.current_price}€</Card.Text>
      </div>
    </div>
  );
}

export default ProductCard;
