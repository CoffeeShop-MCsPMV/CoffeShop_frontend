import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ApiContext } from '../context/apiContext'

function ProductsList() {
    const {productList}=useContext(ApiContext)
  return (
    <>{
        productList?.map((product,i)=>{
            return <ProductCard product={product} index={i} key={i} />
        })
}</>
  )
}

export default ProductsList