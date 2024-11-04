import React from 'react'
import ProductList from '../_components/ProductList'

const page = () => {
  return (
    <div className='flex'>
      <div className='w-1/12'>Side Menu</div>
      <div className='w-11/12'>
        <ProductList type={"kolibatlama"}/>
      </div>
    </div>
  )
  


 
  
}

export default page
