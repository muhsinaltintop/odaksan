import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ProductCard = ({product}) => {
  return (
<div className='border-[1px] bg-neutral-100 rounded-xl mx-4 max-h-96 group'>
         <Link href={`/sm/${product.slug}`}>
        <div className='w-full h-auto pt-2'>
            <div className='mx-8 my-2'>
              <div className='w-full flex justify-center items-center p-2 rounded-xl'>
                  <Image 
                    src={product.featuredImage} 
                    width="80" 
                    height="80" 
                    alt='focus-srd'
                    className='w-auto h-auto z-10'
                    />
                <div className='absolute w-40 h-40 rounded-full bg-gradient-to-t from-white to-yellow-50 shadow-lg  hover:shadow-xl group-hover:shadow-[#2c244f]'>
                  </div>
              </div>
            </div>
            <div className='text-lg text-center mt-6 font-bold'>{product.productName}</div>
            <div className='w-full mt-4 p-2 bg-red-700 text-lg text-center font bold rounded-b-xl'>
                <span className=' text-white border-black rounded-2xl'>
                İNCELE

                </span>
              </div>
        </div>
        </Link>
    </div>
  )
}

export default ProductCard