"use client"
import React from 'react'
import products from '../../../public/_mocks_/products.json'
import Slider from 'react-slick'
import Image from 'next/image'

const page = ({params}) => {
  const filteredProduct = products.filter(product => 
    product.slug.includes(params.urunAdi)
)
const settings = {
  customPaging: function(i) {
    return (
      <a>
        <Image src={filteredProduct[0].featuredImage} width={200} height={300} alt='thumb' className='border'/>
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

  return (

    <div className='w-6/12'>
      <h1 className='font-bold text-xl'>{filteredProduct[0].productName}</h1>
      <div className='flex'>
        <div className='mt-10'>
          <p className='text-justify'>
          {filteredProduct[0].details.spot}
          </p>

            <ul className='mt-5 list-inside list-disc'>
          {filteredProduct[0].details.detailList.map((detail, index) => {

            return (
              <li key={index}>{detail}</li>

            )
          })}

            </ul>
        </div>
        <div className="slider-container w-6/12 mt-10 ml-4">
            <Slider {...settings} className='border w-40 bg-slate-300 rounded-3xl'>
              {filteredProduct[0].images.map((image, index) => {
                return (
                  <div key={index} >
                <Image src={image} width={200} height={300} alt='i' />
              </div>
                )
              })}
              
            </Slider>
    </div>
      </div>    
    </div>

  )
}

export default page