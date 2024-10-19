import React from 'react'
import MainSlider from './MainSlider'
import Belt from './Belt'
import MainProducts from './MainProducts'
import Banner from './_atoms/Banner'
import ProductCardSlider from './ProductCardSlider'
import ReferenceSlider from './ReferenceSlider'

const MainPage = () => {
  return (
    <div>
      <div className='mb-10'>
        <MainSlider/>
      </div>
      <div className='px-16  mb-10 bg-[#6d6968] sm:px-0'>
        <Belt/>
      </div>
      <div className='mb-10 md:mt-20'>
        <MainProducts/>
      </div>
      <div><Banner/></div>
      <div className='md:mx-40 my-8'><ProductCardSlider/></div>
      <div className='w-screen pb-10 my-20'><ReferenceSlider/></div>
    </div>
  )
}

export default MainPage