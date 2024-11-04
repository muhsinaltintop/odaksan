import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryProductCard = ({categoryName, categoryImage, categorySlug}) => {
  return (
    <div className='border-[1px] bg-slate-200 border-neutral-700 rounded-xl'>
        <Link href={categorySlug}>
        <div className='w-full h-auto py-8 px-5 sm:py-20 '>
            <div className='w-full flex justify-center items-center'>
                <Image 
                  src={categoryImage} 
                  width="300" 
                  height="300" 
                  alt='focus-srd'
                  className='w-auto h-auto'
                />
            </div>
            <div className='text-xl text-center mt-6 font-bold'>{categoryName}</div>
            <div className='text-xl text-center mt-6 font bold'>
                <span className='px-4 py-2 bg-red-700 text-white border-black rounded-2xl'>
                İNCELE

                </span>
                </div>
        </div>
        </Link>
    </div>
  )
}

export default CategoryProductCard
