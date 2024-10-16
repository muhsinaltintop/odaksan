import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex w-full justify-between items-center bg-primary text-white'>
        <div className='w-12/12 font-bold text-white pl-[20%] text-4xl'>GENİŞ SERVİS AĞI</div>
        <div className='flex w-6/12'>
            <div className='w-6/12 p-[2%]'>
            <Image 
                  src={'/engineer-1.png'} 
                  width="250" 
                  height="250" 
                  alt='focus-srd'
                  className='w-auto h-auto'
                /></div>
            <div className='w-6/12 p-[2%]'><Image 
                  src={'/engineer-2.png'} 
                  width="250" 
                  height="250" 
                  alt='focus-srd'
                  className='w-auto h-auto'
                /></div>
        </div>
    </div>
  )
}

export default Banner