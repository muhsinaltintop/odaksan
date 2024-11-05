import React from 'react'
import productHelper from '../../public/_mocks_/productHelper.json'
import ProductRenderer from '../_components/ProductRenderer'

const ProductList = ({type}) => {
  return (
    <div>{
        productHelper.map((category)=> {
           return (category.type === type ?
          (<div key={category.id} className='mt-4 mx-20'>
            
            <div  className='text-center font-bold text-xl'>
              {category.title}
            </div> 
            <div className='flex mt-4'>
              <ProductRenderer model={category.model} category={category.category} type={type}/>
            </div>
        </div> ) : ""
        )
          
        })
      } </div>
  )
}

export default ProductList