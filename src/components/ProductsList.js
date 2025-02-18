import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { ApiContext, productList } from '../context/apiContext'

function ProductsList() {
    const {productList}=useContext(ApiContext)
    
  return (
    <>{
        productList?.map((product,i)=>{
          console.log(product)
            return <ProductCard product={product} index={i} key={i} />
        })
}</>
  )
}

export default ProductsList