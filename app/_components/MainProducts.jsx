import React from 'react'
import CategoryProductCard from './_atoms/CategoryProductCard'

const MainProducts = () => {
  return (
<div className='text-center w-full'>

    <h2 className='text-2xl font-bold'>ÇALIŞMALARIMIZ</h2>
    <div className='w-full h-full'>
        <div className='h-full grid grid-cols-1 gap-x-[2%] gap-y-[2%] pt-[4%] pb-[22%] md:grid-cols-2 md:gap-x-[10%] md:gap-y-[5%] px-[6%] md:pt-[3%] md:pb-[8%] my-4 md:mx-20 justify-between w-12/12'>
            <div className='w-12/12'>
            <CategoryProductCard/>
            </div>
            <div className='w-12/12'>
            <CategoryProductCard/>
            </div>
            <div className='w-12/12'>
            <CategoryProductCard/>
            </div>
            <div className='w-12/12'>
            <CategoryProductCard/>
            </div>
        </div>

    </div>
</div>
  )
}

export default MainProducts