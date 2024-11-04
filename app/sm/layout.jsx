"use client"
import React from 'react'
import Breadcrum from '../_components/_atoms/Breadcrum'
import SideMenu from '../_components/_atoms/SideMenu'

const SmLayout = ({children, params}) => {
  const handleClick = (url) => {
    router.push(url);
  };

  return (
    <div className='mx-20 my-10'>

        <Breadcrum/>
      <div className='flex mx-20 my-10'>
      <SideMenu variation="products" link={params.productName} onMenuClick={handleClick} />

          
            
              {children}
      
      </div>
    </div>
  )
}

export default SmLayout