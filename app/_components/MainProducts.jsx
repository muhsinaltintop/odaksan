import React from 'react'
import CategoryProductCard from './_atoms/CategoryProductCard'
import categories from '../../public/_mocks_/categories.json'

const MainProducts = () => {
  return (
<div className='text-center w-full'>
    <h2 className='text-2xl font-bold'>ÇALIŞMALARIMIZ</h2>
    <div className='w-full h-full'>
        <div className='h-full w-12/12 grid grid-cols-1 gap-x-[2%] gap-y-[2%] pt-[4%] pb-[22%] md:grid-cols-2 md:gap-x-[10%] md:gap-y-[5%] px-[6%] md:pt-[3%] md:pb-[8%] my-4 md:mx-20 justify-between '>

        {categories.map((category, index) => {
          return (<div key={index} className='w-full h-full flex flex-col'>
            <CategoryProductCard categoryName={category.categoryName} categoryImage={category.image} categorySlug={category.slug}/>
            </div>)
        })}
            
            
        </div>

    </div>
</div>
  )
}

export default MainProducts