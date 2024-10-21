import React from 'react'
import MainSlider from './MainSlider'
import Belt from './Belt'
import MainProducts from './MainProducts'
import Banner from './_atoms/Banner'
import ProductCardSlider from './ProductCardSlider'
import ReferenceSlider from './ReferenceSlider'
import CustomerComments from './CustomerComments'

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
      <div className='pb-10 mt-20'><ReferenceSlider/></div>
      <div className='md:px-4 my-5'><CustomerComments/></div>
    </div>
  )
}

export default MainPage