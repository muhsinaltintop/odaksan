import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProductCard = ({product}) => {
  return (
<div className='border-[1px] border-neutral-700 rounded-xl mx-4'>
         <Link href={`/sm/${product.slug}`}>
        <div className='w-full h-auto py-20'>
            <div className='w-full flex justify-center items-center'>
                <Image 
                  src={product.featuredImage} 
                  width="100" 
                  height="100" 
                  alt='focus-srd'
                  className='w-auto h-auto'
                />
            </div>
            <div className='text-xl text-center mt-6 font-bold'>{product.productName}</div>
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

export default ProductCard