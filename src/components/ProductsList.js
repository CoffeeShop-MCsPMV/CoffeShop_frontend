import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { ApiContext, productList } from '../context/apiContext'

function ProductsList() {
    const {productList, setProductList, getData}=useContext(ApiContext);
    useEffect(() => {
        getData('/api/by-type?type=F', setProductList);
      }, []);
    
    
  return (
    <div className='products'>{
        productList?.map((product,i)=>{
            return <ProductCard product={product} index={i} key={i} />
        })
}</div>
  )
}

export default ProductsList