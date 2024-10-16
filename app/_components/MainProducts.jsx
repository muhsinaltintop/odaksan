import React from 'react'
import ProductCard from './_atoms/ProductCard'

const MainProducts = () => {
  return (
<div className='text-center w-full'>

    <h2 className='text-2xl font-bold'>ÜRÜNLER</h2>
    <div className='w-full h-full'>
        <div className='h-full grid grid-cols-1 gap-x-[2%] gap-y-[2%] pt-[4%] pb-[22%] md:grid-cols-2 md:gap-x-[5%] md:gap-y-[5%] px-[6%] md:pt-[3%] md:pb-[8%] my-4 mx-20 justify-between w-12/12'>
            <div className='w-12/12'>
            <ProductCard/>
            </div>
            <div className='w-12/12'>
            <ProductCard/>
            </div>
            <div className='w-12/12'>
            <ProductCard/>
            </div>
            <div className='w-12/12'>
            <ProductCard/>
            </div>
        </div>

    </div>
</div>
  )
}

export default MainProducts