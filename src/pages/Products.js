import React from 'react'
import ProductsList from '../components/ProductsList'
import "../style/Product.css";
import ProductFilter from '../components/ProductFilter';
import ProductCartIcon from '../components/ProductCartIcon';

function Products() {
  return (<>
  <ProductCartIcon/>
    <ProductFilter/>
    <div  className="product-page">
    <ProductsList/>
    </div>
    </>
  )
}

export default Products