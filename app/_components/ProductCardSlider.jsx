import React from 'react'
import products from '../../public/_mocks_/products.json'
import ProductCard from './_atoms/ProductCard'

const ProductCardSlider = () => {
  return (
    <div className=" flex gap-4 slider-container">
      {products.map((product) => (
        <div key={product.id} className='product-card-wrapper'>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductCardSlider
