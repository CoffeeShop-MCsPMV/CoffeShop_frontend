import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { MixerContext } from '../context/mixerContext'

function MixerPrice() {
    const {addToCart}=useContext(CartContext)
    const{addedIngredientList}=useContext(MixerContext)


  return (
    <div>MixerPrice
    <h1>Összeg</h1>
    <button>Order</button>
    </div>
  )
}

export default MixerPrice