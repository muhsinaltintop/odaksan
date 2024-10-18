import React from 'react'
import Announcement from './_atoms/Announcement'
import ContactLine from './ContactLine'
import Header from './Header'
import Slider from './Slider'
import Belt from './Belt'
import MainProducts from './MainProducts'
import Banner from './_atoms/Banner'
import ProductCardSlider from './ProductCardSlider'

const MainPage = () => {
  return (
    <div>
      <div>
        <Slider/>
      </div>
      <div className='px-16  mt-4 bg-[#6d6968] sm:px-0'>
        <Belt/>
      </div>
      <div className='mt-4 md:mt-20'>
        <MainProducts/>
      </div>
      <div><Banner/></div>
      <div className='md:mx-40'><ProductCardSlider/></div>
    </div>
  )
}

export default MainPage