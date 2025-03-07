import React, { useContext, useEffect, useState } from "react";
import { MixerContext } from "../context/mixerContext";

function IngredientCard(props) {
    const {setAddedIngredientList, addedIngredientList}=useContext(MixerContext)
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        addIngredient()
        
    
      }, [index])
    
    
      useEffect(()=>{
        console.log(addedIngredientList)
        
    
      }, [addedIngredientList])

    if (!props.list || props.list.length === 0) {
        return <p>Nincs elérhető összetevő.</p>;
      }
  
  const product = props.list[index];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? props.list.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === props.list.length - 1 ? 0 : prevIndex + 1
    );
  };

 


  function addIngredient(){
    setAddedIngredientList(prev => {
        const newAddedingredientList = [...prev]; 
        newAddedingredientList[props.id] = product.product_id; 
        console.log(props.id, product.product_id )
        return newAddedingredientList; })
  }



  return (
    <>
     
      <div className="Ingredient-card" key={product.product_id} id={props.id}>
        <div>
      <p>{product.name}</p>
      </div>
      <div className="ingredient-photo">
        <button onClick={handlePrev}>ᐊ</button>
        <img
          src={`http://localhost:8000/${product.src}`}
          alt={`${product.name}`}
        />
        <button onClick={handleNext}>ᐅ</button>
      </div>
      </div>
    </>
  );
}

export default IngredientCard;

