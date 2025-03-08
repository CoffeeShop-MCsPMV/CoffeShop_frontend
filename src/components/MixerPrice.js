import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { MixerContext } from '../context/mixerContext'

function MixerPrice() {
    const {addToCart}=useContext(CartContext);
    const{addedIngredientList, mixerTotal}=useContext(MixerContext)



  return (
    <div>MixerPrice
    <h1>{mixerTotal}</h1>
    <button onClick={()=>addToCart(addedIngredientList)}>Order</button>
    </div>
  )
}

export default MixerPrice