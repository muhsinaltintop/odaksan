
import React from 'react'
import ProductCard from './_atoms/ProductCard'
import products from '../../public/_mocks_/products.json'


const ProductRenderer = ({model, category, type}) => {
  const filteredProducts = products.filter(
    (product) => product.model.toLowerCase() === model && product.category.toLowerCase().includes(category) && product.type.toLowerCase() === type
  );

  return (
    filteredProducts.map((product) => (
      <div key={product.id} className='max-w-80'>
        <ProductCard product={product} />
      </div>
    ))
  )
}

export default ProductRenderer

