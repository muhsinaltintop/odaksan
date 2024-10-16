import Image from 'next/image'
import React from 'react'

const BeltProductCard = () => {
  return (
    <div className='flex items-center'>
        <div className='max-w-20 sm:max-w-32'>
        <Image 
        src={'/products/srd.png'} 
        width="100" 
        height="100" 
        alt='focus-srd'
        className='w-full h-auto'
        />
        </div>
        <div> 
            <div>

            Mobil Streçleme 
            </div>
            <div className='font-bold'>
            Makineleri

            </div>

            </div>


    </div>
  )
}

export default BeltProductCard